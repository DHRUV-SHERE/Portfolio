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
    <section id="learning" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-primary" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text font-['Orbitron']">
              What I'm Learning
            </h2>
          </div>
          <p className="text-muted-foreground text-lg font-['Inter']">
            Currently exploring these exciting technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {learningTopics.map((topic, index) => (
            <div
              key={index}
              className="glass px-8 py-4 rounded-full border-neon hover-lift hover-glow cursor-pointer group animate-slide-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
                animationFillMode: 'forwards'
              }}
            >
              <span className="text-lg font-medium gradient-text group-hover:text-glow-blue transition-all duration-300 font-['Inter']">
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