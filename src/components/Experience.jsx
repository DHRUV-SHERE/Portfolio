import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  GitCommit, 
  Terminal, 
  Calendar, 
  MapPin, 
  Briefcase, 
  Code, 
  Database, 
  Cloud, 
  Layers,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';

const ExperienceSection = () => {
  const [terminalText, setTerminalText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [daysAtLumos, setDaysAtLumos] = useState(0);

const experience = {
    company: 'Lumos Logic India LLP',
    role: 'Software Development Intern',
    timeline: 'Jan 2026 — Present',
    location: 'Remote',
    status: 'active',
    
    techStack: [
      { name: 'React', icon: Code, category: 'Frontend' },
      { name: 'Node.js', icon: Layers, category: 'Backend' },
      { name: 'Express', icon: Terminal, category: 'Backend' },
      { name: 'MongoDB', icon: Database, category: 'Database' },
      { name: 'Firebase', icon: Cloud, category: 'Cloud' },
      { name: 'Google Cloud Run', icon: Cloud, category: 'Cloud' },
      { name: 'Tailwind CSS', icon: Layers, category: 'Styling' },
    ],

    achievements: [
      { title: 'Production-grade Full-Stack Apps', status: 'completed', icon: CheckCircle },
      { title: 'REST APIs with JWT Auth & RBAC', status: 'completed', icon: GitCommit },
      { title: 'Cloud Deployment (GCR, Firebase, Vercel)', status: 'completed', icon: Target },
      { title: 'Core Web Vitals & Technical SEO', status: 'completed', icon: Code },
      { title: 'Cross-functional Collaboration', status: 'completed', icon: CheckCircle },
    ],
  };

const terminalCommands = [
    '$ git log --oneline --author="Dhruv Shere"',
    '',
    'a7f8d3c (HEAD -> career) feat: Deliver production-grade full-stack applications',
    'b5e9f2a feat: Drive Core Web Vitals & technical SEO improvements',
    'c4d7e1b feat: Manage multi-env deployments (GCR, Firebase, Vercel)',
    'd3c8f4a feat: Implement modular REST APIs with JWT auth & RBAC',
    'e2b7e5d feat: Architect scalable React.js & Node.js solutions',
    'f1a6c4b feat: Start internship at Lumos Logic India LLP',
    '',
    '$ git show HEAD --stat',
    '',
    'commit a7f8d3c (HEAD -> career)',
    'Author: Dhruv Shere <sheredhruv@gmail.com>',
    `Date: ${daysAtLumos} days ago`,
    '',
    '    feat: Deliver production-grade full-stack applications',
    '    ',
    '    - Architect & deliver web apps using React.js, Node.js, Express.js, MongoDB',
    '    - Design scalable REST APIs with modular architecture, JWT auth & RBAC',
    '    - Manage cloud deployments on GCR, Firebase & Vercel (99%+ uptime)',
    '    - Drive Core Web Vitals & SEO improvements for client applications',
    '    - Collaborate cross-functionally with designers & stakeholders',
    '',
    ' apps/production-web-apps.md        | 200 ++++++++++++++++++++++',
    ' api/rest-jwt-rbac.md               | 90 +++++++++++++',
    ' cloud/gcp-firebase-vercel.md       | 60 +++++++++',
    ' seo/core-web-vitals.md             | 45 +++++++',
    ' collab/cross-functional.md         | 30 +++++',
    ' 5 files changed, 425 insertions(+)',
    '',
    '$ git status',
    'On branch career',
    'Your branch is ahead of origin/main by 5 commits.',
    '',
    'Changes to be committed:',
    '  modified:   skills/system-design.js',
    '  modified:   skills/dsa.md',
    '  new file:   projects/connectvista.jsx',
    '',
    'Untracked files:',
    '  learning/advanced-cloud-architecture.md',
    '  learning/devops-pipelines.md',
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
          setTimeout(typeWriter, 30);
        } else {
          currentText += '\n';
          setTerminalText(currentText);
          lineIndex++;
          charIndex = 0;
          setTimeout(typeWriter, 100);
        }
      } else {
        setIsTyping(false);
      }
    };
    
    if (isTyping) {
      typeWriter();
    }
  }, [daysAtLumos]);

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono text-sm mb-2">{'/* Current Experience */'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Git-tracked career progression. Currently pushing commits to production.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Terminal Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="gradient-border rounded-xl overflow-hidden bg-card/30 backdrop-blur-sm">
              {/* Terminal Header */}
              <div className="bg-muted px-6 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <Terminal className="w-4 h-4 ml-4 text-muted-foreground" />
                <span className="ml-2 font-mono text-sm text-muted-foreground">career-log</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm bg-card/80 min-h-[500px]">
                <pre className="text-terminal-green whitespace-pre-wrap">
                  {terminalText}
                  {isTyping && <span className="terminal-cursor ml-1"></span>}
                </pre>
              </div>
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Current Role Card */}
            <div className="gradient-border rounded-xl p-6 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary hover:bg-secondary transition-colors duration-300">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{experience.role}</h3>
                  <p className="text-secondary font-medium">{experience.company}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {experience.timeline}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 text-sm"
                      >
                        <tech.icon className="w-4 h-4" />
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-secondary" />
                    Current Focus
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Architecting & delivering production-grade React.js, Node.js, Express.js & MongoDB applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Designing scalable REST APIs with modular backend architecture, JWT auth & RBAC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Managing multi-environment cloud deployments on Google Cloud Run, Firebase & Vercel (99%+ uptime)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Driving Core Web Vitals & technical SEO improvements, reducing page load times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                      <span>Collaborating cross-functionally with designers & stakeholders to ship business-critical features</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="rounded-xl p-6 bg-muted/30 border border-border">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <GitCommit className="w-4 h-4 text-secondary" />
                Recent Commits
              </h4>
              <div className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card/50"
                  >
                    <achievement.icon 
                      className={`w-4 h-4 ${
                        achievement.status === 'completed' 
                          ? 'text-secondary' 
                          : 'text-primary'
                      }`} 
                    />
                    <span className="flex-1">{achievement.title}</span>
                    <span 
                      className={`px-2 py-1 rounded text-xs font-mono ${
                        achievement.status === 'completed'
                          ? 'bg-secondary/20 text-secondary'
                          : 'bg-primary/20 text-primary'
                      }`}
                    >
                      {achievement.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="rounded-xl p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <h4 className="font-semibold">Journey Metrics</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{daysAtLumos}</div>
                  <div className="text-xs text-muted-foreground">Days Active</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">5+</div>
                  <div className="text-xs text-muted-foreground">Production Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">99%+</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">∞</div>
                  <div className="text-xs text-muted-foreground">Learning</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Git Commands */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="rounded-xl p-6 bg-muted/30 border border-border">
            <h4 className="font-mono text-sm font-bold mb-4 flex items-center gap-2">
              <GitBranch className="w-4 h-4" />
              Quick Commands
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                'git log --career',
                'git show lumos-internship',
                'git diff skills',
                'git status --experience'
              ].map((cmd) => (
                <code
                  key={cmd}
                  className="px-4 py-2 rounded bg-card text-sm font-mono cursor-pointer hover:bg-muted transition-colors"
                  onClick={() => navigator.clipboard.writeText(cmd)}
                >
                  {cmd}
                </code>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;