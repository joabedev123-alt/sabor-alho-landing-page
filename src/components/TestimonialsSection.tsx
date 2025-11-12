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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Confiança construída através da qualidade
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border hover:shadow-accent-glow transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-foreground/80 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.business}</p>
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
