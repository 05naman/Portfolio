import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies like React, Node.js, and TypeScript"
    },
    {
      icon: Brain,
      title: "AI & Innovation",
      description: "Exploring cutting-edge technologies and integrating AI solutions into real-world applications"
    },
    {
      icon: Rocket,
      title: "Business Systems",
      description: "Specialized in Computer Science with Business Systems, bridging technology and business needs"
    }
  ];

  // Background Pattern Component
  const BackgroundPattern = () => (
    <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(270,85,60,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(270,85,60,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
    </div>
  );

  // Section Header Component
  const SectionHeader = () => (
    <div className="text-center mb-20">
      <Badge variant="outline" className="mb-6 px-6 py-3 text-base font-medium border-purple-500/30 text-purple-500 hover:bg-purple-500/5 hover:text-purple-500">
        About Me
      </Badge>
      <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-500 via-purple-500 to-emerald-400 bg-clip-text text-transparent">
        Passionate Developer & Innovator
      </h2>
      <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
        Currently pursuing B.Tech in Computer Science and Engineering with Business Systems at
        Vellore Institute of Technology, maintaining a strong CGPA of 8.92. I'm driven by the
        desire to create impactful technology solutions that solve real-world problems.
      </p>
    </div>
  );

  // Highlight Card Component
  const HighlightCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-emerald-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Card className="relative border-slate-700/30 bg-slate-900/60 backdrop-blur-xl hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group-hover:scale-105 h-full rounded-2xl">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-purple-500 to-emerald-400 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/20">
            <Icon className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-slate-400 text-lg leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  );

  // Highlights Grid Component
  const HighlightsGrid = () => (
    <div className="grid md:grid-cols-3 gap-10 mb-20">
      {highlights.map((highlight, index) => (
        <HighlightCard key={index} {...highlight} />
      ))}
    </div>
  );

  // Objective Card Component
  const ObjectiveCard = () => (
    <div className="text-center">
      <Card className="max-w-5xl mx-auto border-purple-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl rounded-3xl hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/40 hover:scale-[1.02] transition-all duration-300">
        <CardContent className="p-10">
          <h3 className="text-3xl font-bold mb-6 text-purple-400">Objective</h3>
          <p className="text-xl text-white leading-relaxed">
            As a Full Stack Developer with strong foundations in Computer Science and Business Systems,
            I'm seeking opportunities to build scalable web applications and impactful products.
            My experience ranges from developing responsive blog platforms to creating sophisticated
            video streaming applications, always with a focus on user experience and technical excellence.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  // Main Container Component
  const MainContainer = () => (
    <div className="container px-4 relative z-10">
      <SectionHeader />
      <HighlightsGrid />
      <ObjectiveCard />
    </div>
  );

  return (
    <section className="py-24 bg-slate-950 relative">
      <BackgroundPattern />
      <MainContainer />
    </section>
  );
};

export default About;