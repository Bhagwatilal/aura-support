import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-gradient-support">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aura Support
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-smooth">
              How it works
            </a>
            <a href="/safety" className="text-muted-foreground hover:text-primary transition-smooth">
              Safety
            </a>
            <Button variant="outline" className="btn-secondary">
              Sign In
            </Button>
            <a href="/chat">
              <Button className="btn-hero">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Chat
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass-card"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-slide-up">
            <a 
              href="#features" 
              className="block text-muted-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block text-muted-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              How it works
            </a>
            <a 
              href="/safety" 
              className="block text-muted-foreground hover:text-primary transition-smooth"
              onClick={() => setIsMenuOpen(false)}
            >
              Safety
            </a>
            <div className="flex flex-col space-y-2">
              <Button variant="outline" className="btn-secondary">
                Sign In
              </Button>
              <a href="/chat">
                <Button className="btn-hero">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;