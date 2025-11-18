"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Wrench } from 'lucide-react';

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
      skills: skillsData["Frontend Development"]
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: skillsData["Backend Development"]
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: skillsData["Tools & Technologies"]
    },
  ];

  const SkillBar = ({ skill, index, categoryIndex }) => {
    return (
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: categoryIndex * 0.2 + index * 0.1, duration: 0.6 }}
      >
        <div className="flex justify-between mb-2">
          <span className="text-foreground font-['Inter']">{skill.name}</span>
          <span className="text-primary font-['Inter'] font-medium">{skill.percentage}%</span>
        </div>
        
        <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
  <motion.div
    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 glow-blue"
    initial={{ width: 0 }}
    animate={isInView ? { width: `${skill.percentage}%` } : {}}
    transition={{
      delay: categoryIndex * 0.2 + index * 0.1 + 0.3,
      duration: 1.2,
      ease: "easeOut"
    }}
  />
</div>
      </motion.div>
    );
  };

  return (
    <section id="skills" ref={ref} className="py-20 relative w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-['Orbitron']"
            initial={{ opacity: 0, y: -30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            My Skills
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg font-['Inter']"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={catIndex}
                className="glass-card hover-lift"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.2, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 glow-blue">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground font-['Orbitron']">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex} 
                      skill={skill} 
                      index={skillIndex} 
                      categoryIndex={catIndex} 
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;