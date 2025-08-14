import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Blog Website",
      description: "Built a responsive blog platform with secure user authentication using Appwrite. Integrated a rich text editor with CRUD operations for posts. Deployed on Vercel and optimized for cross-browser compatibility.",
      technologies: ["React.js", "Appwrite", "Vercel"],
      liveUrl: "https://appwrite-blog-eosin.vercel.app/",
      features: [
        "Secure user authentication",
        "Rich text editor for blog posts",
        "Responsive design",
        "Cross-browser compatibility",
        "CRUD operations"
      ]
    },
    {
      title: "Videoflix",
      description: "Developed a video streaming platform with user authentication and video uploads. Created RESTful APIs for scalable backend interactions. Ensured robust API performance using Postman; deployed on Vercel.",
      technologies: ["Node.js", "Express", "MongoDB"],
      liveUrl: "https://videoflix-hazel.vercel.app/",
      features: [
        "Video streaming platform",
        "User authentication system",
        "Video upload functionality",
        "RESTful API design",
        "Scalable backend architecture"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Featured Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ai-primary bg-clip-text text-transparent">
            Recent Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects demonstrating full-stack development capabilities and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-ai-glow transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl group-hover:text-ai-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="hover:bg-ai-primary hover:text-white">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-ai-secondary">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-ai-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-ai-accent">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full group-hover:bg-gradient-ai-primary" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">More projects coming soon...</p>
          <Button variant="outline" size="lg" className="hover:bg-ai-primary hover:text-white">
            <Github className="mr-2 h-4 w-4" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;