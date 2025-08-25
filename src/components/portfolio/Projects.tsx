import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Building, Users, Zap, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Solutions Ministère des Sports CI",
      description: "Développement de dashboards interactifs, systèmes de gestion et notifications en temps réel pour le Ministère des Sports de Côte d'Ivoire.",
      technologies: ["Django", "Vue.js", "PostgreSQL", "Redis", "WebSocket"],
      category: "Gouvernement",
      features: ["Tableaux de bord en temps réel", "Système de notifications", "Gestion des événements", "Reporting avancé"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Plateformes de Gestion PME",
      description: "Applications web complètes pour la gestion d'entreprises : ventes, inventaire, finances et ressources humaines.",
      technologies: ["Django", "Vue.js", "MySQL", "Docker"],
      category: "Entreprise",
      features: ["Gestion des ventes", "Inventaire automatisé", "Tableaux de bord financiers", "Interface multi-utilisateurs"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Systèmes Temps Réel",
      description: "Développement de systèmes de chat et notifications push en temps réel avec architecture scalable.",
      technologies: ["Django Channels", "WebSocket", "Redis", "Celery"],
      category: "Temps Réel",
      features: ["Messagerie instantanée", "Notifications push", "Présence utilisateur", "Synchronisation multi-appareils"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Solutions de Formation",
      description: "Plateformes e-learning avec suivi des progressions, évaluations automatisées et gestion des certifications.",
      technologies: ["Django", "React", "PostgreSQL", "Stripe"],
      category: "Éducation",
      features: ["Cours interactifs", "Évaluations automatiques", "Suivi des progrès", "Certification en ligne"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Gouvernement": "bg-blue-500/10 text-blue-400 border-blue-500/20",
      "Entreprise": "bg-green-500/10 text-green-400 border-green-500/20",
      "Temps Réel": "bg-purple-500/10 text-purple-400 border-purple-500/20",
      "Éducation": "bg-orange-500/10 text-orange-400 border-orange-500/20"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/10 text-gray-400";
  };

  return (
    <section id="projects" className="section-padding bg-card/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Mes Projets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus de 10 applications web professionnelles développées pour des secteurs variés
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-effect hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Fonctionnalités clés</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  {project.title === "Solutions Ministère des Sports CI" ? (
                    <>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://ms-sigs.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          ms-sigs.org
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://jts.ms-sigs.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          jts.ms-sigs.org
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href="https://github.com/CIACEMS-TEAM/SIGS-v0.0" target="_blank" rel="noopener noreferrer" aria-label="GitHub SIGS">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </>
                  ) : project.title === "Plateformes de Gestion PME" ? (
                      <>
                        <Button variant="outline" size="sm" asChild>
                          <a href="https://ciacems.net" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            ciacems.net
                          </a>
                        </Button>
                        <Button variant="ghost" size="sm" asChild>
                          <a href="https://github.com/kdagihub/Ciacems_landing_page" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      </>
                  ) : (
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      En cours...
                    </Button>
                  )}
                  {/* <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="glass-effect max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Collaborons ensemble</h3>
              <p className="text-muted-foreground mb-6">
                Vous avez un projet en tête ? Discutons de vos besoins et créons 
                ensemble la solution qui vous correspond.
              </p>
              <Button size="lg" className="animate-glow">
                <a href="#contact">Démarrer un projet</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;