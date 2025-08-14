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

  return (
    <section className="py-20 bg-background relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ai-primary bg-clip-text text-transparent">
            Passionate Developer & Innovator
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Currently pursuing B.Tech in Computer Science and Engineering with Business Systems at 
            Vellore Institute of Technology, maintaining a strong CGPA of 8.92. I'm driven by the 
            desire to create impactful technology solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-ai-glow transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-ai-primary rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-ai-primary/20 bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ai-primary">Objective</h3>
              <p className="text-lg text-foreground leading-relaxed">
                As a Full Stack Developer with strong foundations in Computer Science and Business Systems, 
                I'm seeking opportunities to build scalable web applications and impactful products. 
                My experience ranges from developing responsive blog platforms to creating sophisticated 
                video streaming applications, always with a focus on user experience and technical excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;