import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Education</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ai-primary bg-clip-text text-transparent">
            Academic Background
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in Computer Science with specialized focus on Business Systems
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* University Education */}
          <Card className="hover:shadow-ai-glow transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-ai-primary rounded-full">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-ai-primary">
                    Vellore Institute of Technology
                  </CardTitle>
                  <p className="text-lg text-muted-foreground">Andhra Pradesh, India</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="mb-2">Current</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Jun 2022 - Jun 2026</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-ai-secondary">Degree</h4>
                  <p className="text-foreground">
                    B.Tech in Computer Science and Engineering with Business System
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-ai-accent flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Academic Performance
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-ai-primary">8.92</span>
                    <span className="text-muted-foreground">CGPA</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-ai-primary">Specialization Focus</h4>
                <p className="text-muted-foreground leading-relaxed">
                  This unique program combines traditional Computer Science fundamentals with Business Systems, 
                  providing a comprehensive understanding of how technology drives business solutions. 
                  The curriculum covers software development, data structures, algorithms, database management, 
                  and business process optimization.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-ai-secondary">Relevant Coursework</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">Data Structures & Algorithms</Badge>
                    <Badge variant="outline" className="text-xs">Database Management Systems</Badge>
                    <Badge variant="outline" className="text-xs">Web Technologies</Badge>
                    <Badge variant="outline" className="text-xs">Software Engineering</Badge>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="outline" className="text-xs">Business Process Management</Badge>
                    <Badge variant="outline" className="text-xs">Enterprise Resource Planning</Badge>
                    <Badge variant="outline" className="text-xs">System Analysis & Design</Badge>
                    <Badge variant="outline" className="text-xs">Object-Oriented Programming</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* School Education */}
          <Card className="hover:shadow-ai-glow transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-ai-accent rounded-full">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl text-ai-accent">
                    City Montessori School
                  </CardTitle>
                  <p className="text-muted-foreground">Secondary Education</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Class X (94.6%)</h4>
                  <p className="text-sm text-muted-foreground">
                    Strong foundation in Mathematics, Science, and English
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Class XII (96%)</h4>
                  <p className="text-sm text-muted-foreground">
                    Specialized in Physics, Chemistry, Mathematics, and Computer Science
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Academic Highlights */}
          <Card className="border-ai-primary/20 bg-gradient-to-br from-card/80 to-secondary/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-ai-primary">Academic Highlights</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-ai-secondary mb-2">8.92</div>
                  <p className="text-sm text-muted-foreground">Current CGPA</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-ai-accent mb-2">96%</div>
                  <p className="text-sm text-muted-foreground">Class XII Score</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-ai-primary mb-2">2026</div>
                  <p className="text-sm text-muted-foreground">Expected Graduation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;