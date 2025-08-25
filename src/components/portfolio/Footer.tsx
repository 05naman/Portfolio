import { Mail } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: GitHubLogoIcon,
      href: "https://github.com/05naman",
      label: "GitHub"
    },
    {
      icon: LinkedInLogoIcon,
      href: "https://linkedin.com/in/naman-nigam",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:namannigam300@gmail.com",
      label: "Email"
    }
  ];

  // Brand Section Component
  const BrandSection = () => (
    <div className="text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start gap-2 mb-3">

        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
          Naman Nigam
        </span>
      </div>
      <p className="text-sm text-slate-300 max-w-xs mx-auto md:mx-0">
        Full Stack Developer passionate about creating innovative web solutions
      </p>
    </div>
  );

  // Social Links Component
  const SocialLinks = () => (
    <div className="flex justify-center gap-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={link.label}
          className="text-slate-400 hover:text-purple-400 hover:scale-110 transition-all duration-300 p-2"
        >
          <link.icon className="h-6 w-6" />
        </a>
      ))}
    </div>
  );

  // Copyright Section Component
  const CopyrightSection = () => (
    <div className="text-center md:text-right">
      <p className="text-sm text-slate-300 flex items-center justify-center md:justify-end gap-1">
        © {currentYear} Made by Naman Nigam
      </p>
      <p className="text-xs text-slate-400 mt-1">
        Available for internships and collaborations
      </p>
    </div>
  );

  // Footer Content Component
  const FooterContent = () => (
    <div className="grid md:grid-cols-3 gap-8 items-center">
      <BrandSection />
      <SocialLinks />
      <CopyrightSection />
    </div>
  );

  // Main Container Component
  const MainContainer = () => (
    <div className="container px-4 py-12">
      <FooterContent />
    </div>
  );

  return (
    <footer className="bg-slate-800/30 border-t border-slate-700/50">
      <MainContainer />
    </footer>
  );
};

export default Footer;