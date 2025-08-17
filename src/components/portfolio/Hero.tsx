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
          <div className="space-y-12">
            {/* Profile Avatar with Glow Effect */}
            <div className="relative mx-auto w-32 h-32 mb-8">
              <div className="w-full h-full rounded-full bg-gradient-ai-primary p-1 animate-ai-glow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl font-bold text-ai-primary">
                  N
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-ai-primary rounded-full blur-xl opacity-20 animate-ai-pulse"></div>
              {/* Orbiting particles */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-ai-accent rounded-full transform -translate-x-1/2 -translate-y-4 animate-ai-pulse"></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-ai-neon rounded-full transform -translate-x-1/2 translate-y-4 animate-ai-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>
                <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-ai-electric rounded-full transform -translate-y-1/2 -translate-x-6 animate-ai-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-ai-secondary rounded-full transform -translate-y-1/2 translate-x-6 animate-ai-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>

            <Badge variant="outline" className="border-ai-primary/40 text-ai-primary bg-glass-bg backdrop-blur-md shadow-ai-subtle hover:shadow-ai-glow transition-all duration-500 text-sm px-4 py-2">
              <span className="relative font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-ai-neon rounded-full animate-ai-pulse"></div>
                Full Stack Developer
                <span className="absolute inset-0 bg-ai-primary/10 blur-sm animate-ai-pulse"></span>
              </span>
            </Badge>

            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-ai-primary bg-clip-text text-transparent relative leading-tight tracking-tight">
                <span className="relative z-10 inline-block">
                  <span className="inline-block hover:scale-105 transition-transform duration-300">Naman</span>{' '}
                  <span className="inline-block hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.1s'}}>Nigam</span>
                </span>
                <div className="absolute inset-0 bg-gradient-ai-primary bg-clip-text text-transparent blur-sm opacity-30 animate-ai-glow"></div>
              </h1>
              {/* Floating tech keywords */}
              <div className="absolute -top-8 -left-8 text-xs text-ai-accent/70 font-mono animate-ai-float">React</div>
              <div className="absolute -top-4 -right-12 text-xs text-ai-neon/70 font-mono animate-ai-float" style={{animationDelay: '1s'}}>TypeScript</div>
              <div className="absolute -bottom-4 -left-16 text-xs text-ai-electric/70 font-mono animate-ai-float" style={{animationDelay: '2s'}}>Node.js</div>
              <div className="absolute -bottom-8 -right-8 text-xs text-ai-primary/70 font-mono animate-ai-float" style={{animationDelay: '0.5s'}}>AI/ML</div>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              B.Tech Computer Science & Engineering Student passionate about building 
              <span className="text-ai-primary font-semibold bg-ai-primary/10 px-2 py-1 rounded-md mx-1 hover:bg-ai-primary/20 transition-colors">scalable web applications</span>
              and exploring cutting-edge technologies with 
              <span className="text-ai-accent font-semibold bg-ai-accent/10 px-2 py-1 rounded-md hover:bg-ai-accent/20 transition-colors">AI-powered</span> solutions
            </p>

            {/* Typing Animation Effect */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-sm text-ai-neon font-mono bg-glass-bg px-4 py-2 rounded-full border border-ai-neon/20">
                <div className="w-2 h-2 bg-ai-neon rounded-full animate-ai-pulse"></div>
                <span>Currently building amazing experiences...</span>
                <div className="w-px h-4 bg-ai-neon animate-ai-pulse"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button variant="default" size="lg" className="group bg-gradient-ai-primary hover:shadow-ai-glow transition-all duration-500 border-0 relative overflow-hidden px-8 py-3">
              <div className="absolute inset-0 bg-gradient-ai-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform relative z-10" />
              <span className="relative z-10 font-medium">Get In Touch</span>
            </Button>
            <Button variant="outline" size="lg" className="group border-ai-primary/30 bg-glass-bg backdrop-blur-md hover:bg-ai-primary hover:text-background hover:shadow-ai-glow transition-all duration-500 px-8 py-3">
              <Github className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span className="font-medium">View Projects</span>
            </Button>
            <Button variant="outline" size="lg" className="group border-ai-secondary/30 bg-glass-bg backdrop-blur-md hover:bg-ai-secondary hover:text-background hover:shadow-ai-glow transition-all duration-500 px-8 py-3">
              <Linkedin className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="font-medium">Connect</span>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="bg-glass-bg backdrop-blur-md px-6 py-3 rounded-full border border-ai-primary/20 shadow-ai-subtle hover:shadow-ai-glow transition-all duration-300">
              CGPA: <span className="text-ai-primary font-bold text-lg">8.92</span>
            </div>
            <div className="w-2 h-2 bg-ai-secondary rounded-full animate-ai-pulse"></div>
            <div className="bg-glass-bg backdrop-blur-md px-6 py-3 rounded-full border border-ai-secondary/20 shadow-ai-subtle hover:shadow-ai-glow transition-all duration-300">
              <span className="font-medium text-foreground">VIT Andhra Pradesh</span>
            </div>
            <div className="w-2 h-2 bg-ai-accent rounded-full animate-ai-pulse"></div>
            <div className="bg-gradient-ai-primary text-background px-6 py-3 rounded-full shadow-ai-glow animate-ai-glow">
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