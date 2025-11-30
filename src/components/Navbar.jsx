import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Resource } from '../resources';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'upcoming-projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
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
    { id: 'contact', label: 'Contact' },
  ];

  const Button = ({ children, onClick, className = '' }) => (
    <button
      onClick={onClick}
      className={`px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 hover-lift font-['Orbitron'] text-sm md:text-base hover:shadow-lg hover:shadow-primary/25 ${className}`}
    >
      {children}
    </button>
  );

  const NavLink = ({ to, label, isActive }) => (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-80}
      className={`transition-all duration-300 relative group font-medium  text-base lg:text-lg cursor-pointer px-3 py-2 rounded-lg ${
        isActive 
          ? 'text-primary bg-primary/10' 
          : 'text-foreground hover:text-primary hover:bg-primary/5'
      }`}
    >
      {label}
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 ${
        isActive ? 'w-full' : ''
      }`} />
    </Link>
  );

  return (
    <nav
      className={`w-full sticky top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'glass py-3 md:py-4 shadow-lg' : 'py-4 md:py-6'
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
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.id}
                label={link.label}
                isActive={activeSection === link.id}
              />
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              <Button className="bg-gradient-to-r from-primary to-secondary hover-glow text-primary-foreground cursor-pointer shadow-lg">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary hover-lift p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass rounded-2xl p-4 border border-primary/20 backdrop-blur-lg">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-foreground transition-colors text-left py-3 px-4 rounded-lg font-medium  text-base cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-primary/10 hover:text-primary'
                  }`}
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
                <Button className="bg-gradient-to-r from-primary to-secondary w-full text-primary-foreground mt-2 text-base cursor-pointer justify-center">
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