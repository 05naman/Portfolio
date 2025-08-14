import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* AI Background Effects */}
      <div className="fixed inset-0 bg-gradient-ai-mesh pointer-events-none z-0"></div>
      <div className="fixed inset-0 bg-gradient-ai-hero pointer-events-none z-0"></div>
      
      {/* Animated Grid Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(212,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-ai-float"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ai-neon rounded-full animate-ai-matrix opacity-40"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-ai-electric rounded-full animate-ai-matrix opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-ai-primary rounded-full animate-ai-matrix opacity-50" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
