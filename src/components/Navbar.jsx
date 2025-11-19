import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Resource } from '../resources';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  const Button = ({ children, onClick, className = '' }) => (
    <button
      onClick={onClick}
      className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 hover-lift font-['Orbitron'] text-sm md:text-base ${className}`}
    >
      {children}
    </button>
  );

  return (
    <nav
      className={`w-[100vw] fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 md:py-4' : 'py-4 md:py-6'
      }`}
    >
      {/* Use the same container width as other components */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center justify-center hover:scale-105 transition-transform duration-300 group"
          >
            {/* Logo with round glow effect */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-70 group-hover:opacity-100 scale-110"></div>
              
              {/* Logo container */}
              <div className="relative bg-background/80 backdrop-blur-sm rounded-full p-2 border border-primary/20 group-hover:border-primary/40 transition-colors">
                <img 
                  src={Resource.logo} 
                  alt="DS Logo" 
                  className="h-8 w-8 md:h-10 md:w-10 object-contain" 
                />
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground hover:text-primary transition-colors relative group font-medium font-['Inter'] text-base lg:text-lg"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-secondary hover-glow text-primary-foreground"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary hover-lift p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu - Full width but content aligned with container */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass rounded-2xl p-4 md:p-6 border border-primary/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground hover:text-primary transition-colors text-left py-3 px-4 rounded-lg hover:bg-primary/10 font-medium font-['Inter'] text-base"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary to-secondary w-full text-primary-foreground mt-2 text-base"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;