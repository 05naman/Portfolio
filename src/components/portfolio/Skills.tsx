import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "Java", "JavaScript", "Python", "TypeScript", "C"],
      icon: "💻"
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express", "HTML5", "CSS3", "Tailwind CSS"],
      icon: "🌐"
    },
    {
      title: "Databases",
      skills: ["MongoDB", "SQL", "NoSQL", "Database Design"],
      icon: "🗄️"
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Vercel", "Appwrite", "Postman", "Cursor AI", "Lovable"],
      icon: "🛠️"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-secondary/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-ai-mesh opacity-20"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-ai-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-ai-pulse"></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2">
            Technical Skills
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proficient in modern web technologies and constantly learning new tools to stay at the forefront of development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 border border-border/50 bg-card/50 backdrop-blur-sm relative overflow-hidden hover:-translate-y-2">
              {/* Hover Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 p-6">
                <CardHeader className="pb-4 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors font-semibold">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="hover:bg-primary hover:text-primary-foreground hover:shadow-sm transition-all duration-300 cursor-default text-xs font-medium px-3 py-1"
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
          <Card className="max-w-3xl mx-auto border border-accent/20 bg-card/50 backdrop-blur-sm shadow-lg relative overflow-hidden hover:shadow-accent/10 transition-all duration-500">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 animate-ai-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary"></div>
            
            <CardContent className="p-10 relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-accent">
                Always Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Continuously expanding my skillset through hands-on projects, certifications, and staying 
                updated with the latest industry trends and <span className="text-primary font-semibold bg-primary/10 px-2 py-1 rounded">AI-powered</span> best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;