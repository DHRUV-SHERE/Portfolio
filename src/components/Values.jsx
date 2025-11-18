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
                className="glass-card m-2 hover-lift text-center group border-neon animate-slide-up"
                style={{
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="inline-block p-4 md:p-6 rounded-full bg-primary/10 mb-4 md:mb-6 glow-blue group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4 text-foreground font-['Orbitron'] text-responsive-lg">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-['Inter'] text-sm md:text-base lg:text-lg">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;