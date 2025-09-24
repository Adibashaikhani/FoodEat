import { User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 md:px-8 lg:px-12">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-xl font-bold text-warm-orange">
          Food<span className="text-foreground">EAT</span>
        </div>
        
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-foreground font-medium hover:text-warm-orange transition-colors">
            HOME
          </a>
          <a href="#" className="text-foreground font-medium hover:text-warm-orange transition-colors">
            MENU
          </a>
          <a href="#" className="text-foreground font-medium hover:text-warm-orange transition-colors">
            ABOUT
          </a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5 text-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5 text-foreground" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;