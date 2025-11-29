"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Sparkles, Code, Database, Server, Cloud, Rocket, Bot, 
  Palette, Globe, Zap, Cpu, Terminal, GitBranch, Layers,
  Box, Braces, Circle, GitMerge, Monitor, Cog, Gauge,
  TestTube, Shield, Workflow
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Single skills data with all technologies
  const skillsData = [
    { name: "React", type: "lucide", icon: Globe },
    { name: "HTML", type: "lucide", icon: Code },
    { name: "CSS", type: "lucide", icon: Palette },
    { name: "JavaScript", type: "lucide", icon: Braces },
    { name: "Node.js", type: "lucide", icon: Server },
    { name: "Express JS", type: "lucide", icon: Terminal },
    { name: "MongoDB", type: "lucide", icon: Database },
    { name: "Java", type: "lucide", icon: Cpu },
    { name: "Python", type: "lucide", icon: Box },
    { name: "PHP", type: "lucide", icon: Zap },
    { name: "MySQL", type: "lucide", icon: Layers },
    { name: "Git", type: "lucide", icon: GitMerge },
    { name: "GitHub", type: "lucide", icon: GitBranch },
    { name: "ChatGPT", type: "lucide", icon: Bot },
    { name: "Lovable", type: "fontawesome", icon: faHeart },
    { name: "V0 Vercel", type: "lucide", icon: Rocket },
    { name: "VS Code", type: "lucide", icon: Monitor },
    { name: "Deep Seek", type: "lucide", icon: Cog }
  ];

  const specializedSkills = [
    {
      title: "Frontend Development",
      description: "I build responsive, accessible, and high-performance UIs using modern frameworks like React and Tailwind CSS.",
      icon: Monitor,
      gradient: "from-purple-500 to-cyan-400"
    },
    {
      title: "Backend Development",
      description: "Experienced in building scalable APIs and backend systems with frameworks like Django, Express, and Flask.",
      icon: Server,
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Database Design",
      description: "Designing efficient, well-structured database schemas with MongoDB, PostgreSQL, and other systems.",
      icon: Database,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Deployment",
      description: "Proficient in deploying applications on cloud platforms like AWS or Render.",
      icon: Cloud,
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Performance Optimization",
      description: "Focused on improving both frontend and backend performance to enhance overall app speed and user experience.",
      icon: Gauge,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Code Quality",
      description: "Writing clean, maintainable, and testable code that aligns with industry standards and best practices.",
      icon: TestTube,
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const SkillCard = ({ skill, index }) => {
    return (
      <motion.div
        className="group relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ 
          delay: index * 0.1,
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.05,
          y: -5
        }}
      >
        <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group-hover:glow-blue cursor-pointer h-full">
          <div className="flex flex-col items-center text-center gap-4 h-full">
            {/* Skill Icon */}
            <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
              {skill.type === "fontawesome" ? (
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className="w-8 h-8 text-foreground opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" 
                />
              ) : (
                <skill.icon className="w-8 h-8 text-foreground opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
              )}
            </div>
            
            {/* Skill Name */}
            <h3 className="text-foreground font-['Inter'] font-medium text-lg group-hover:gradient-text transition-all duration-300 flex-grow">
              {skill.name}
            </h3>
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>
    );
  };

  const SpecializedSkillCard = ({ skill, index }) => {
    const IconComponent = skill.icon;
    
    return (
      <motion.div
        className="group relative"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          delay: 0.8 + index * 0.2,
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.02,
          y: -5
        }}
      >
        <div className="glass p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group-hover:glow-blue cursor-pointer h-full">
          {/* Animated border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-105" />
          <div className="absolute inset-[1px] rounded-2xl bg-background" />
          
          <div className="relative z-10">
            {/* Icon */}
            <div className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r ${skill.gradient} bg-opacity-20 border border-primary/30 mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="w-10 h-10 text-primary" />
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold font-['Orbitron'] text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
              {skill.title}
            </h3>
            
            {/* Description */}
            <p className="text-muted-foreground text-lg font-['Inter'] leading-relaxed">
              {skill.description}
            </p>
          </div>
          
          {/* Bottom glow effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-500 rounded-full" />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" ref={ref} className="py-10 relative w-full overflow-hidden">
      {/* Animated background elements */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse delay-500" /> */}
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <Sparkles className="text-primary" size={32} />
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text font-['Orbitron']"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Skills
            </motion.h2>
            <Sparkles className="text-secondary" size={32} />
          </motion.div>
          
          <motion.p 
            className="text-muted-foreground text-lg md:text-xl font-['Inter'] max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building scalable, performant applications with the best modern tools
          </motion.p>
        </div>

        {/* Technologies Grid */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 container mx-auto">
            {skillsData.map((skill, index) => (
              <SkillCard 
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Specialized Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Orbitron'] gradient-text-cyan mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              Specialized Skills
            </motion.h2>
            <motion.p 
              className="text-muted-foreground text-xl font-['Inter'] max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
            >
              Backend developer with a passion for building scalable, production-ready systems.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
            {specializedSkills.map((skill, index) => (
              <SpecializedSkillCard 
                key={skill.title}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.p 
            className="text-muted-foreground text-lg font-['Inter'] inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20"
            whileHover={{ scale: 1.05, borderColor: "rgba(102, 126, 234, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles size={18} className="text-primary" />
            Continuously learning and expanding my skill set
            <Sparkles size={18} className="text-secondary" />
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;