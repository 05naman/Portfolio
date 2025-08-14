import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "MYC Productions",
      duration: "March 2025 - July 2025",
      location: "Remote",
      achievements: [
        "Built scalable web components using React.js, Tailwind CSS, and TypeScript",
        "Developed backend features with Express.js and integrated Azure Cosmos DB for NoSQL data management",
        "Created and consumed RESTful APIs to support dynamic content and user interactions",
        "Collaborated with designers to ship responsive, production-ready features",
        "Participated in agile sprints, Git version control, and peer code reviews"
      ],
      skills: ["React.js", "TypeScript", "Express.js", "Azure Cosmos DB", "RESTful APIs"]
    }
  ];

  const certifications = [
    {
      title: "Cisco Certified Programming Essentials in C++",
      issuer: "Cisco",
      link: "View Certificate"
    },
    {
      title: "Oracle Cloud Infrastructure Generative AI Professional",
      issuer: "Oracle",
      link: "View Certificate"
    }
  ];

  const achievements = [
    {
      title: "3rd Place - HackInfinity Hackathon",
      description: "24-hour coding competition, Invento'24, SSN College",
      link: "View Certificate"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Experience & Achievements</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ai-primary bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience, certifications, and competitive programming
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-ai-primary">Work Experience</h3>
          {experiences.map((exp, index) => (
            <Card key={index} className="max-w-4xl mx-auto hover:shadow-ai-glow transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-ai-primary">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <Building className="h-4 w-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-ai-secondary">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-ai-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-ai-accent">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications and Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-ai-secondary">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-ai-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-ai-primary mb-2">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs hover:bg-ai-secondary hover:text-white cursor-pointer">
                      {cert.link}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center text-ai-accent">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-ai-glow transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-ai-accent mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                    <Badge variant="outline" className="text-xs hover:bg-ai-accent hover:text-white cursor-pointer">
                      {achievement.link}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Extra-curricular */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto border-ai-primary/20 bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-ai-primary">Extra-Curricular Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Leadership</h4>
                  <p className="text-sm text-muted-foreground">
                    Served as Co-lead of the Haryana Association's Social Media team, driving event promotions and outreach strategies
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Event Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Assisted in organizing workshops and managing event logistics for the Machine Learning Club
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;