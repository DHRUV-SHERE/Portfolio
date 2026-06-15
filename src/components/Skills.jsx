import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Server,
  Terminal,
  GitBranch,
  Monitor,
  Bot,
  Cog,
  Cloud,
  Workflow,
  Gauge,
  TestTube,
  Shield,
  Database,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillsData = [
    // Frontend
    { name: "React", type: "image", logo: "/skills/react.webp" },
    { name: "Next.js", type: "image", logo: "/skills/next.webp" },
    { name: "TypeScript", type: "image", logo: "/skills/typescript.webp" },
    { name: "Bootstrap", type: "image", logo: "/skills/bootstrap.webp" },
    { name: "HTML", type: "image", logo: "/skills/html.webp" },
    { name: "CSS", type: "image", logo: "/skills/css.webp" },
    { name: "JavaScript", type: "image", logo: "/skills/javascript.webp" },
    { name: "Tailwind CSS", type: "image", logo: "/skills/tailwindcss.webp" },

    // Backend
    { name: "Node.js", type: "image", logo: "/skills/node.webp" },
    { name: "Express JS", type: "image", logo: "/skills/express.webp" },
    { name: "REST APIs", type: "lucide", icon: Server },
    { name: "Socket.io", type: "image", logo: "/skills/socketio.webp" },
    { name: "JWT Auth", type: "lucide", icon: Shield },
    { name: "Java", type: "image", logo: "/skills/java.webp" },
    { name: "Python", type: "image", logo: "/skills/python.webp" },
    { name: "PHP", type: "image", logo: "/skills/php.webp" },

    // Databases
    { name: "MongoDB", type: "image", logo: "/skills/mongodb.webp" },
    { name: "PostgreSQL", type: "image", logo: "/skills/postgree.webp" },
    { name: "MySQL", type: "image", logo: "/skills/mysql.webp" },
    { name: "Mongoose", type: "image", logo: "/skills/mongoose.webp" },

    // Tools
    { name: "Git", type: "image", logo: "/skills/git.webp" },
    { name: "GitHub", type: "lucide", icon: GitBranch },
    { name: "VS Code", type: "lucide", icon: Monitor },
    { name: "Postman", type: "image", logo: "/skills/postman.webp" },
    { name: "Lovable", type: "fontawesome", icon: faHeartSolid },

    // AI
    { name: "ChatGPT", type: "lucide", icon: Bot },
    { name: "DeepSeek", type: "lucide", icon: Cog },

    // Deployment
    { name: "Vercel", type: "image", logo: "/skills/vercel.webp" },
    { name: "Google Cloud Run", type: "image", logo: "/skills/googlecloudrun.webp" },
    { name: "Firebase", type: "image", logo: "/skills/firebase.webp" },
    { name: "Render", type: "image", logo: "/skills/render.webp" },
    { name: "Hostinger", type: "image", logo: "/skills/hostinger.webp" },
    { name: "Cloudinary", type: "image", logo: "/skills/cloudinary.webp" },
    { name: "AWS", type: "image", logo: "/skills/aws.webp" },
  ];

  const specializedSkills = [
    {
      title: "Frontend Development",
      description: "Building responsive, accessible, and high-performance user interfaces using modern frameworks like React, Next.js, and Tailwind CSS with focus on UX/UI principles.",
      icon: Monitor,
      gradient: "from-blue-500 to-cyan-400",
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Backend Development",
      description: "Developing scalable RESTful APIs and backend systems with Node.js, Express, and Python. Experience with authentication, middleware, and API design patterns.",
      icon: Server,
      gradient: "from-violet-500 to-purple-400",
      technologies: ["Node.js", "Express", "Python", "Java", "REST APIs", "JWT"],
    },
    {
      title: "Database Design",
      description: "Designing efficient database schemas and optimizing queries for both SQL (MySQL) and NoSQL (MongoDB) databases with focus on performance and scalability.",
      icon: Database,
      gradient: "from-emerald-500 to-green-400",
      technologies: ["MongoDB", "MySQL", "Mongoose", "Database Design", "Query Optimization"],
    },
    {
      title: "Full Stack Integration",
      description: "Seamlessly integrating frontend and backend systems, ensuring smooth data flow, real-time features, and optimal performance across the entire application stack.",
      icon: Workflow,
      gradient: "from-orange-500 to-amber-400",
      technologies: ["MERN Stack", "API Integration", "State Management", "Real-time Features"],
    },
    {
      title: "Performance Optimization",
      description: "Optimizing both frontend and backend performance through code splitting, lazy loading, caching strategies, and database query optimization.",
      icon: Gauge,
      gradient: "from-pink-500 to-rose-400",
      technologies: ["Performance", "Caching", "Code Splitting", "Lazy Loading", "Optimization"],
    },
    {
      title: "Code Quality & Testing",
      description: "Writing clean, maintainable, and testable code following best practices. Implementing testing strategies and ensuring code quality through reviews and standards.",
      icon: TestTube,
      gradient: "from-sky-500 to-indigo-400",
      technologies: ["Clean Code", "Testing", "Code Review", "Best Practices", "Maintainability"],
    },
  ];

  // Split into two rows for opposite-direction scrolling
  const mid = Math.ceil(skillsData.length / 2);
  const row1 = [...skillsData.slice(0, mid), ...skillsData.slice(0, mid)];
  const row2 = [...skillsData.slice(mid), ...skillsData.slice(mid)];

  const TickerItem = ({ skill }) => {
    const IconComponent = skill.icon;
    return (
      <div className="flex items-center gap-3 px-5 py-3 glass rounded-2xl border border-white/10 hover:border-primary/40 transition-colors duration-200 cursor-default shrink-0 group">
        {skill.type === "image" ? (
          <img
            src={skill.logo}
            alt={skill.name}
            className="w-9 h-9 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-200"
          />
        ) : skill.type === "fontawesome" ? (
          <FontAwesomeIcon
            icon={skill.icon}
            className="w-8 h-8 text-foreground/70 group-hover:text-primary transition-colors duration-200"
          />
        ) : (
          <IconComponent className="w-8 h-8 text-foreground/60 group-hover:text-primary transition-colors duration-200" />
        )}
        <span className="text-sm font-semibold text-foreground/65 group-hover:text-foreground/90 transition-colors duration-200 whitespace-nowrap">
          {skill.name}
        </span>
      </div>
    );
  };

  const SpecializedSkillCard = ({ skill, index }) => {
    const IconComponent = skill.icon;
    return (
      <motion.div
        className="group relative"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 + index * 0.1, duration: 0.7, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <div className="relative glass p-6 rounded-2xl border border-white/8 hover:border-primary/40 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 cursor-pointer h-full overflow-hidden">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110" />
          <div className="absolute inset-[1px] rounded-2xl bg-background/95" />

          <div className="relative z-10 h-full flex flex-col">
            <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${skill.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <IconComponent className="w-7 h-7 text-white" />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">
              {skill.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
              {skill.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {skill.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-0.5 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20">
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
    <section id="skills" ref={ref} className="py-20 relative w-full overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <Sparkles className="text-primary" size={28} />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">My Skills</h2>
            <Sparkles className="text-secondary" size={28} />
          </motion.div>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Building scalable, performant applications with modern technologies and best practices
          </motion.p>
        </div>

        {/* Infinite Scrolling Ticker — 2 rows, opposite directions */}
        <motion.div
          className="space-y-4 mb-20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Row 1 — scrolls left */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-3"
              style={{ width: "max-content" }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            >
              {row1.map((skill, i) => (
                <TickerItem key={i} skill={skill} />
              ))}
            </motion.div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <motion.div
              className="flex gap-3"
              style={{ width: "max-content" }}
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 35, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            >
              {row2.map((skill, i) => (
                <TickerItem key={i} skill={skill} />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Specialized Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              Specialized Expertise
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              Full-stack developer passionate about building end-to-end solutions with modern technologies
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedSkills.map((skill, index) => (
              <SpecializedSkillCard key={skill.title} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
