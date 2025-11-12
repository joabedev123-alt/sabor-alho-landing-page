const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-4 md:space-y-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary px-2">
            Sabor de Alho
          </h3>
          
          <p className="text-base md:text-lg lg:text-xl text-background/90 max-w-2xl mx-auto px-2">
            Qualidade que rende mais com investimento que cabe no seu bolso!
          </p>
          
          <div className="pt-4 md:pt-6 border-t border-background/20 text-background/70 space-y-2 text-sm md:text-base px-2">
            <p>São Bernardo do Campo, SP</p>
            <p>
              <a 
                href="https://wa.me/5511912075674" 
                className="hover:text-background transition-colors break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                (11) 91207-5674
              </a>
            </p>
            <p>
              <a 
                href="mailto:contato@sabordealho.com.br" 
                className="hover:text-background transition-colors break-all"
              >
                contato@sabordealho.com.br
              </a>
            </p>
            <p className="mt-3 md:mt-4 text-xs md:text-sm">© {new Date().getFullYear()} Sabor de Alho. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
