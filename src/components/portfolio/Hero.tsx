import { Button } from "@/components/ui/button";
import { ArrowDown, Download, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding"
    >
      <div className="container mx-auto text-center">
        <div className="animate-float mb-8">
          <picture>
            <source 
              media="(min-width: 1024px)" 
              srcSet="/lovable-uploads/prof2-removebg-preview.png"
              className="w-80 h-80"
            />
            <source 
              media="(min-width: 768px)" 
              srcSet="/lovable-uploads/prof2-removebg-preview.png"
              className="w-64 h-64"
            />
            <source 
              media="(min-width: 480px)" 
              srcSet="/lovable-uploads/prof2-removebg-preview.png"
              className="w-56 h-56"
            />
            <img
              src="/lovable-uploads/prof2-removebg-preview.png"
              alt="KOFFI Djèclay Alexandre"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto shadow-2xl rounded-lg object-cover"
            />
          </picture>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Développeur Fullstack</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Passionné par le code et l'innovation technologique, je crée des solutions web innovantes
          pour les institutions publiques, les entreprises et les particuliers
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="animate-glow">
            <a href="#projects" className="flex items-center gap-2">
              Voir mes projets
              <ArrowDown size={20} />
            </a>
          </Button>

          <Button variant="outline" size="lg">
            <Download size={20} />
            Télécharger CV
          </Button>

          <Button variant="secondary" size="lg">
            <a
              href="https://wa.me/2250797969394"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Me contacter
            </a>
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown size={32} className="mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
