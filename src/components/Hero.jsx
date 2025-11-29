import { Component } from 'react';
import { ArrowDown, Download, Eye, Star, Zap } from 'lucide-react';
import heroProfile from '../assets/hero-profile.jpg';
import Resume from '../assets/RESUME_DHRUV-SHERE.pdf';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // You can add any state variables here if needed
    };
  }

  scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  downloadResume = () => {
    const resumeUrl = Resume;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'DHRUV-SHERE_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  Button = ({ children, onClick, className = '', variant = 'default', size = 'default', icon: Icon }) => {
    const baseStyles = 'inline-flex items-center justify-center px-4 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-lift font-["Orbitron"] relative overflow-hidden group';
    
    const variants = {
      default: 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover-glow shadow-lg hover:shadow-xl',
      outline: 'border-2 border-primary/50 text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary/80 backdrop-blur-sm',
      outlinePurple: 'border-2 border-neon-purple text-secondary bg-secondary/5 hover:bg-secondary/10 hover:border-neon-purple/80 backdrop-blur-sm'
    };

    const sizes = {
      default: 'text-sm md:text-base px-4 py-3',
      lg: 'text-base md:text-lg px-6 md:px-8 py-4'
    };

    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        {Icon && <Icon className="mr-2 md:mr-3" size={18} />}
        <span className="relative z-10 whitespace-nowrap">{children}</span>
      </button>
    );
  };

  componentDidMount() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes orbit {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.5; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
      }
      
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes sparkle {
        0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
      }

      .name-gradient {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradient-shift 3s ease-in-out infinite;
      }

      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
    `;
    document.head.appendChild(style);
    this.orbitStyle = style;
  }

  componentWillUnmount() {
    if (this.orbitStyle) {
      document.head.removeChild(this.orbitStyle);
    }
  }

  render() {
    const Button = this.Button;

    return (
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20 ">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-[800px] h-[400px] md:h-[800px]">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute border border-primary/15 rounded-full"
                style={{
                  width: `${100 - i * 20}%`,
                  height: `${100 - i * 20}%`,
                  top: `${i * 10}%`,
                  left: `${i * 10}%`,
                  animation: `orbit ${25 + i * 8}s linear infinite`,
                  borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
                }}
              />
            ))}
            
            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 md:w-2 md:h-2 bg-primary/30 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${15 + Math.random() * 20}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Enhanced Profile Image */}
            <div className="relative mb-8 md:mb-12 group">
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-neon glow-blue overflow-hidden transform transition-all duration-500 group-hover:scale-105 group-hover:glow-intense">
                <img
                  src={heroProfile}
                  alt="Dhruv Shere"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 animate-pulse-glow" />
              </div>
              
              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-4 h-4 md:w-6 md:h-6 bg-green-500 rounded-full border-2 border-background glow-green" />
            </div>

            {/* Enhanced Hero Text */}
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-12 max-w-4xl">
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 font-['Orbitron'] tracking-tight text-responsive-2xl">
                  Hi, I'm <span className="name-gradient">Dhruv</span>
                </h1>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
                  <Zap className="text-primary" size={18} />
                  <p className="text-lg md:text-2xl lg:text-4xl text-foreground font-['Inter'] font-semibold text-responsive-lg">
                    Full Stack Web Developer
                  </p>
                </div>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-['Inter'] bg-background/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-primary/10 text-responsive">
                  Passionate about <span className="text-primary font-semibold">modern Web Development</span>, building 
                  <span className="text-secondary font-semibold"> scalable Websites in MERN Stack</span>, and making an 
                  impact through <span className="text-primary font-semibold">clean, efficient code</span>.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mb-12 md:mb-16 animate-fade-in-up w-full max-w-md mx-auto" style={{ animationDelay: '0.8s' }}>
              <Button
                onClick={() => this.scrollToSection('projects')}
                size="lg"
                variant="default"
                icon={Eye}
                className="flex-1 justify-center transform hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </Button>
              <Button
                onClick={() => this.scrollToSection('about')}
                size="lg"
                variant="outline"
                className="flex-1 justify-center transform hover:scale-105 transition-transform duration-300"
              >
                About Me
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mb-12 md:mb-16 animate-fade-in-up w-full max-w-md mx-auto" style={{ animationDelay: '0.9s' }}>
              <Button
                onClick={this.downloadResume}
                size="lg"
                variant="outlinePurple"
                icon={Download}
                className="flex-1 justify-center transform hover:scale-105 transition-transform duration-300"
              >
                Download Resume
              </Button>
            </div>

            {/* Enhanced Scroll Indicator */}
            <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <button
                onClick={() => this.scrollToSection('about')}
                className="group flex flex-col items-center gap-2 text-primary hover:text-secondary transition-colors duration-300"
              >
                <span className="text-xs md:text-sm font-['Inter'] font-medium tracking-wider uppercase opacity-80 group-hover:opacity-100">
                  Scroll to Explore
                </span>
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-primary/30 rounded-full flex items-center justify-center group-hover:border-secondary/50 transition-colors duration-300">
                    <ArrowDown 
                      className="animate-bounce group-hover:animate-pulse" 
                      size={18} 
                    />
                  </div>
                  <div className="absolute inset-0 border-2 border-primary/10 rounded-full animate-ping" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;