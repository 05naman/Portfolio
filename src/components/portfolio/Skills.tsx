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
    <section className="py-20 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Technical Skills</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ai-primary bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies and constantly learning new tools to stay at the forefront of development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-ai-glow transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-center text-ai-primary group-hover:scale-105 transition-transform">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-ai-primary hover:text-white transition-colors cursor-default text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-ai-accent/20 bg-gradient-to-r from-card/80 to-secondary/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-ai-accent">Always Learning</h3>
              <p className="text-muted-foreground">
                Continuously expanding my skillset through hands-on projects, certifications, and staying 
                updated with the latest industry trends and best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;