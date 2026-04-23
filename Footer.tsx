import { Linkedin, Mail, Phone, Instagram as InstagramIcon } from "lucide-react";
import { SiBehance } from "react-icons/si";
import { Divider } from "./Divider";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Phone, href: "tel:0898868022", label: "Phone", testId: "link-phone" },
    { icon: Mail, href: "mailto:eva.kikova@gmail.com", label: "Email", testId: "link-email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/eva-kikova-5135b3311", label: "LinkedIn", testId: "link-linkedin" },
    { icon: SiBehance, href: "https://www.behance.net/evakikova", label: "Behance", testId: "link-behance" },
    { icon: InstagramIcon, href: "https://www.instagram.com/eva_kikova/", label: "Instagram", testId: "link-instagram" },
  ];

  return (
    <footer className="backdrop-blur-md bg-card/80 border-t border-primary/10 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Motto */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-medium tracking-wide">
              I create{" "}
              <span 
                className="italic font-bold text-5xl md:text-6xl inline-block cursor-default"
                style={{ fontFamily: "'Dancing Script', cursive", color: '#5C63C8' }}
                data-testid="text-beautiful"
                onMouseEnter={(e) => {
                  const letters = e.currentTarget.querySelectorAll('.wave-letter');
                  letters.forEach((letter, index) => {
                    setTimeout(() => {
                      letter.classList.add('animate-wave');
                      setTimeout(() => {
                        letter.classList.remove('animate-wave');
                      }, 600);
                    }, index * 50);
                  });
                }}
              >
                {"beautiful".split("").map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block wave-letter"
                  >
                    {letter}
                  </span>
                ))}
              </span>{" "}
              experiences
            </h2>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4" data-testid="footer-social-links">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-center h-9 w-9 rounded-md text-white/80 hover:text-white transition-colors hover-elevate"
                  aria-label={social.label}
                  data-testid={social.testId}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full">
            <Divider />
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/70">
            Designed & Built by Eva Kikova © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
