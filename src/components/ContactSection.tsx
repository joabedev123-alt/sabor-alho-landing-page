import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Instagram, Facebook, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 bg-natural-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">
            Estamos prontos para atender você e seu negócio
          </p>
          
          <Card className="border-border mb-8">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center justify-center gap-2 text-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-lg">São Bernardo do Campo, SP</span>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <a 
                  href="https://wa.me/5511912075674" 
                  className="text-lg hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (11) 91207-5674
                </a>
              </div>
              
              <Button 
                size="lg"
                className="w-full md:w-auto bg-accent hover:bg-accent/90"
                onClick={() => window.open("https://wa.me/5511912075674", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </CardContent>
          </Card>
          
          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("https://instagram.com/sabordealho", "_blank")}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => window.open("https://facebook.com/sabordealho", "_blank")}
            >
              <Facebook className="mr-2 h-5 w-5" />
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
