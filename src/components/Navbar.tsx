
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <nav className="container h-full flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          LESH
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex gap-6">
            <NavigationMenuItem>
              <Link to="/" className="text-sm font-medium transition-colors hover:text-accent">
                Início
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/team" className="text-sm font-medium transition-colors hover:text-accent">
                Equipe
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/projetos" className="text-sm font-medium transition-colors hover:text-accent">
                Projetos
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/eventos" className="text-sm font-medium transition-colors hover:text-accent">
                Eventos
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/publicacoes" className="text-sm font-medium transition-colors hover:text-accent">
                Publicações
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contato" className="text-sm font-medium transition-colors hover:text-accent">
                Contato
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Navbar;
