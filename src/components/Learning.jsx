import { Sparkles } from 'lucide-react';

const Learning = () => {
  const learningTopics = [
    'AI',
    'Machine Learning',
    'AWS',
    'MERN Stack',
    'Three.js',
    'Docker',
    'Kubernetes',
    'GraphQL',
  ];

  return (
    <section id="learning" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-primary" size={24} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text font-['Orbitron'] text-responsive-xl">
              What I'm Learning
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg font-['Inter']">
            Currently exploring these exciting technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {learningTopics.map((topic, index) => (
            <div
              key={index}
              className="glass px-4 md:px-6 py-2 md:py-3 rounded-full border-neon hover-lift hover-glow cursor-pointer group animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <span className="text-sm md:text-base lg:text-lg font-medium gradient-text group-hover:text-glow-blue transition-all duration-300 font-['Inter']">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learning;