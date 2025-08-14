import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "namannigam300@gmail.com",
      href: "mailto:namannigam300@gmail.com",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/naman-nigam",
      href: "https://linkedin.com/in/naman-nigam",
      primary: false
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/05naman",
      href: "https://github.com/05naman",
      primary: false
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8588005054",
      href: "tel:+918588005054",
      primary: false
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: null,
      primary: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-ai-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-ai-secondary/10 rounded-full blur-3xl animate-ai-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-ai-accent/10 rounded-full blur-3xl animate-ai-pulse"></div>
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-ai-primary text-ai-primary bg-background/10 backdrop-blur-sm">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ai-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively seeking internship opportunities and exciting projects. 
            Let's connect and build something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="hover:shadow-ai-glow transition-all duration-500 border-border/50 bg-card/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-ai-primary flex items-center gap-3">
                  <Mail className="h-6 w-6" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className={`p-2 rounded-full ${contact.primary ? 'bg-gradient-ai-primary' : 'bg-secondary'} group-hover:scale-110 transition-transform`}>
                      <contact.icon className={`h-4 w-4 ${contact.primary ? 'text-white' : 'text-muted-foreground'}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href} 
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-ai-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="hover:shadow-ai-glow transition-all duration-500 border-border/50 bg-card/20 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-ai-secondary">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start bg-gradient-ai-primary hover:shadow-ai-glow" asChild>
                  <a href="mailto:namannigam300@gmail.com">
                    <Mail className="mr-3 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start hover:bg-ai-secondary hover:text-white" asChild>
                  <a href="https://linkedin.com/in/naman-nigam" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </Button>
                
                <Button variant="outline" className="w-full justify-start hover:bg-ai-accent hover:text-white" asChild>
                  <a href="https://github.com/05naman" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-4 w-4" />
                    View GitHub Profile
                  </a>
                </Button>
                
                <Button variant="secondary" className="w-full justify-start hover:bg-gradient-ai-accent">
                  <Download className="mr-3 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="text-center border-ai-primary/20 bg-gradient-to-r from-card/60 to-secondary/40 backdrop-blur-md">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-ai-primary">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're looking for a dedicated intern, a collaborator on an exciting project, 
                or just want to discuss technology trends, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-ai-primary hover:shadow-ai-glow" asChild>
                  <a href="mailto:namannigam300@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Start a Conversation
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="hover:bg-ai-primary hover:text-white" asChild>
                  <a href="https://linkedin.com/in/naman-nigam" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Professional Network
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;