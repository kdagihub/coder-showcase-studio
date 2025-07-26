import { Linkedin, Github, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/djèclay-alexandre-koffi-330541255",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "#",
      label: "GitHub"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/2250797969394",
      label: "WhatsApp"
    }
  ];

  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">
              KOFFI Djèclay Alexandre
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Développeur Fullstack passionné, spécialisé en Django et Vue.js. 
              Créateur de solutions web innovantes pour entreprises et institutions.
            </p>
          </div>

          {/* Navigation rapide */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Accueil" },
                { href: "#about", label: "À propos" },
                { href: "#skills", label: "Compétences" },
                { href: "#projects", label: "Projets" },
                { href: "#contact", label: "Contact" }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact et réseaux */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Me contacter</h4>
            <div className="space-y-2 mb-4">
              <p className="text-muted-foreground text-sm">
                📧 alexkoffi0728@gmail.com
              </p>
              <p className="text-muted-foreground text-sm">
                📱 +225 0797969394
              </p>
              <p className="text-muted-foreground text-sm">
                📍 Abidjan, Côte d'Ivoire
              </p>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-transform"
                >
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} KOFFI Djèclay Alexandre. Développé avec
              <Heart className="w-4 h-4 text-red-500" />
              en Côte d'Ivoire
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;