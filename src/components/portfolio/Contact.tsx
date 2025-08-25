import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, ExternalLink } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Badge } from "@/components/ui/badge";

const Contact = () => {
  // Enhanced Background Elements Component
  const BackgroundElements = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
    </div>
  );

  // Enhanced Section Header Component
  const SectionHeader = () => (
    <div className="text-center mb-20">
      <Badge variant="outline" className="mb-6 px-6 py-3 text-base font-medium border-purple-500/30 text-purple-500 hover:bg-purple-500/5 hover:text-purple-500">
        Get In Touch
      </Badge>
      <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-blue-400 to-orange-400 bg-clip-text text-transparent leading-tight">
        Let's Work Together
      </h2>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
        I'm actively seeking internship opportunities and exciting projects.
        Let's connect and build something amazing together!
      </p>
    </div>
  );



  // Unified Contact & Actions Card Component
  const ContactAndActionsCard = () => (
    <Card className="hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 border-slate-700/50 bg-slate-900/30 backdrop-blur-xl rounded-2xl max-w-2xl mx-auto">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl text-purple-300 flex items-center justify-center gap-3">
          <Mail className="h-6 w-6" />
          Contact & Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 px-6">
        {/* Email Section */}
        <div className="group/email flex items-center justify-between p-6 bg-gradient-to-r from-slate-800/30 to-slate-700/20 rounded-2xl border border-slate-700/30 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-slate-800/50 hover:to-slate-700/40 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center gap-5">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-orange-500/20 border border-purple-500/30 group-hover/email:scale-110 transition-transform duration-300">
              <Mail className="h-5 w-5 text-purple-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 mb-1">Email</p>
              <a href="mailto:namannigam300@gmail.com" className="text-lg text-slate-200 hover:text-purple-300 transition-colors font-medium">
                namannigam300@gmail.com
              </a>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 hover:shadow-xl hover:shadow-purple-500/30 text-white rounded-xl transition-all duration-300 px-8 py-3 text-sm font-semibold group-hover/email:scale-105" asChild>
            <a href="mailto:namannigam300@gmail.com">
              <Send className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
        </div>

        {/* LinkedIn Section */}
        <div className="group/linkedin flex items-center justify-between p-6 bg-gradient-to-r from-slate-800/30 to-slate-700/20 rounded-2xl border border-slate-700/30 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-slate-800/50 hover:to-slate-700/40 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center gap-5">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 group-hover/linkedin:scale-110 transition-transform duration-300">
              <LinkedInLogoIcon className="h-5 w-5 text-blue-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 mb-1">LinkedIn</p>
              <a href="https://linkedin.com/in/naman-nigam" target="_blank" rel="noopener noreferrer" className="text-lg text-slate-200 hover:text-blue-300 transition-colors font-medium">
                linkedin.com/in/naman-nigam
              </a>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:shadow-xl hover:shadow-blue-500/30 text-white rounded-xl transition-all duration-300 px-8 py-3 text-sm font-semibold group-hover/linkedin:scale-105" asChild>
            <a href="https://linkedin.com/in/naman-nigam" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Connect
            </a>
          </Button>
        </div>

        {/* GitHub Section */}
        <div className="group/github flex items-center justify-between p-6 bg-gradient-to-r from-slate-800/30 to-slate-700/20 rounded-2xl border border-slate-700/30 hover:border-slate-500/50 hover:bg-gradient-to-r hover:from-slate-800/50 hover:to-slate-700/40 transition-all duration-500 hover:scale-[1.02]">
          <div className="flex items-center gap-5">
            <div className="p-3 rounded-xl bg-gradient-to-br from-slate-500/20 to-slate-600/20 border border-slate-500/30 group-hover/github:scale-110 transition-transform duration-300">
              <GitHubLogoIcon className="h-5 w-5 text-slate-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 mb-1">GitHub</p>
              <a href="https://github.com/05naman" target="_blank" rel="noopener noreferrer" className="text-lg text-slate-200 hover:text-slate-300 transition-colors font-medium">
                github.com/05naman
              </a>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 hover:shadow-xl hover:shadow-slate-500/30 text-white rounded-xl transition-all duration-300 px-8 py-3 text-sm font-semibold group-hover/github:scale-105" asChild>
            <a href="https://github.com/05naman" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Profile
            </a>
          </Button>
        </div>

        {/* Simple Divider */}
        <div className="border-t border-slate-700/50 my-8"></div>

        {/* Phone & Location - Enhanced Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Phone Section */}
          <div className="group/phone flex items-center gap-4 p-6 bg-gradient-to-br from-slate-800/20 to-slate-700/10 rounded-2xl border border-slate-700/30 hover:border-purple-500/50 hover:bg-gradient-to-br hover:from-slate-800/40 hover:to-slate-700/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 group-hover/phone:scale-110 transition-transform duration-300">
              <Phone className="h-5 w-5 text-purple-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 mb-1">Phone</p>
              <a href="tel:+918588005054" className="text-lg text-slate-200 hover:text-purple-300 transition-colors font-medium">
                +91 8588005054
              </a>
            </div>
          </div>

          {/* Location Section */}
          <div className="group/location flex items-center gap-4 p-6 bg-gradient-to-br from-slate-800/20 to-slate-700/10 rounded-2xl border border-slate-700/30 hover:border-orange-500/50 hover:bg-gradient-to-br hover:from-slate-800/40 hover:to-slate-700/30 transition-all duration-500 hover:scale-[1.02]">
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 group-hover/location:scale-110 transition-transform duration-300">
              <MapPin className="h-5 w-5 text-orange-300" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-400 mb-1">Location</p>
              <p className="text-lg text-slate-200 font-medium">India</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Contact Cards Grid Component
  const ContactCardsGrid = () => (
    <div className="mb-16">
      <ContactAndActionsCard />
    </div>
  );

  // Enhanced Call to Action Card Component
  const CallToActionCard = () => (
    <Card className="text-center border-purple-500/30 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 backdrop-blur-md rounded-3xl overflow-hidden relative group">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      <CardContent className="p-10 relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-500">
          <Send className="h-8 w-8 text-purple-300" />
        </div>

        <h3 className="text-3xl font-bold mb-6 text-purple-200">Ready to Get Started?</h3>
        <p className="text-slate-300 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
          Whether you're looking for a dedicated intern, a collaborator on an exciting project,
          or just want to discuss technology trends, I'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 hover:shadow-2xl hover:shadow-purple-500/40 text-white rounded-2xl transition-all duration-500 px-10 py-4 text-base font-semibold group-hover:scale-105" asChild>
            <a href="mailto:namannigam300@gmail.com">
              <Mail className="mr-3 h-5 w-5" />
              Start a Conversation
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 rounded-2xl transition-all duration-500 px-10 py-4 text-base font-semibold group-hover:scale-105" asChild>
            <a href="https://linkedin.com/in/naman-nigam" target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon className="mr-3 h-5 w-5" />
              Professional Network
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  // Main Container Component
  const MainContainer = () => (
    <div className="container px-6 relative z-10">
      <SectionHeader />
      <div className="max-w-6xl mx-auto">
        <ContactCardsGrid />
        <CallToActionCard />
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800/20 relative overflow-hidden">
      <BackgroundElements />
      <MainContainer />
    </section>
  );
};

export default Contact;