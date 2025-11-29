import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Resource } from '../resources';
import { Link } from 'react-scroll';

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

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'upcoming-projects', label: 'Upcoming' }, 
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
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="flex items-center justify-center hover:scale-105 transition-transform duration-300 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-70 group-hover:opacity-100 scale-110"></div>
              <div className="relative bg-background/80 backdrop-blur-sm rounded-full p-2 border border-primary/20 group-hover:border-primary/40 transition-colors">
                <img 
                  src={Resource.logo} 
                  alt="DS Logo" 
                  className="h-8 w-8 md:h-10 md:w-10 object-contain" 
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-foreground hover:text-primary transition-colors relative group font-medium font-['Inter'] text-base lg:text-lg cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <Button className="bg-gradient-to-r from-primary to-secondary hover-glow text-primary-foreground cursor-pointer">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary hover-lift p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass rounded-2xl p-4 md:p-6 border border-primary/20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors text-left py-3 px-4 rounded-lg hover:bg-primary/10 font-medium font-['Inter'] text-base cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="bg-gradient-to-r from-primary to-secondary w-full text-primary-foreground mt-2 text-base cursor-pointer">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;