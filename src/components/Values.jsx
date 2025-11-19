import { Award, Lightbulb, Users } from 'lucide-react';

const Values = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality',
      description: 'Committed to delivering high-quality, well-tested, and maintainable code that stands the test of time.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions to solve complex problems efficiently.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Believe in the power of teamwork and open communication to achieve exceptional results.',
    },
  ];

  return (
    <section id="values" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text font-['Orbitron'] text-responsive-xl">
            My Values
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-['Inter']">
            The principles that guide my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-auto mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="glass-card m-2 hover-lift text-center group border border-primary/20 hover:border-primary/40 animate-slide-up relative overflow-hidden transition-all duration-500 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg scale-105"></div>
                <div className="absolute inset-[1px] rounded-2xl bg-background"></div>

                {/* Content */}
                <div className="relative z-10 p-6 md:p-8">
                  <div className="inline-block p-4 md:p-6 rounded-full bg-primary/10 mb-4 md:mb-6 glow-blue group-hover:glow-cyan group-hover:scale-110 transition-all duration-300">
                    <Icon className="text-primary group-hover:text-cyan-400 transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-foreground font-['Orbitron'] text-responsive-lg group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-['Inter'] text-sm md:text-base lg:text-lg group-hover:text-foreground transition-colors duration-300">
                    {value.description}
                  </p>
                </div>

                {/* Bottom glow effect on hover */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;