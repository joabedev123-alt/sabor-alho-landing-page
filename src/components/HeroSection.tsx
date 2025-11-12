import { Button } from "@/components/ui/button";
import heroGarlic from "@/assets/hero-garlic.jpg";
import { MessageCircle, ShoppingCart } from "lucide-react";

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511912075674", "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${heroGarlic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Sabor de Alho
          </h1>
          
          <p className="text-3xl md:text-4xl font-semibold text-secondary drop-shadow-md">
            O tempero certo para bons resultados!
          </p>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Alhos nacionais e importados com alto padrão de qualidade, direto do produtor para sua mesa ou negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-accent-glow"
              onClick={handleWhatsAppClick}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Fazer Pedido
            </Button>
            
            <Button 
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
