import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
      <div className="absolute inset-0 bg-gradient-ai-mesh opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-ai-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-ai-pulse"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-ai-glow"></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Profile Section */}
          <div className="relative mb-12 group">
            <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary via-primary/80 to-accent p-1 shadow-lg hover:shadow-primary/20 transition-all duration-700 group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-background/95 backdrop-blur-sm flex items-center justify-center border border-primary/20">
                <div className="text-3xl font-bold text-primary">NN</div>
              </div>
            </div>
            
            {/* Status Indicator */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500 w-6 h-6 rounded-full border-4 border-background shadow-lg animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Professional Badge */}
            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/15 transition-all duration-300 px-4 py-2">
              <Code2 className="w-4 h-4 mr-2" />
              Frontend Developer
            </Badge>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Naman Nigam
                </span>
              </h1>
              
              <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground">
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                <span>Building the future of web experiences</span>
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate <span className="text-primary font-semibold">Full Stack Developer</span> specializing in 
              modern web technologies. Currently pursuing Computer Science at VIT with expertise in 
              React, TypeScript, and cloud technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-primary/20 transition-all duration-300 px-8">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 px-8">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Work
              </Button>
              
              <Button variant="ghost" size="lg" className="hover:bg-primary/10 transition-all duration-300">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto pt-8">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all duration-300 group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-105 transition-transform">8.92</div>
                <div className="text-sm text-muted-foreground">Current CGPA</div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all duration-300 group">
                <div className="text-3xl font-bold text-accent mb-2 group-hover:scale-105 transition-transform">VIT</div>
                <div className="text-sm text-muted-foreground">University</div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all duration-300 group">
                <div className="text-3xl font-bold text-green-500 mb-2 group-hover:scale-105 transition-transform">Open</div>
                <div className="text-sm text-muted-foreground">To Opportunities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;