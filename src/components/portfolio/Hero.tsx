import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-primary/20 rounded-full blur-3xl animate-ai-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-ai-accent/20 rounded-full blur-3xl animate-ai-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ai-neon/10 rounded-full blur-3xl animate-ai-glow"></div>
        
        {/* Scanning lines effect */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-ai-primary to-transparent animate-ai-scan opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ai-secondary to-transparent animate-ai-scan opacity-20" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container px-4 z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <Badge variant="outline" className="border-ai-primary text-ai-primary bg-background/20 backdrop-blur-md shadow-ai-glow animate-ai-glow">
              <span className="relative">
                Full Stack Developer
                <span className="absolute inset-0 bg-ai-primary/20 blur-sm animate-ai-pulse"></span>
              </span>
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-ai-primary bg-clip-text text-transparent animate-ai-pulse relative">
              <span className="relative z-10">Naman Nigam</span>
              <div className="absolute inset-0 bg-gradient-ai-primary bg-clip-text text-transparent blur-sm opacity-50 animate-ai-glow"></div>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              B.Tech Computer Science & Engineering Student passionate about building scalable web applications 
              and exploring cutting-edge technologies with <span className="text-ai-neon font-semibold">AI-powered</span> solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="default" size="lg" className="group bg-gradient-ai-primary hover:shadow-ai-intense transition-all duration-500 border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-ai-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </Button>
            <Button variant="outline" size="lg" className="group border-ai-primary/50 bg-background/10 backdrop-blur-md hover:bg-ai-primary hover:shadow-ai-glow transition-all duration-500">
              <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="group border-ai-secondary/50 bg-background/10 backdrop-blur-md hover:bg-ai-secondary hover:shadow-ai-glow transition-all duration-500">
              <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Connect
            </Button>
          </div>

          <div className="flex justify-center items-center space-x-6 text-muted-foreground">
            <span className="bg-gradient-ai-card px-4 py-2 rounded-full border border-ai-primary/20 backdrop-blur-md">
              CGPA: <span className="text-ai-primary font-semibold">8.92</span>
            </span>
            <span className="text-ai-secondary">•</span>
            <span className="bg-gradient-ai-card px-4 py-2 rounded-full border border-ai-secondary/20 backdrop-blur-md">
              VIT Andhra Pradesh
            </span>
            <span className="text-ai-accent">•</span>
            <span className="bg-gradient-ai-card px-4 py-2 rounded-full border border-ai-accent/20 backdrop-blur-md animate-ai-pulse">
              <span className="text-ai-neon font-semibold">Available for Internships</span>
            </span>
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