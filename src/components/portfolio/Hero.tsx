import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

const Hero = () => {
  // Welcome Header Component
  const WelcomeHeader = () => (
    <div className="space-y-6">
      {/* Main Name - Single Line */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-slide-up leading-none">
        <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-emerald-300 bg-clip-text text-transparent">
          Naman Nigam
        </span>
      </h1>

      {/* Tagline */}
      <div className="flex items-center justify-center gap-3 text-lg md:text-xl text-slate-300 animate-fade-in-delayed mt-6">
        <span>Building the future of</span>
        <span className="text-purple-300 font-semibold">web experiences</span>
      </div>
    </div>
  );

  // Description Component
  const Description = () => (
    <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed-2">
      Passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span> specializing in
      modern web technologies. Currently pursuing Computer Science at VIT with expertise in
      React, TypeScript, and cloud technologies.
    </p>
  );

  // Action Buttons Component
  const ActionButtons = () => (
    <div className="flex flex-wrap justify-center gap-6 pt-8 animate-fade-in-delayed-3">
      <Button
        size="lg"
        className="bg-gradient-to-r from-purple-500 to-emerald-400 hover:from-purple-600 hover:to-emerald-500 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 px-12 py-6 text-lg font-medium group rounded-2xl"
        asChild
      >
        <a href="mailto:namannigam300@gmail.com">
          <Mail className="w-6 h-6 mr-3" />
          Get In Touch
        </a>
      </Button>

      <Button
        size="lg"
        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 px-12 py-6 text-lg font-medium group rounded-2xl"
        asChild
      >
        <a href="https://linkedin.com/in/naman-nigam" target="_blank" rel="noopener noreferrer">
          <LinkedInLogoIcon className="w-6 h-6 mr-3" />
          Connect
        </a>
      </Button>
    </div>
  );

  // Stats Card Component
  const StatsCard = ({ value, label, colorClass }: { value: string; label: string; colorClass: string }) => (
    <div className="group relative">
      <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/30 rounded-2xl p-8 hover:bg-slate-800/80 hover:shadow-xl transition-all duration-500 group-hover:scale-105">
        <div className={`text-4xl font-bold ${colorClass} mb-3 group-hover:text-purple-300 transition-colors duration-300`}>
          {value}
        </div>
        <div className="text-slate-400 text-lg font-medium group-hover:text-slate-300 transition-colors duration-300">
          {label}
        </div>
      </div>
    </div>
  );

  // Stats Section Component
  const StatsSection = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-16 animate-fade-in-delayed-4">
      <StatsCard value="8.92" label="Current CGPA" colorClass="text-purple-400" />
      <StatsCard value="VIT" label="University" colorClass="text-orange-400" />
      <StatsCard value="Open" label="To Opportunities" colorClass="text-emerald-400" />
    </div>
  );

  // Main Container Component
  const MainContainer = () => (
    <div className="container px-4 relative z-10">
      <div className="text-center max-w-6xl mx-auto">
        <div className="space-y-12">
          <WelcomeHeader />
          <Description />
          <ActionButtons />
          <StatsSection />
        </div>
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <MainContainer />
    </section>
  );
};

export default Hero;