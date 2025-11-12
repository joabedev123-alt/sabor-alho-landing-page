import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    business: "Restaurante Sabor Brasileiro",
    text: "Trabalho com a Sabor de Alho há meses e a qualidade é impecável. O alho chega sempre fresco e com ótimo rendimento!",
    rating: 5,
  },
  {
    name: "João Santos",
    business: "Mercado Santos & Cia",
    text: "Excelente fornecedor! A entrega é pontual e o atendimento é muito profissional. Recomendo para quem busca qualidade.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    business: "Distribuidora Costa",
    text: "O melhor alho que já trabalhei. Meus clientes adoram a qualidade e o preço é muito justo. Parceria de confiança!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground px-2">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg px-2">
            Confiança construída através da qualidade
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-accent-glow transition-all duration-300">
                <CardContent className="p-4 md:p-6 space-y-3 md:space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-sm md:text-base text-foreground/80 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-3 md:pt-4 border-t border-border">
                    <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.business}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
