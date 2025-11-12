import { Card } from "@/components/ui/card";
import garlicField from "@/assets/garlic-field.jpg";
import { Quote } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-natural-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            Sobre Nós
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Sabor de Alho chegou para transformar o jeito de saborear seus pratos! 
                Trabalhamos com alho nacional e importado, sempre selecionado com o mais 
                alto padrão de qualidade.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Direto de São Bernardo do Campo, oferecemos um novo conceito que une 
                sabor, saúde e frescor em cada dente.
              </p>
              
              <Card className="bg-primary/5 border-primary/20 p-6 mt-8">
                <div className="flex gap-4">
                  <Quote className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-foreground/90 italic leading-relaxed">
                      "Consagre ao Senhor tudo o que você faz, e os seus planos serão bem-sucedidos."
                    </p>
                    <p className="text-primary font-semibold mt-2">— Provérbios 16:3</p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="relative">
              <img 
                src={garlicField} 
                alt="Campo de alho" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
