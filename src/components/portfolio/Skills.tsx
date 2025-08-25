import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Globe, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["C++", "Java", "JavaScript", "Python", "TypeScript", "C"]
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "SQL", "NoSQL", "Database Design"]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["GitHub", "Vercel", "Appwrite", "Postman", "Cursor AI", "Lovable"]
    }
  ];

  // Background Effects Component
  const BackgroundEffects = () => (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 via-emerald-500/3 to-transparent opacity-20"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl"></div>
    </>
  );

  // Section Header Component
  const SectionHeader = () => (
    <div className="text-center mb-20">
      <Badge variant="outline" className="mb-6 px-6 py-3 text-base font-medium border-purple-500/30 text-purple-500 hover:bg-purple-500/5 hover:text-purple-500">
        Technical Skills
      </Badge>
      <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
        Technology Stack
      </h2>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
        Proficient in modern web technologies and constantly learning new tools to stay at the forefront of development
      </p>
    </div>
  );

  // Skill Category Card Component
  const SkillCategoryCard = ({ category, index }: { category: any; index: number }) => (
    <Card key={index} className="group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 border-slate-700/50 bg-slate-900/50 backdrop-blur-sm relative overflow-hidden hover:-translate-y-2 rounded-2xl">
      {/* Hover Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 p-6">
        <CardHeader className="pb-4 text-center">
          <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-purple-400 to-orange-400 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
            <category.icon className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-lg text-slate-200 group-hover:text-purple-300 transition-colors font-semibold">
            {category.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 justify-center">
            {category.skills.map((skill: string, skillIndex: number) => (
              <Badge
                key={skillIndex}
                variant="secondary"
                className="hover:bg-purple-500 hover:text-white hover:shadow-sm transition-all duration-300 cursor-default text-xs font-medium px-3 py-1 bg-slate-800 text-slate-300 border-slate-600"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );

  // Skills Grid Component
  const SkillsGrid = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {skillCategories.map((category, index) => (
        <SkillCategoryCard key={index} category={category} index={index} />
      ))}
    </div>
  );

  // Learning Section Component
  const LearningSection = () => (
    <div className="mt-20 text-center">
      <Card className="max-w-3xl mx-auto border border-orange-400/20 bg-slate-900/50 backdrop-blur-sm shadow-lg relative overflow-hidden hover:shadow-orange-400/10 transition-all duration-500 rounded-2xl">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-purple-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-purple-500"></div>

        <CardContent className="p-10 relative z-10">
          <h3 className="text-2xl font-bold mb-6 text-orange-400">
            Always Learning
          </h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            Continuously expanding my skillset through hands-on projects, certifications, and staying
            updated with the latest industry trends and <span className="text-purple-400 font-semibold bg-purple-500/10 px-2 py-1 rounded">AI-powered</span> best practices.
          </p>
        </CardContent>
      </Card>
    </div>
  );

  // Main Container Component
  const MainContainer = () => (
    <div className="container px-4 relative z-10">
      <SectionHeader />
      <SkillsGrid />
      <LearningSection />
    </div>
  );

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      <BackgroundEffects />
      <MainContainer />
    </section>
  );
};

export default Skills;