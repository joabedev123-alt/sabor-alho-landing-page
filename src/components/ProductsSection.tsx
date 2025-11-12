import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import garlicType6 from "@/assets/garlic-type-6.jpg";
import garlicType8 from "@/assets/garlic-type-8.jpg";
import garlicArgentinian from "@/assets/garlic-argentinian.jpg";
import garlicProcessed from "@/assets/garlic-processed.jpg";

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
    <section id="produtos" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground px-2">
            Nossos Produtos
          </h2>
          <p className="text-center text-muted-foreground mb-8 md:mb-12 text-base md:text-lg px-2">
            Variedade e qualidade para atender todas as suas necessidades
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-accent-glow transition-all duration-300 border-border">
                <CardHeader className="p-0">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <CardTitle className="text-lg md:text-xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm md:text-base">
                    {product.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 md:p-6 pt-0">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-sm md:text-base"
                    onClick={handleQuoteRequest}
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className="mr-2 h-4 w-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Solicitar Cotação
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 md:mt-12 text-center px-2">
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              Também trabalhamos com: Alho Tipo 3, 4, 5, 7 e Alho Chinês
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto text-sm md:text-base"
              onClick={handleQuoteRequest}
            >
              <svg 
                viewBox="0 0 24 24" 
                className="mr-2 h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
