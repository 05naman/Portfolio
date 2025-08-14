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
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-ai-mesh opacity-30"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-ai-primary/10 rounded-full blur-3xl animate-ai-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-ai-accent/10 rounded-full blur-3xl animate-ai-pulse"></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ai-primary text-ai-primary bg-background/20 backdrop-blur-md shadow-ai-glow">
            Technical Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ai-primary bg-clip-text text-transparent relative">
            <span className="relative z-10">Technology Stack</span>
            <div className="absolute inset-0 bg-gradient-ai-primary bg-clip-text text-transparent blur-sm opacity-50 animate-ai-glow"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies and constantly learning new tools to stay at the forefront of development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-ai-intense transition-all duration-700 border-border/50 bg-gradient-ai-card backdrop-blur-md relative overflow-hidden">
              {/* Animated border effect */}
              <div className="absolute inset-0 bg-gradient-ai-primary opacity-0 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="absolute inset-[1px] bg-gradient-ai-card rounded-[inherit]"></div>
              
              <div className="relative z-10">
                <CardHeader>
                  <CardTitle className="text-lg text-center text-ai-primary group-hover:scale-105 transition-transform relative">
                    <span className="relative z-10">{category.title}</span>
                    <div className="absolute inset-0 bg-ai-primary/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="hover:bg-gradient-ai-primary hover:text-white hover:shadow-ai-glow transition-all duration-300 cursor-default text-xs bg-background/20 backdrop-blur-sm border border-border/50"
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

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-ai-accent/30 bg-gradient-ai-card backdrop-blur-md shadow-ai-card relative overflow-hidden">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-ai-accent opacity-10 animate-ai-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-ai-primary"></div>
            
            <CardContent className="p-8 relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-ai-accent relative">
                <span className="relative z-10">Always Learning</span>
                <div className="absolute inset-0 bg-ai-accent/30 blur-sm animate-ai-glow"></div>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Continuously expanding my skillset through hands-on projects, certifications, and staying 
                updated with the latest industry trends and <span className="text-ai-neon font-semibold">AI-powered</span> best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;