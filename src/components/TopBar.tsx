import { Mail, MapPin, Phone } from "lucide-react";

const TopBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>São Bernardo do Campo, SP</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a 
              href="https://wa.me/5511912075674" 
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 91207-5674
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a 
              href="mailto:contato@sabordealho.com.br" 
              className="hover:underline"
            >
              contato@sabordealho.com.br
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
