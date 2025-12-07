import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Globe,
  Code2,
  Palette,
  Braces,
  Server,
  Terminal,
  Cpu,
  Box,
  Zap,
  Database,
  Layers,
  GitMerge,
  GitBranch,
  Monitor,
  Bot,
  Cog,
  Rocket,
  Cloud,
  Heart,
  Workflow,
  Gauge,
  TestTube,
  Shield,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Skills data for the icon grid
  const skillsData = [
    // Frontend
    { name: "React", type: "lucide", icon: Globe, category: "frontend" },
    { name: "HTML", type: "lucide", icon: Code2, category: "frontend" },
    { name: "CSS", type: "lucide", icon: Palette, category: "frontend" },
    { name: "JavaScript", type: "lucide", icon: Braces, category: "frontend" },
    {
      name: "Tailwind CSS",
      type: "lucide",
      icon: Palette,
      category: "frontend",
    },

    // Backend
    { name: "Node.js", type: "lucide", icon: Server, category: "backend" },
    { name: "Express JS", type: "lucide", icon: Terminal, category: "backend" },
    { name: "REST APIs", type: "lucide", icon: Server, category: "backend" },
    { name: "Java", type: "lucide", icon: Cpu, category: "backend" },
    { name: "Python", type: "lucide", icon: Box, category: "backend" },
    { name: "PHP", type: "lucide", icon: Zap, category: "backend" },

    // Databases
    { name: "MongoDB", type: "lucide", icon: Database, category: "database" },
    { name: "MySQL", type: "lucide", icon: Layers, category: "database" },
    { name: "Mongoose", type: "lucide", icon: Database, category: "database" },

    // Tools & Others
    { name: "Git", type: "lucide", icon: GitMerge, category: "tools" },
    { name: "GitHub", type: "lucide", icon: GitBranch, category: "tools" },
    { name: "VS Code", type: "lucide", icon: Monitor, category: "tools" },
    { name: "Postman", type: "lucide", icon: Terminal, category: "tools" },
    { name: "ChatGPT", type: "lucide", icon: Bot, category: "ai" },
    { name: "DeepSeek", type: "lucide", icon: Cog, category: "ai" },
    {
      name: "Lovable",
      type: "fontawesome",
      icon: faHeartSolid,
      category: "tools",
    },
    { name: "Vercel", type: "lucide", icon: Rocket, category: "deployment" },
    { name: "Render", type: "lucide", icon: Cloud, category: "deployment" },
    { name: "Cloudinary", type: "lucide", icon: Cloud, category: "deployment" },
  ];

  // Categories for grouping skills
  const skillCategories = [
    {
      name: "frontend",
      title: "Frontend Development",
      color: "from-primary to-secondary",
    },
    {
      name: "backend",
      title: "Backend Development",
      color: "from-secondary to-accent",
    },
    { name: "database", title: "Database", color: "from-accent to-green-400" },
    {
      name: "tools",
      title: "Tools & Platforms",
      color: "from-orange-500 to-red-400",
    },
    { name: "ai", title: "AI Tools", color: "from-primary/50 to-secondary/50" },
    {
      name: "deployment",
      title: "Deployment",
      color: "from-secondary to-primary",
    },
  ];

  // Specialized skills with detailed descriptions
  const specializedSkills = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and high-performance user interfaces using modern frameworks like React, Next.js, and Tailwind CSS with focus on UX/UI principles.",
      icon: Monitor,
      gradient: "from-primary to-secondary",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Developing scalable RESTful APIs and backend systems with Node.js, Express, and Python. Experience with authentication, middleware, and API design patterns.",
      icon: Server,
      gradient: "from-primary to-secondary",
      technologies: [
        "Node.js",
        "Express",
        "Python",
        "Java",
        "REST APIs",
        "JWT",
      ],
    },
    {
      title: "Database Design",
      description:
        "Designing efficient database schemas and optimizing queries for both SQL (MySQL) and NoSQL (MongoDB) databases with focus on performance and scalability.",
      icon: Database,
      gradient: "from-primary to-secondary",
      technologies: [
        "MongoDB",
        "MySQL",
        "Mongoose",
        "Database Design",
        "Query Optimization",
      ],
    },
    {
      title: "Full Stack Integration",
      description:
        "Seamlessly integrating frontend and backend systems, ensuring smooth data flow, real-time features, and optimal performance across the entire application stack.",
      icon: Workflow,
      gradient: "from-primary to-secondary",
      technologies: [
        "MERN Stack",
        "API Integration",
        "State Management",
        "Real-time Features",
      ],
    },
    {
      title: "Performance Optimization",
      description:
        "Optimizing both frontend and backend performance through code splitting, lazy loading, caching strategies, and database query optimization.",
      icon: Gauge,
      gradient: "from-green-500 to-teal-500",
      technologies: [
        "Performance",
        "Caching",
        "Code Splitting",
        "Lazy Loading",
        "Optimization",
      ],
    },
    {
      title: "Code Quality & Testing",
      description:
        "Writing clean, maintainable, and testable code following best practices. Implementing testing strategies and ensuring code quality through reviews and standards.",
      icon: TestTube,
      gradient: "from-teal-500 to-cyan-500",
      technologies: [
        "Clean Code",
        "Testing",
        "Code Review",
        "Best Practices",
        "Maintainability",
      ],
    },
  ];

  // Component for individual skill card in the grid
  const SkillCard = ({ skill, index }) => {
    const IconComponent = skill.icon;

    return (
      <motion.div
        className="group relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          delay: index * 0.05,
          duration: 0.6,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.05,
          y: -5,
        }}
      >
        <div className="glass p-5 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 cursor-pointer h-full flex flex-col items-center justify-center min-h-[120px]">
          {/* Skill Icon */}
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300 mb-3">
            {skill.type === "fontawesome" ? (
              <FontAwesomeIcon
                icon={skill.icon}
                className="w-7 h-7 text-foreground opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            ) : (
              <IconComponent className="w-7 h-7 text-foreground opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
            )}
          </div>

          {/* Skill Name */}
          <h3 className="text-foreground font-semibold text-base group-hover:text-primary transition-all duration-300 text-center leading-tight">
            {skill.name}
          </h3>
        </div>
      </motion.div>
    );
  };

  // Component for specialized skill cards
  const SpecializedSkillCard = ({ skill, index }) => {
    const IconComponent = skill.icon;

    return (
      <motion.div
        className="group relative"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: 0.6 + index * 0.15,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          scale: 1.02,
          y: -5,
        }}
      >
        <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 cursor-pointer h-full">
          {/* Animated border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-105" />
          <div className="absolute inset-[1px] rounded-2xl bg-background" />

          <div className="relative z-10 h-full flex flex-col">
            {/* Icon */}
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r ${skill.gradient} bg-opacity-20 border border-primary/30 mb-4 group-hover:scale-110 transition-transform duration-300`}
            >
              <IconComponent className="w-8 h-8 text-primary" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
              {skill.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-base leading-relaxed mb-4 flex-grow">
              {skill.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mt-auto">
              {skill.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-primary/10 text-primary rounded-lg text-xs font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 relative w-full overflow-hidden"
    >
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              My Skills
            </motion.h2>
            <Sparkles className="text-secondary" size={32} />
          </motion.div>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building scalable, performant applications with modern technologies
            and best practices
          </motion.p>
        </div>

        {/* Technologies Grid by Category */}
        {skillCategories.map((category, categoryIndex) => {
          const categorySkills = skillsData.filter(
            (skill) => skill.category === category.name
          );
          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category.name}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className={`w-8 h-1 bg-gradient-to-r ${category.color} rounded-full`}
                />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {category.title}
                </h3>
                <div
                  className={`flex-grow h-1 bg-gradient-to-r ${category.color} opacity-20 rounded-full`}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                {categorySkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Specialized Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              Specialized Expertise
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-xl max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.1 }}
            >
              Full-stack developer passionate about building end-to-end
              solutions with modern technologies
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedSkills.map((skill, index) => (
              <SpecializedSkillCard
                key={skill.title}
                skill={skill}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
