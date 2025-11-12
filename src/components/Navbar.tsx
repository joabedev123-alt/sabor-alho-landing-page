import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Produtos", href: "#produtos" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#inicio")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <img
              src={logo}
              alt="Sabor de Alho"
              className="h-16 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 shadow-accent-glow"
              onClick={() => window.open("https://wa.me/5511912075674", "_blank")}
            >
              Fazer Pedido
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? "text-foreground" : "text-white"}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <img
                    src={logo}
                    alt="Sabor de Alho"
                    className="h-20 w-auto mx-auto mb-4"
                  />
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => {
                      window.open("https://wa.me/5511912075674", "_blank");
                      setIsOpen(false);
                    }}
                  >
                    Fazer Pedido
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
