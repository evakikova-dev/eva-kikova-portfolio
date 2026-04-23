import { Link } from "wouter";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
  isTall?: boolean;
}

export default function ProjectCard({ project, className = "", style, isTall = false }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} data-testid={`link-project-${project.id}`}>
      <Card className={`group overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 h-full flex flex-col backdrop-blur-md bg-card/80 border-primary/10 ${className}`} style={style}>
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            data-testid={`img-project-${project.id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <div className="flex items-center justify-center h-9 w-9 rounded-md bg-primary text-primary-foreground">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold mb-2 tracking-tight" data-testid={`text-project-title-${project.id}`}>
            {project.title}
          </h3>
          <p className={`text-muted-foreground mb-4 ${isTall ? 'line-clamp-4' : 'line-clamp-2'} leading-relaxed`} data-testid={`text-project-desc-${project.id}`}>
            {project.description}
          </p>
          {isTall && project.keyInnovation && (
            <div className="flex items-start gap-2 mb-4 p-3 rounded-md bg-primary/10 border border-primary/20" data-testid={`text-key-innovation-${project.id}`}>
              <Lightbulb className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(92,99,200,0.5)]" />
              <p className="text-sm text-primary/90 leading-relaxed">
                <span className="font-semibold">Key Innovation:</span> {project.keyInnovation}
              </p>
            </div>
          )}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-xs" data-testid={`badge-tech-${tech}-${project.id}`}>
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
