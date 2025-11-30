import { Component } from 'react';
import { GraduationCap, User, Code, Book, Calendar, MapPin, Award } from 'lucide-react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // You can add state variables here if needed
    };
  }

  aboutCards = [
    {
      icon: User,
      title: 'About Me',
      content: "Hello! I'm Dhruv Shere, a passionate full-stack developer currently pursuing my B.Tech in Information Technology at U.V. Patel College of Engineering, Ganpat University.",
      color: 'blue',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      content: "I have completed my Diploma in IT Engineering from Government Polytechnic College, Ahmedabad with excellent academic performance. Currently advancing my knowledge in B.Tech Information Technology.",
      color: 'purple',
    },
    {
      icon: Code,
      title: 'Projects & Experience',
      content: "I am passionate about full-stack web development using the MERN stack and have worked on several real-life projects such as: Rate IT, HinduVidhyapith, AgroSense.",
      color: 'cyan',
    },
    {
      icon: Book,
      title: 'Skills & Growth',
      content: "These projects have helped me grow technically and strengthened my problem-solving and development skills, especially in React and Node.js-based applications.",
      color: 'blue',
    },
  ];

  educationDetails = [
    {
      period: "2023-26 (Ongoing)",
      degree: "B.Tech in Information Technology",
      institution: "U.V. Patel College of Engineering, Ganpat University",
      location: "Kherva, Mehsana",
      score: "Current CGPA: 7.88",
      icon: Book,
      color: "purple"
    },
    {
      period: "2020-23",
      degree: "Diploma in Information Technology",
      institution: "Government Polytechnic College",
      location: "Ahmedabad, Gujarat",
      score: "CGPA: 8.19",
      icon: GraduationCap,
      color: "blue"
    }
  ];

  getGlowClass = (color) => {
    switch (color) {
      case 'purple':
        return 'glow-purple';
      case 'cyan':
        return 'glow-cyan';
      default:
        return 'glow-blue';
    }
  };

  getTextColorClass = (color) => {
    switch (color) {
      case 'purple':
        return 'text-secondary';
      case 'cyan':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  getBackgroundClass = (color) => {
    switch (color) {
      case 'purple':
        return 'bg-secondary/10';
      case 'cyan':
        return 'bg-accent/10';
      default:
        return 'bg-primary/10';
    }
  };

  getBorderClass = (color) => {
    switch (color) {
      case 'purple':
        return 'border-secondary/20';
      case 'cyan':
        return 'border-accent/20';
      default:
        return 'border-primary/20';
    }
  };

  componentDidMount() {
    // Add CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-slide-up {
        animation: slideUp 0.8s ease-out forwards;
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

      .card-glow {
        transition: all 0.3s ease;
      }

      .card-glow:hover {
        box-shadow: 
          0 0 20px rgba(102, 126, 234, 0.4),
          0 0 40px rgba(102, 126, 234, 0.2),
          0 0 60px rgba(102, 126, 234, 0.1);
        transform: translateY(-5px);
      }

      .card-glow-purple:hover {
        box-shadow: 
          0 0 20px rgba(118, 75, 162, 0.4),
          0 0 40px rgba(118, 75, 162, 0.2),
          0 0 60px rgba(118, 75, 162, 0.1);
      }

      .card-glow-cyan:hover {
        box-shadow: 
          0 0 20px rgba(102, 217, 232, 0.4),
          0 0 40px rgba(102, 217, 232, 0.2),
          0 0 60px rgba(102, 217, 232, 0.1);
      }
    `;
    document.head.appendChild(style);
    this.animationStyle = style;
  }

  componentWillUnmount() {
    if (this.animationStyle) {
      document.head.removeChild(this.animationStyle);
    }
  }

  getCardGlowClass = (color) => {
    switch (color) {
      case 'purple':
        return 'card-glow card-glow-purple';
      case 'cyan':
        return 'card-glow card-glow-cyan';
      default:
        return 'card-glow';
    }
  };

  renderEducationItem = (education, index) => {
    const IconComponent = education.icon;
    
    return (
      <div
        key={index}
        className={`glass-card hover-lift group animate-slide-up relative overflow-hidden p-6 ${this.getCardGlowClass(education.color)}`}
        style={{
          animationDelay: `${index * 0.2}s`,
          opacity: 0,
          animationFillMode: 'forwards'
        }}
      >
        {/* Animated background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${this.getBackgroundClass(education.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-4">
            <div className={`inline-flex items-center justify-center p-3 rounded-xl ${this.getBackgroundClass(education.color)} ${this.getGlowClass(education.color)} group-hover:scale-110 transition-transform duration-300 border ${this.getBorderClass(education.color)} flex-shrink-0`}>
              <IconComponent className={this.getTextColorClass(education.color)} size={28} />
            </div>
            <div className="flex-grow">
              {/* Period and Degree */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <span className="text-sm font-semibold  bg-primary/10 text-primary px-3 py-1 rounded-full inline-flex items-center gap-1 w-fit">
                  <Calendar size={14} />
                  {education.period}
                </span>
                <h3 className="text-xl font-bold font-['Orbitron'] text-foreground">
                  {education.degree}
                </h3>
              </div>
              
              {/* Institution and Location */}
              <div className="space-y-2">
                <p className="text-foreground  font-medium text-xl">
                  {education.institution}
                </p>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin size={14} />
                  {education.location}
                </div>
              </div>
              
              {/* Score */}
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                <Award className={this.getTextColorClass(education.color)} size={16} />
                <span className={` font-semibold text-base ${this.getTextColorClass(education.color)}`}>
                  {education.score}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hover effect */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
    );
  };

  render() {
    return (
      <section id="about" className="py-8 relative overflow-hidden w-full">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10 w-full">
          {/* Header Section */}
          <div className="text-center mb-16 animate-slide-up w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Orbitron']">
              About Me
            </h2>
            <p className="text-muted-foreground text-xl ">
              Get to know more about my journey and passion
            </p>
          </div>

          {/* Main Content Grid - Full Width */}
          <div className="w-full max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
              {this.aboutCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className={`glass-card hover-lift group animate-slide-up relative overflow-hidden min-h-[200px] p-6 ${this.getCardGlowClass(card.color)}`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${this.getBackgroundClass(card.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`inline-flex items-center justify-center p-3 rounded-xl ${this.getBackgroundClass(card.color)} ${this.getGlowClass(card.color)} group-hover:scale-110 transition-transform duration-300 border ${this.getBorderClass(card.color)}`}>
                          <Icon className={this.getTextColorClass(card.color)} size={28} />
                        </div>
                        <h3 className={`text-3xl font-bold font-['Orbitron'] ${this.getTextColorClass(card.color)}`}>
                          {card.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground text-xl leading-relaxed  flex-grow text-base">
                        {card.content}
                      </p>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education Details Section */}
          <div className="mt-16 w-full max-w-4xl mx-auto animate-slide-up">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold font-['Orbitron'] text-primary mb-4">
                Education Timeline
              </h3>
              <p className="text-muted-foreground  text-xl">
                My academic journey and achievements
              </p>
            </div>
            
            <div className="space-y-6">
              {this.educationDetails.map((education, index) => 
                this.renderEducationItem(education, index)
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;