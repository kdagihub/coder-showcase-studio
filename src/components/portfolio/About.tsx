import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Award, Users, Code2 } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "5+ ans d'expérience",
      description: "Développement d'applications web complexes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Solutions gouvernementales",
      description: "Ministère des Sports de Côte d'Ivoire"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Formateur & Consultant",
      description: "Transmission de connaissances techniques"
    }
  ];

  const certifications = [
    "ISC2 Certified",
    "FreeCodeCamp",
    "Udemy - Développeur Python (Django)",
    "Cisco - network-technician-career-path",
    "Cisco - network-support-and-security",
    "FCF - Fortinet_Certified_Fundamentals_in_Cybersecurity",
    "Credly Badges"
  ];

  return (
    <section id="about" className="section-padding bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">À propos de moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionné par le code et l'innovation technologique, je suis un autodidacte, diplômé d'un BTS en Réseaux & Télécoms,
            Après quoi j'ai passé plusieurs certifications en développement logiciels et application web, réseaux et cybersécurité. Je développe depuis plus de 5 ans maintenant 
            des solutions complexes pour des institutions pubiques, des entreprises, et des particuliers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Mon parcours</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Spécialisé en <strong>Django (Python)</strong> et <strong>Vue.js (JavaScript)</strong>, 
                  je conçois des applications web puissantes : tableaux de bord interactifs, 
                  systèmes de chat/notifications en temps réel, applications de gestion, 
                  sites vitrines...
                </p>
                
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="text-primary mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      <Award className="w-4 h-4 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Réalisations clés</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Plus de 10 applications web professionnelles</li>
                  <li>• Solutions pour le Ministère des Sports de CI</li>
                  <li>• Plateformes pour PME et indépendants</li>
                  <li>• Systèmes de gestion en temps réel</li>
                </ul>
              </CardContent>
            </Card>

            <Button className="w-full" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Télécharger mon CV complet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;