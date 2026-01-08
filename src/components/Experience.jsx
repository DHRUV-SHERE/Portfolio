// Experience.jsx - Professional Experience Only
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, GitCommit, Calendar, Code, Rocket, Briefcase, 
  Zap, Target, TrendingUp, Star, Sparkles, CheckCircle, 
  Layers, Cpu, Cloud, Users, GitPullRequest
} from 'lucide-react';

const ExperienceSection = () => {
  const [daysAtLumos, setDaysAtLumos] = useState(0);
  const [terminalText, setTerminalText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const experience = {
    id: 'lumos-logic',
    company: 'Lumos Logic India LLP',
    role: 'Software Development Intern',
    timeline: 'January 2026 — Present',
    location: 'India',
    status: 'active',
    description: 'Starting my professional career as a Software Development Intern. Learning enterprise development practices while contributing to real-world projects and building scalable web applications.',
    
    techStack: [
      { name: 'React', icon: '⚛️', category: 'Frontend' },
      { name: 'Node.js', icon: '🟢', category: 'Backend' },
      { name: 'MongoDB', icon: '🍃', category: 'Database' },
      { name: 'AWS', icon: '☁️', category: 'Cloud' },
      { name: 'Git', icon: '📊', category: 'Tools' },
      { name: 'Express.js', icon: '🚀', category: 'Backend' },
      { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
      { name: 'REST APIs', icon: '🔗', category: 'Backend' },
    ],

    responsibilities: [
      'Developing production-ready features and components',
      'Participating in Agile/Scrum development cycles',
      'Collaborating with team members on code reviews',
      'Learning and implementing best practices in software development',
      'Building scalable and maintainable web applications',
      'Contributing to documentation and technical discussions',
    ],

    achievements: [
      { title: 'Onboarding Complete', date: 'Week 1', icon: '✅' },
      { title: 'First Code Review', date: 'Week 1', icon: '👁️' },
      { title: 'Project Setup', date: 'Week 2', icon: '⚙️' },
      { title: 'Feature Development', date: 'Ongoing', icon: '🔨' },
    ],

    metrics: {
      daysCompleted: daysAtLumos,
      projectsInvolved: 2,
      pullRequests: 1,
      teamMeetings: 8,
      learningHours: 80,
    },

    goals: [
      { goal: 'Master AI Tools in production', target: 'March 2026', progress: 40 },
      { goal: 'Learn Firebase deployment', target: 'April 2026', progress: 25 },
      { goal: 'Contribute to major feature', target: 'Feb 2026', progress: 30 },
      { goal: 'Code review participation', target: 'Ongoing', progress: 60 },
    ],
  };

  const terminalCommands = [
    '$ career --status',
    '',
    '🚀 CAREER STATUS: ACTIVE',
    '📍 Position: Software Development Intern',
    '🏢 Company: Lumos Logic India LLP',
    '📅 Started: January 1, 2026',
    `⏳ Duration: ${daysAtLumos} days`,
    '',
    '$ tech-stack --current',
    '⚛️  React        | Frontend Development',
    '🟢  Node.js      | Backend Runtime',
    '🍃  MongoDB      | NoSQL Database',
    '☁️  AWS          | Cloud Infrastructure',
    '🚀  Express.js   | API Framework',
    '🎨  Tailwind CSS | Styling',
    '📊  Git          | Version Control',
    '🔗  REST APIs    | Architecture',
    '',
    '$ responsibilities --list',
    '• Developing production-ready features',
    '• Participating in Agile/Scrum cycles',
    '• Collaborating on code reviews',
    '• Learning best practices',
    '• Building scalable applications',
    '• Contributing to documentation',
    '',
    '$ goals --show',
    '🎯 Short-term Goals (Q1 2026):',
    '  [====------] Master project tech stack',
    '  [##--------] Complete first major feature',
    '  [######----] Participate in team code reviews',
    '  [###-------] Learn deployment pipeline',
    '',
    '$ echo "Excited for this journey! Learning and growing every day."',
    '',
  ];

  useEffect(() => {
    const startDate = new Date('2026-01-01');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysAtLumos(diffDays);
  }, []);

  useEffect(() => {
    let currentText = '';
    let lineIndex = 0;
    let charIndex = 0;
    
    const typeWriter = () => {
      if (lineIndex < terminalCommands.length) {
        if (charIndex < terminalCommands[lineIndex].length) {
          currentText += terminalCommands[lineIndex].charAt(charIndex);
          setTerminalText(currentText);
          charIndex++;
          setTimeout(typeWriter, 40);
        } else {
          currentText += '\n';
          setTerminalText(currentText);
          lineIndex++;
          charIndex = 0;
          setTimeout(typeWriter, 120);
        }
      } else {
        setIsTyping(false);
      }
    };
    
    if (isTyping) {
      typeWriter();
    }
    
    return () => {
      setIsTyping(false);
    };
  }, [daysAtLumos]);

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono text-sm mb-2">{'/* Professional Experience */'}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Current Role</span>
          </h1>
          
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="font-bold">First Professional Role</span>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              <span className="font-mono text-primary">{daysAtLumos}+ days of growth</span>
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Building real-world software solutions while mastering modern development practices.
          </p>
        </motion.div>

        {/* Main Experience Card */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Company Card */}
            <div className="gradient-border rounded-xl p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-secondary">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{experience.company}</h2>
                  <p className="text-muted-foreground">Software Development</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Role</span>
                  <span className="font-bold text-primary">{experience.role}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Timeline</span>
                  <span className="font-mono text-secondary">{experience.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                    Active
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Location</span>
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="rounded-xl p-6 bg-muted/30 border border-border">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Progress Snapshot
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(experience.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-3 rounded-lg bg-card/50">
                    <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Middle Column - Terminal & Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Terminal */}
            <div className="gradient-border rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm mb-8">
              <div className="bg-muted px-6 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 font-mono text-sm text-muted-foreground">career-terminal — dhruv@lumos</span>
              </div>
              
              <div className="p-6 font-mono text-sm bg-black/40 min-h-[400px] overflow-x-auto">
                <pre className="text-terminal-green">
                  {terminalText}
                  {isTyping && <span className="terminal-cursor ml-1"></span>}
                </pre>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="rounded-xl p-6 bg-card/50 border border-border">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-primary" />
                Technologies & Tools
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {experience.techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
                  >
                    <span className="text-2xl mb-2">{tech.icon}</span>
                    <span className="font-medium text-sm">{tech.name}</span>
                    <span className="text-xs text-muted-foreground mt-1">{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Responsibilities & Goals Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="gradient-border rounded-xl p-8 bg-card/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Key Responsibilities</h2>
            </div>
            
            <ul className="space-y-4">
              {experience.responsibilities.map((responsibility, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                  <span>{responsibility}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Goals Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="gradient-border rounded-xl p-8 bg-card/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold">Learning Goals</h2>
            </div>
            
            <div className="space-y-6">
              {experience.goals.map((goal, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{goal.goal}</span>
                    <span className="text-sm text-muted-foreground">{goal.target}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${goal.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-xs font-mono text-secondary">{goal.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements & Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Early Milestones</h2>
            <p className="text-muted-foreground">Progress and achievements in my first professional role</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {experience.achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-muted/30 border border-border text-center hover:bg-muted/50 transition-colors group"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <h4 className="font-bold mb-1">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <p className="text-lg mb-2">
              <span className="text-secondary">Currently learning and growing</span> at Lumos Logic
            </p>
            <p className="text-muted-foreground font-mono text-sm">
              $ echo "Building the foundation for an amazing career in tech!"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;