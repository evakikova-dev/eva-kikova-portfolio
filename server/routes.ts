import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import archiver from "archiver";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/projects", async (_req, res) => {
    try {
      const projects = await storage.getAllProjects();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req, res) => {
    try {
      const project = await storage.getProject(req.params.id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json(message);
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        return res.status(400).json({ message: "Invalid input data" });
      }
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  app.get("/api/download-project", async (_req, res) => {
    try {
      const projectRoot = path.resolve(".");
      const excludeDirs = new Set(["node_modules", ".git", "dist", ".local"]);

      res.setHeader("Content-Type", "application/zip");
      res.setHeader("Content-Disposition", "attachment; filename=eva-kikova-portfolio.zip");

      const archive = archiver("zip", { zlib: { level: 6 } });
      archive.on("error", (err: Error) => { res.status(500).end(err.message); });
      archive.pipe(res);

      function addDir(dirPath: string, zipPath: string) {
        const entries = fs.readdirSync(dirPath, { withFileTypes: true });
        for (const entry of entries) {
          if (excludeDirs.has(entry.name)) continue;
          const fullPath = path.join(dirPath, entry.name);
          const archivePath = path.join(zipPath, entry.name);
          if (entry.isDirectory()) {
            addDir(fullPath, archivePath);
          } else {
            archive.file(fullPath, { name: archivePath });
          }
        }
      }

      addDir(projectRoot, "eva-kikova-portfolio");
      await archive.finalize();
    } catch (error) {
      res.status(500).json({ message: "Failed to create archive" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
