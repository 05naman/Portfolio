import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "JavaScript", "Python", "TypeScript", "C"],
      color: "ai-primary"
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express", "HTML5", "CSS3", "Tailwind CSS"],
      color: "ai-secondary"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL", "NoSQL", "Database Design"],
      color: "ai-accent"
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Vercel", "Appwrite", "Postman", "Cursor AI", "Lovable"],
      color: "ai-primary"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Light Theme Background Effects */}
      <div className="absolute inset-0 bg-gradient-ai-mesh opacity-40"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-ai-primary/8 rounded-full blur-3xl animate-ai-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-ai-accent/6 rounded-full blur-3xl animate-ai-pulse"></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 border-ai-primary/40 text-ai-primary bg-white/90 backdrop-blur-md shadow-ai-subtle px-4 py-2">
            <span className="font-medium">Technical Skills</span>
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-ai-primary bg-clip-text text-transparent relative">
            <span className="relative z-10">Technology Stack</span>
            <div className="absolute inset-0 bg-gradient-ai-primary bg-clip-text text-transparent blur-sm opacity-30 animate-ai-glow"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proficient in modern web technologies and constantly learning new tools to stay at the forefront of development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-ai-glow transition-all duration-700 border border-border/30 bg-white/90 backdrop-blur-md relative overflow-hidden hover:-translate-y-2">
              {/* Subtle animated border effect */}
              <div className="absolute inset-0 bg-gradient-ai-primary opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-lg"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-ai-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-center text-ai-primary group-hover:scale-105 transition-transform font-semibold relative">
                    <span className="relative z-10">{category.title}</span>
                    <div className="absolute inset-0 bg-ai-primary/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded"></div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="hover:bg-gradient-ai-primary hover:text-white hover:shadow-ai-subtle transition-all duration-300 cursor-default text-xs bg-secondary/80 backdrop-blur-sm border border-border/20 font-medium px-3 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Card className="max-w-3xl mx-auto border border-ai-accent/20 bg-white/95 backdrop-blur-md shadow-ai-card relative overflow-hidden hover:shadow-ai-glow transition-all duration-500">
            {/* Subtle background effect */}
            <div className="absolute inset-0 bg-gradient-ai-accent opacity-5 animate-ai-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-ai-accent"></div>
            
            <CardContent className="p-10 relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-ai-accent relative">
                <span className="relative z-10">Always Learning</span>
                <div className="absolute inset-0 bg-ai-accent/20 blur-sm animate-ai-glow opacity-30"></div>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Continuously expanding my skillset through hands-on projects, certifications, and staying 
                updated with the latest industry trends and <span className="text-ai-primary font-semibold bg-ai-primary/10 px-2 py-1 rounded">AI-powered</span> best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;