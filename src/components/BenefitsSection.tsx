import { Card, CardContent } from "@/components/ui/card";
import { Leaf, DollarSign, Truck, Handshake, Award, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Frescor Garantido",
    description: "Produtos sempre frescos, direto do produtor para você.",
  },
  {
    icon: DollarSign,
    title: "Alto Rendimento",
    description: "Melhor custo-benefício do mercado, qualidade que rende mais.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Distribuímos para todo o Brasil com agilidade e segurança.",
  },
  {
    icon: Handshake,
    title: "Negócio Simples",
    description: "Processo de compra fácil e direto, sem complicação.",
  },
  {
    icon: Award,
    title: "Qualidade Certificada",
    description: "Produtos selecionados com alto padrão de qualidade.",
  },
  {
    icon: MapPin,
    title: "De São Bernardo para o Brasil",
    description: "Localização estratégica para atender todo o país.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-12 md:py-20 bg-natural-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground px-2">
            Por Que Escolher a Sabor de Alho?
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg px-2">
            Qualidade que rende mais com investimento que cabe no seu bolso
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index} 
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-4 md:p-6 text-center space-y-3 md:space-y-4">
                    <div className="inline-flex p-3 md:p-4 rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
