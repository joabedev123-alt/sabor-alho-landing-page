const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary">
            Sabor de Alho
          </h3>
          
          <p className="text-lg md:text-xl text-background/90 max-w-2xl mx-auto">
            Qualidade que rende mais com investimento que cabe no seu bolso!
          </p>
          
          <div className="pt-6 border-t border-background/20 text-background/70">
            <p>São Bernardo do Campo, SP</p>
            <p className="mt-2">© {new Date().getFullYear()} Sabor de Alho. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
