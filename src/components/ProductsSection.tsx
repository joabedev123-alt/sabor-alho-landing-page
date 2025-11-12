import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import garlicType6 from "@/assets/garlic-type-6.jpg";
import garlicType8 from "@/assets/garlic-type-8.jpg";
import garlicArgentinian from "@/assets/garlic-argentinian.jpg";
import garlicProcessed from "@/assets/garlic-processed.jpg";
import { MessageCircle } from "lucide-react";

const products = [
  {
    title: "Alho Nacional Tipo 6",
    description: "Alho nacional de alta qualidade, tipo 6, ideal para uso comercial e doméstico.",
    image: garlicType6,
  },
  {
    title: "Alho Nacional Tipo 8",
    description: "Alho nacional tipo 8, bulbos grandes e uniformes, perfeitos para distribuição.",
    image: garlicType8,
  },
  {
    title: "Alho Importado Argentino",
    description: "Alho argentino premium com tonalidade característica e sabor intenso.",
    image: garlicArgentinian,
  },
  {
    title: "Alho Processado 1kg",
    description: "Alho descascado e processado, pronto para uso. Praticidade e qualidade garantidas.",
    image: garlicProcessed,
  },
];

const ProductsSection = () => {
  const handleQuoteRequest = () => {
    window.open("https://wa.me/5511912075674?text=Olá! Gostaria de solicitar uma cotação.", "_blank");
  };

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Nossos Produtos
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Variedade e qualidade para atender todas as suas necessidades
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-accent-glow transition-all duration-300 border-border">
                <CardHeader className="p-0">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={handleQuoteRequest}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Solicitar Cotação
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Também trabalhamos com: Alho Tipo 3, 4, 5, 7 e Alho Chinês
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={handleQuoteRequest}
            >
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
