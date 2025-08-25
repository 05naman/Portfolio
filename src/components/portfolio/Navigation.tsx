import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection ? `#${currentSection}` : "");
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Logo Component
  const Logo = () => (
    <div className="flex items-center gap-3 group">
      <div className="p-3 bg-gradient-to-br from-purple-500 to-emerald-400 rounded-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300 group-hover:scale-105">
        <Code2 className="h-6 w-6 text-white" />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
        Naman Nigam
      </span>
    </div>
  );

  // Desktop Navigation Component
  const DesktopNavigation = () => (
    <div className="hidden md:flex items-center space-x-10">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => scrollToSection(item.href)}
          className={`relative transition-all duration-300 text-sm font-medium group ${activeSection === item.href
            ? 'text-purple-400'
            : 'text-slate-400 hover:text-purple-400'
            }`}
        >
          {item.name}
          <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-emerald-400 transition-all duration-300 ${activeSection === item.href ? 'w-full' : 'w-0 group-hover:w-full'
            }`} />
        </button>
      ))}
    </div>
  );

  // Mobile Menu Button Component
  const MobileMenuButton = () => (
    <Button
      variant="ghost"
      size="sm"
      className="md:hidden p-3 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-300"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
  );

  // Mobile Navigation Component
  const MobileNavigation = () => (
    isOpen && (
      <div className="md:hidden py-6 border-t border-slate-700/30 bg-slate-950/80 backdrop-blur-xl">
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`transition-all duration-300 text-left py-3 px-4 rounded-lg font-medium ${activeSection === item.href
                ? 'text-purple-400 bg-purple-500/10 border-l-2 border-purple-400'
                : 'text-slate-400 hover:text-purple-400 hover:bg-purple-500/5'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    )
  );

  // Navigation Container Component
  const NavigationContainer = () => (
    <div className="container px-4">
      <div className="flex items-center justify-between h-20">
        <Logo />
        <DesktopNavigation />
        <MobileMenuButton />
      </div>
      <MobileNavigation />
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
      ? 'bg-slate-950/70 backdrop-blur-xl border-b border-slate-700/30 shadow-lg shadow-black/30'
      : 'bg-transparent'
      }`}>
      <NavigationContainer />
    </nav>
  );
};

export default Navigation;