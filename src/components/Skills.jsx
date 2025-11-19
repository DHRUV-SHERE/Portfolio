"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Wrench, Sparkles } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillsData = {
    "Frontend Development": [
      { name: "React.js", percentage: 90 },
      { name: "Tailwind CSS", percentage: 95 },
      { name: "JavaScript", percentage: 90 },
      { name: "HTML/CSS", percentage: 95 },
    ],
    "Backend Development": [
      { name: "Node.js", percentage: 85 },
      { name: "Express.js", percentage: 80 },
      { name: "Python", percentage: 70 },
      { name: "Java", percentage: 68 },
      { name: "PHP", percentage: 72 },
      { name: "MongoDB", percentage: 80 },
    ],
    "Tools & Technologies": [
      { name: "Git & GitHub", percentage: 90 },
      { name: "VS Code", percentage: 95 },
      { name: "ChatGPT", percentage: 90 },
      { name: "Other AI Tools", percentage: 95 },
    ],
  };

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: skillsData["Frontend Development"],
      gradient: "from-purple-500 to-cyan-400",
      color: "purple"
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: skillsData["Backend Development"],
      gradient: "from-cyan-500 to-blue-500",
      color: "cyan"
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: skillsData["Tools & Technologies"],
      gradient: "from-blue-500 to-indigo-500",
      color: "blue"
    },
  ];

  const SkillBar = ({ skill, index, categoryIndex, gradient, color }) => {
    return (
      <motion.div
        className="mb-6 group"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ 
          delay: categoryIndex * 0.2 + index * 0.1, 
          duration: 0.6,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-current opacity-70"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
            />
            <span className="text-foreground font-['Inter'] font-medium text-sm md:text-base">
              {skill.name}
            </span>
          </div>
          <motion.span 
            className="text-primary font-['Inter'] font-bold text-lg"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ 
              delay: categoryIndex * 0.2 + index * 0.1 + 0.5,
              type: "spring",
              stiffness: 200
            }}
          >
            {skill.percentage}%
          </motion.span>
        </div>
        
        <div className="h-3 bg-muted/30 rounded-full overflow-hidden relative group-hover:bg-muted/40 transition-colors duration-300">
          {/* Background shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${gradient} relative overflow-hidden`}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.percentage}%` } : {}}
            transition={{
              delay: categoryIndex * 0.2 + index * 0.1 + 0.3,
              duration: 1.5,
              ease: "easeOut",
              type: "spring",
              damping: 15
            }}
            whileHover={{ 
              filter: "brightness(1.2)",
              boxShadow: "0 0 20px currentColor"
            }}
          >
            {/* Animated particles inside progress bar */}
            <motion.div
              className="absolute top-0 right-0 w-2 h-full bg-white/30"
              animate={{ x: [-10, 0] }}
              transition={{ duration: 1.5, delay: categoryIndex * 0.2 + index * 0.1 + 1 }}
            />
          </motion.div>
        </div>

        {/* Percentage indicator dots */}
        <div className="flex justify-between mt-1">
          {[0, 25, 50, 75, 100].map((point) => (
            <div
              key={point}
              className={`w-1 h-1 rounded-full ${
                skill.percentage >= point ? 'bg-primary' : 'bg-muted-foreground/30'
              } transition-colors duration-300`}
            />
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" ref={ref} className="py-20 relative w-full overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-pulse delay-500" />
      
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
            Technologies and tools I master to create amazing digital experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={catIndex}
                className="glass-card group relative overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: catIndex * 0.3, 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-105" />
                <div className="absolute inset-[1px] rounded-2xl bg-background" />

                <div className="relative z-10 p- lg:p-8">
                  {/* Category Header */}
                  <motion.div 
                    className="flex items-center gap-4 mb-8"
                    whileHover={{ gap: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className={`p-4 rounded-2xl bg-gradient-to-r ${category.gradient} bg-opacity-20 border border-${category.color}-400/30 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`text-${category.color}-400`} size={28} />
                    </motion.div>
                    <motion.h3 
                      className="text-xl lg:text-2xl font-bold text-foreground font-['Orbitron'] group-hover:gradient-text transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {category.title}
                    </motion.h3>
                  </motion.div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar 
                        key={skillIndex} 
                        skill={skill} 
                        index={skillIndex} 
                        categoryIndex={catIndex}
                        gradient={category.gradient}
                        color={category.color}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-3/4 transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Floating call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
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