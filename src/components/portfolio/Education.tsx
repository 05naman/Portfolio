import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  // Section Header Component
  const SectionHeader = () => (
    <div className="text-center mb-16">
      <Badge variant="outline" className="mb-6 px-6 py-3 text-base font-medium border-purple-500/30 text-purple-500 hover:bg-purple-500/5 hover:text-purple-500">
        Education
      </Badge>
      <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
        Academic Background
      </h2>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto">
        Strong academic foundation in Computer Science with specialized focus on Business Systems
      </p>
    </div>
  );

  // University Education Card Component
  const UniversityEducationCard = () => (
    <Card className="hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500 border-slate-700/50 bg-slate-900/50 backdrop-blur-sm rounded-2xl">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-2xl text-purple-300">
              Vellore Institute of Technology
            </CardTitle>
            <p className="text-lg text-slate-300">Andhra Pradesh, India</p>
          </div>
          <div className="text-right">
            <Badge variant="secondary" className="mb-2">Current</Badge>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Calendar className="h-4 w-4" />
              <span>Jun 2022 - Jun 2026</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-slate-200">Degree</h4>
            <p className="text-slate-200">
              B.Tech in Computer Science and Engineering with Business System
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-orange-400 flex items-center gap-2">
              <Award className="h-4 w-4" />
              Academic Performance
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-purple-300">8.92</span>
              <span className="text-slate-300">CGPA</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-purple-300">Specialization Focus</h4>
          <p className="text-slate-300 leading-relaxed">
            This unique program combines traditional Computer Science fundamentals with Business Systems,
            providing a comprehensive understanding of how technology drives business solutions.
            The curriculum covers software development, data structures, algorithms, database management,
            and business process optimization.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-slate-200">Relevant Coursework</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">Data Structures & Algorithms</Badge>
              <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">Database Management Systems</Badge>
              <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">Web Technologies</Badge>
              <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">Software Engineering</Badge>
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">Business Process Management</Badge>
              <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">Enterprise Resource Planning</Badge>
              <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">System Analysis & Design</Badge>
              <Badge variant="outline" className="text-xs border-slate-600 text-slate-300">Object-Oriented Programming</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // School Education Card Component
  const SchoolEducationCard = () => (
    <Card className="hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500 border-slate-700/50 bg-slate-900/50 backdrop-blur-sm rounded-2xl">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-r from-orange-400 to-purple-400 rounded-full">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-xl text-orange-400">
              City Montessori School
            </CardTitle>
            <p className="text-slate-300">Secondary Education</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-slate-200">Class X (94.6%)</h4>
            <p className="text-sm text-slate-300">
              Strong foundation in Mathematics, Science, and English
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-slate-200">Class XII (96%)</h4>
            <p className="text-sm text-slate-300">
              Specialized in Physics, Chemistry, Mathematics, and Computer Science
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Academic Highlights Card Component
  const AcademicHighlightsCard = () => (
    <Card className="border-purple-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl">
      <CardContent className="p-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-purple-300">Academic Highlights</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-slate-200 mb-2">8.92</div>
            <p className="text-sm text-slate-300">Current CGPA</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">96%</div>
            <p className="text-sm text-slate-300">Class XII Score</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-300 mb-2">2026</div>
            <p className="text-sm text-slate-300">Expected Graduation</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Education Cards Container Component
  const EducationCardsContainer = () => (
    <div className="max-w-4xl mx-auto space-y-8">
      <UniversityEducationCard />
      <SchoolEducationCard />
      <AcademicHighlightsCard />
    </div>
  );

  // Main Container Component
  const MainContainer = () => (
    <div className="container px-4">
      <SectionHeader />
      <EducationCardsContainer />
    </div>
  );

  return (
    <section className="py-20 bg-slate-950">
      <MainContainer />
    </section>
  );
};

export default Education;