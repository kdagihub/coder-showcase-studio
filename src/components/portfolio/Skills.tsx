import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Globe, 
  Shield, 
  Server, 
  Smartphone,
  Monitor,
  FileText
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Langages de programmation",
      skills: ["Python", "JavaScript", "TypeScript", "Dart (apprentissage)"],
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frameworks Web",
      skills: ["Django", "Vue.js", "React (apprentissage)", "Flutter (apprentissage)"],
      color: "bg-green-500/10 text-green-400"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "DevOps & Infrastructure",
      skills: ["Git", "GitHub", "Docker", "Docker Compose", "CI/CD GitHub", "Ansible (cours)"],
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Systèmes & Monitoring",
      skills: ["Linux Ubuntu (expert)", "Windows", "Prometheus", "Grafana"],
      color: "bg-orange-500/10 text-orange-400"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sécurité & Réseau",
      skills: ["UFW", "Fail2ban", "Sécurité réseau", "Réseaux & Télécoms"],
      color: "bg-red-500/10 text-red-400"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "CMS & Mobile",
      skills: ["WordPress", "Elementor", "WooCommerce", "Divi"],
      color: "bg-indigo-500/10 text-indigo-400"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Bases de données",
      skills: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
      color: "bg-cyan-500/10 text-cyan-400"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Autres compétences",
      skills: ["Excel avancé", "Bureautique", "Formation", "Consulting"],
      color: "bg-yellow-500/10 text-yellow-400"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Mes Compétences</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une expertise technique complète pour créer des solutions web robustes et scalables
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect hover:scale-105 transition-transform duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <span className="text-sm">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="glass-effect max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Expertise spécialisée</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Backend Excellence</h4>
                  <p className="text-muted-foreground text-sm">
                    Architecture robuste avec Django, APIs RESTful, 
                    gestion des performances et sécurité avancée
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Frontend Moderne</h4>
                  <p className="text-muted-foreground text-sm">
                    Interfaces utilisateur réactives avec Vue.js, 
                    UX/UI optimisée et responsive design
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

export default Skills;