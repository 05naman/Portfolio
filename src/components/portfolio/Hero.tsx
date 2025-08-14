import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Light Theme Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-ai-primary/10 rounded-full blur-3xl animate-ai-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai-accent/8 rounded-full blur-3xl animate-ai-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ai-neon/6 rounded-full blur-3xl animate-ai-glow"></div>
        
        {/* Subtle scanning lines effect */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-ai-primary/20 to-transparent animate-ai-scan opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ai-secondary/15 to-transparent animate-ai-scan opacity-15" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container px-4 z-10">
        <div className="text-center space-y-8">
          <div className="space-y-8">
            <Badge variant="outline" className="border-ai-primary/40 text-ai-primary bg-white/80 backdrop-blur-md shadow-ai-subtle hover:shadow-ai-glow transition-all duration-500">
              <span className="relative font-medium">
                Full Stack Developer
                <span className="absolute inset-0 bg-ai-primary/10 blur-sm animate-ai-pulse"></span>
              </span>
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-ai-primary bg-clip-text text-transparent relative leading-tight">
              <span className="relative z-10">Naman Nigam</span>
              <div className="absolute inset-0 bg-gradient-ai-primary bg-clip-text text-transparent blur-sm opacity-30 animate-ai-glow"></div>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              B.Tech Computer Science & Engineering Student passionate about building scalable web applications 
              and exploring cutting-edge technologies with <span className="text-ai-primary font-semibold bg-ai-primary/10 px-2 py-1 rounded-md">AI-powered</span> solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="default" size="lg" className="group bg-gradient-ai-primary hover:shadow-ai-glow transition-all duration-500 border-0 relative overflow-hidden px-8 py-3">
              <div className="absolute inset-0 bg-gradient-ai-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform relative z-10" />
              <span className="relative z-10 font-medium">Get In Touch</span>
            </Button>
            <Button variant="outline" size="lg" className="group border-ai-primary/30 bg-white/80 backdrop-blur-md hover:bg-ai-primary hover:text-white hover:shadow-ai-glow transition-all duration-500 px-8 py-3">
              <Github className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">View Projects</span>
            </Button>
            <Button variant="outline" size="lg" className="group border-ai-secondary/30 bg-white/80 backdrop-blur-md hover:bg-ai-secondary hover:text-white hover:shadow-ai-glow transition-all duration-500 px-8 py-3">
              <Linkedin className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Connect</span>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-ai-primary/20 shadow-ai-subtle hover:shadow-ai-glow transition-all duration-300">
              CGPA: <span className="text-ai-primary font-bold text-lg">8.92</span>
            </div>
            <div className="w-2 h-2 bg-ai-secondary rounded-full animate-ai-pulse"></div>
            <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-ai-secondary/20 shadow-ai-subtle hover:shadow-ai-glow transition-all duration-300">
              <span className="font-medium text-foreground">VIT Andhra Pradesh</span>
            </div>
            <div className="w-2 h-2 bg-ai-accent rounded-full animate-ai-pulse"></div>
            <div className="bg-gradient-ai-primary text-white px-6 py-3 rounded-full shadow-ai-glow animate-ai-glow">
              <span className="font-semibold">✨ Available for Internships</span>
            </div>
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