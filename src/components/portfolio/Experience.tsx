import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Building, Users, CalendarDays } from "lucide-react";

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

  // Section Header Component
  const SectionHeader = () => (
    <div className="text-center mb-16">
      <Badge variant="outline" className="mb-6 px-6 py-3 text-base font-medium border-purple-500/30 text-purple-500 hover:bg-purple-500/5 hover:text-purple-500">
        Experience & Achievements
      </Badge>
      <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
        Professional Journey
      </h2>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto">
        Building expertise through hands-on experience, certifications, and competitive programming
      </p>
    </div>
  );

  // Experience Card Component
  const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => (
    <Card key={index} className="max-w-4xl mx-auto hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-500 border-slate-700/50 bg-slate-900/50 backdrop-blur-sm rounded-2xl">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-xl text-purple-300">{exp.title}</CardTitle>
            <div className="flex items-center gap-2 text-slate-300 mt-2">
              <Building className="h-4 w-4" />
              <span className="font-semibold">{exp.company}</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Calendar className="h-4 w-4" />
              <span>{exp.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4" />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3 text-slate-200">Key Achievements:</h4>
          <ul className="space-y-2">
            {exp.achievements.map((achievement: string, achIndex: number) => (
              <li key={achIndex} className="flex items-start text-sm text-slate-300">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-orange-400">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill: string, skillIndex: number) => (
              <Badge key={skillIndex} variant="secondary" className="text-xs bg-slate-800 text-slate-300 border-slate-600">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Experience Section Component
  const ExperienceSection = () => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-center text-purple-300">Work Experience</h3>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} exp={exp} index={index} />
      ))}
    </div>
  );

  // Certification Card Component
  const CertificationCard = ({ cert, index }: { cert: any; index: number }) => (
    <Card key={index} className="group hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300 border-slate-700/50 bg-slate-900/50 backdrop-blur-sm rounded-xl hover:scale-105 hover:border-purple-500/40 hover:bg-slate-800/70">
      <CardContent className="p-6">
        <h4 className="font-semibold text-purple-300 mb-2 group-hover:text-purple-200 transition-colors duration-300">{cert.title}</h4>
        <p className="text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors duration-300">{cert.issuer}</p>
        <Badge
          variant="outline"
          className="text-sm px-4 py-2 hover:bg-purple-400 hover:text-white cursor-pointer border-slate-600 text-slate-300 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-md group-hover:border-purple-400/60"
        >
          {cert.link}
        </Badge>
      </CardContent>
    </Card>
  );

  // Achievement Card Component
  const AchievementCard = ({ achievement, index }: { achievement: any; index: number }) => (
    <Card key={index} className="group hover:shadow-orange-400/20 hover:shadow-2xl transition-all duration-300 border-slate-700/50 bg-slate-900/50 backdrop-blur-sm rounded-xl hover:scale-105 hover:border-orange-400/40 hover:bg-slate-800/70">
      <CardContent className="p-6">
        <h4 className="font-semibold text-orange-400 mb-2 group-hover:text-orange-300 transition-colors duration-300">{achievement.title}</h4>
        <p className="text-sm text-slate-300 mb-3 group-hover:text-slate-200 transition-colors duration-300">{achievement.description}</p>
        <Badge
          variant="outline"
          className="text-sm px-4 py-2 hover:bg-orange-400 hover:text-white cursor-pointer border-slate-600 text-slate-300 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-md group-hover:border-orange-400/60"
        >
          {achievement.link}
        </Badge>
      </CardContent>
    </Card>
  );

  // Certifications and Achievements Component
  const CertificationsAndAchievements = () => (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Certifications */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center text-purple-300">Certifications</h3>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-center text-orange-400">Achievements</h3>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </div>
  );

  // Extra Curricular Component
  const ExtraCurricular = () => {
    const activities = [
      {
        title: "Leadership & Team Management",
        description: "Served as Co-lead of the Haryana Association's Social Media team, driving event promotions and outreach strategies",
        icon: Users,
        category: "Leadership",
        duration: "2023 - Present",
        achievements: ["Social media management", "Event promotion", "Team coordination"],
        color: "from-blue-500 to-cyan-500"
      },
      {
        title: "Event Management & Organization",
        description: "Assisted in organizing workshops and managing event logistics for the Machine Learning Club",
        icon: CalendarDays,
        category: "Event Management",
        duration: "2023 - Present",
        achievements: ["Workshop coordination", "Logistics management", "Club activities"],
        color: "from-purple-500 to-pink-500"
      }
    ];

    return (
      <div className="mt-16">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-base font-medium border-purple-500/30 text-purple-500 hover:bg-purple-500/5 hover:text-purple-500">
            Beyond the Classroom
          </Badge>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
            Extra-Curricular Activities
          </h3>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Exploring leadership and community engagement through diverse activities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-slate-700/50 bg-slate-900/50 backdrop-blur-sm rounded-2xl hover:scale-105 hover:border-purple-500/40 hover:bg-slate-800/70 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${activity.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${activity.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <activity.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-slate-200 group-hover:text-white transition-colors duration-300">
                      {activity.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="secondary" className="text-xs bg-slate-800 text-slate-300 border-slate-600">
                        {activity.category}
                      </Badge>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-400">{activity.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-slate-300 mb-4 group-hover:text-slate-200 transition-colors duration-300">
                  {activity.description}
                </p>
                <div>
                  <h5 className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Key Contributions:</h5>
                  <div className="flex flex-wrap gap-2">
                    {activity.achievements.map((achievement, achIndex) => (
                      <Badge
                        key={achIndex}
                        variant="outline"
                        className="text-xs px-2 py-1 bg-slate-800/50 text-slate-300 border-slate-600 rounded-full"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  // Main Container Component
  const MainContainer = () => (
    <div className="container px-4">
      <SectionHeader />
      <ExperienceSection />
      <CertificationsAndAchievements />
      <ExtraCurricular />
    </div>
  );

  return (
    <section className="py-20 bg-slate-950">
      <MainContainer />
    </section>
  );
};

export default Experience;