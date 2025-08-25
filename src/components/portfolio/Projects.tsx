import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { GitHubLogoIcon } from '@radix-ui/react-icons';

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

  // Section Header Component
  const SectionHeader = () => (
    <div className="text-center mb-16">
      <Badge variant="outline" className="mb-6 px-6 py-3 text-base font-medium border-purple-500/30 text-purple-500 hover:bg-purple-500/5 hover:text-purple-500">
        Featured Projects
      </Badge>
      <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
        Recent Work
      </h2>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto">
        A showcase of projects demonstrating full-stack development capabilities and modern web technologies
      </p>
    </div>
  );

  // Project Card Component
  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <Card key={index} className="group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 border-slate-700/50 bg-slate-900/50 backdrop-blur-sm overflow-hidden rounded-2xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl group-hover:text-purple-300 transition-colors text-slate-200">
            {project.title}
          </CardTitle>
          <div className="flex gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-purple-400 hover:scale-110 transition-all duration-300 p-2"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <p className="text-slate-300">{project.description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3 text-slate-200">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature: string, featureIndex: number) => (
              <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-orange-400">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, techIndex: number) => (
              <Badge key={techIndex} variant="secondary" className="text-xs bg-slate-800 text-slate-300 border-slate-600">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Button className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 text-white rounded-xl" asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            View Live Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );

  // Projects Grid Component
  const ProjectsGrid = () => (
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );

  // Call to Action Component
  const CallToAction = () => (
    <div className="text-center mt-12">
      <p className="text-slate-300 mb-4">More projects coming soon...</p>
      <Button variant="outline" size="lg" className="hover:bg-purple-500 hover:text-white border-slate-600 text-slate-200 rounded-xl">
        <GitHubLogoIcon className="mr-2 h-4 w-4" />
        View All on GitHub
      </Button>
    </div>
  );

  // Main Container Component
  const MainContainer = () => (
    <div className="container px-4">
      <SectionHeader />
      <ProjectsGrid />
      <CallToAction />
    </div>
  );

  return (
    <section className="py-20 bg-slate-950">
      <MainContainer />
    </section>
  );
};

export default Projects;