import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  MessageCircle,
  Send,
  Facebook
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: ""
  });
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    emailjs.sendForm(
      'service_ueglrv4',
      'template_rw03wa4',
      formRef.current,
      'HfRsP31KExduVOGcu'
    )
      .then(() => {
        toast({
          title: "Message envoyé !",
          description: "Je vous répondrai dans les plus brefs délais.",
        });
      setFormData({ from_name: "", reply_to: "", subject: "", message: "" });
      })
      .catch((error) => {
        toast({
          title: "Erreur lors de l'envoi",
          description: error.text || "Veuillez réessayer plus tard.",
          variant: "destructive"
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "alexkoffi0728@gmail.com",
      href: "mailto:alexkoffi0728@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+225 0797969394",
      href: "https://wa.me/2250797969394"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localisation",
      value: "Abidjan, Côte d'Ivoire",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100089321359686",
      color: "hover:text-blue-400"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/kdagihub",
      color: "hover:text-gray-400"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      href: "https://wa.me/2250797969394",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Contactez-moi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à collaborer ? Discutons de votre projet et créons ensemble 
            quelque chose d'exceptionnel.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">
                Envoyez-moi un message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="from_name"
                      placeholder="Votre nom"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="reply_to"
                      type="email"
                      placeholder="Votre email"
                      value={formData.reply_to}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                {/* Le champ 'subject' n'est pas utilisé dans le template EmailJS, il est donc retiré de l'envoi */}
                <Input
                  name="subject"
                  placeholder="Sujet du message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
                
                <Textarea
                  name="message"
                  placeholder="Décrivez votre projet ou vos besoins..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50"
                />
                
                <Button type="submit" size="lg" className="w-full animate-glow">
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Mes coordonnées
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-primary">{info.icon}</div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  Retrouvez-moi sur
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                      className={`hover:scale-110 transition-all ${link.color}`}
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
              </CardContent>
            </Card>

            <Card className="glass-effect">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-primary">Disponibilité</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  🕒 Lun - Sam : 8h00 - 20h00 (GMT)
                </p>
                <p className="text-muted-foreground text-sm">
                  ⚡ Réponse sous 24h maximum
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;