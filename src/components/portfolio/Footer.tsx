import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/05naman",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/naman-nigam",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:namannigam300@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <div className="p-2 bg-gradient-ai-primary rounded-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-ai-primary bg-clip-text text-transparent">
                Naman Nigam
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Full Stack Developer passionate about creating innovative web solutions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                asChild
                className="hover:bg-ai-primary hover:text-white hover:border-ai-primary transition-all duration-300"
              >
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              © {currentYear} Made with 
              <Heart className="h-4 w-4 text-red-500 fill-current" /> 
              by Naman Nigam
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Available for internships and collaborations
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;