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
  // Main Content Component
  const MainContent = () => (
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
  );

  // Page Container Component
  const PageContainer = () => (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="relative z-10">
        <Navigation />
        <MainContent />
        <Footer />
      </div>
    </div>
  );

  return <PageContainer />;
};

export default Index;
