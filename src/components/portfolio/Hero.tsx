import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-ai-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ai-primary/10 rounded-full blur-3xl animate-ai-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-accent/10 rounded-full blur-3xl animate-ai-pulse"></div>
      </div>

      <div className="container px-4 z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="border-ai-primary text-ai-primary bg-background/10 backdrop-blur-sm">
              Full Stack Developer
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-ai-primary bg-clip-text text-transparent animate-ai-pulse">
              Naman Nigam
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              B.Tech Computer Science & Engineering Student passionate about building scalable web applications 
              and exploring cutting-edge technologies
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Connect
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-4 text-muted-foreground">
            <span>CGPA: 8.92</span>
            <span>•</span>
            <span>VIT Andhra Pradesh</span>
            <span>•</span>
            <span>Available for Internships</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-ai-primary" />
      </div>
    </section>
  );
};

export default Hero;