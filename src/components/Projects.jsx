import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  X,
  ChevronRight,
  Sparkles,
  Calendar,
  Star,
  GitFork,
  Clock,
  Wrench,
  Zap,
} from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // All projects data
  const staticProjects = [
    {
      id: "agrosence",
      title: "Agrosence",
      description:
        "Farmer-centric marketplace reducing dependency on middlemen",
      longDescription:
        "A comprehensive farmer-centric marketplace platform reducing dependency on middlemen through direct buyer connections. Features AI chatbot, government scheme portal, Direct Market Access, and Farming Resources.",
      tech: ["MERN Stack", "Bootstrap", "Cloudinary", "JWT Authentication"],
      featured: true,
      github: "https://github.com/DHRUV-SHERE/Agrosence",
      live: "https://agrosence.vercel.app/",
      duration: "December 2024 – June 2025",
      language: "JavaScript",
      stars: 15,
      forks: 8,
      lastUpdated: "2024-12-15T00:00:00Z",
      codeSnippet: `// Farmer marketplace with AI chatbot
const AgroSence = {
  features: [
    "AI Chatbot for farming queries",
    "Government scheme portal",
    "Direct Market Access",
    "Farming Resource Hub"
  ],
  stack: "MERN + Bootstrap + Cloudinary"
};`,
    },
    {
      id: "pashumitra",
      title: "PashuMitra",
      description: "Smart veterinary healthcare platform for farmers",
      longDescription:
        "Smart veterinary healthcare platform connecting farmers with veterinary doctors and medical stores. Enables medicine ordering, real-time chat consultations, and access to livestock awareness information.",
      tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "Socket.io", "JWT"],
      featured: true,
      github: "https://github.com/DHRUV-SHERE/PashuMitra",
      language: "JavaScript",
      stars: 12,
      forks: 5,
      lastUpdated: "2025-11-10T00:00:00Z",
      duration: "July 2025 – November 2025",
      codeSnippet: `// Real-time vet consultation system
io.on('connection', (socket) => {
  socket.on('consultVet', async (data) => {
    const vet = await findAvailableVet(data.location);
    socket.emit('vetAssigned', vet);
    startConsultation(socket, vet);
  });
});`,
    },
    {
      id: "spotify",
      title: "Spotify Clone",
      description: "Music streaming platform with playlist management",
      longDescription:
        "Spotify clone with music playback, playlist creation, and user management features. Built with modern web technologies for a seamless music streaming experience.",
      tech: ["React", "Tailwind CSS", "Spotify API", "Node.js"],
      featured: false,
      github: "https://github.com/DHRUV-SHERE/Spotify",
      language: "JavaScript",
      stars: 18,
      forks: 6,
      lastUpdated: "2024-10-20T00:00:00Z",
      duration: "September 2024 – October 2024",
      codeSnippet: `// Music player controller
const player = new SpotifyPlayer({
  features: ['playback', 'playlists', 'search'],
  auth: 'OAuth 2.0'
});`,
    },
    {
      id: "knowbase",
      title: "KnowBase",
      description: "Knowledge base platform with search and organization",
      longDescription:
        "A knowledge management system for organizing and searching information efficiently. Features include categorization, tagging, and advanced search capabilities.",
      tech: ["MERN Stack", "Tailwind CSS", "Search API"],
      featured: false,
      github: "https://github.com/DHRUV-SHERE/knowBase",
      language: "JavaScript",
      stars: 9,
      forks: 3,
      lastUpdated: "2024-11-15T00:00:00Z",
      duration: "October 2024 – November 2024",
      codeSnippet: `// Knowledge search system
const searchKnowledge = async (query) => {
  const results = await KnowledgeBase.find({
    $text: { $search: query },
    status: 'published'
  }).limit(10);
  
  return rankResults(results, query);
};`,
    },
    {
      id: "oracle",
      title: "Oracle Database Project",
      description: "Database management and query optimization system",
      longDescription:
        "Oracle database project focusing on efficient data management, query optimization, and database administration tasks.",
      tech: ["Oracle", "SQL", "PL/SQL", "Database Design"],
      featured: false,
      github: "https://github.com/DHRUV-SHERE/Oracle",
      language: "SQL",
      stars: 6,
      forks: 2,
      lastUpdated: "2024-09-10T00:00:00Z",
      duration: "August 2024 – September 2024",
      codeSnippet: `-- Optimized database query
SELECT employee_id, first_name, last_name, 
       department_name, salary
FROM employees e
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > (SELECT AVG(salary) FROM employees)
ORDER BY salary DESC;`,
    },
    {
      id: "amazon",
      title: "Amazon Clone",
      description: "E-commerce platform with shopping cart and payments",
      longDescription:
        "Amazon-like e-commerce platform with product listings, shopping cart, user authentication, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      featured: false,
      github: "https://github.com/DHRUV-SHERE/Amazon",
      language: "JavaScript",
      stars: 14,
      forks: 5,
      lastUpdated: "2024-08-25T00:00:00Z",
      duration: "July 2024 – August 2024",
      codeSnippet: `// Shopping cart functionality
class ShoppingCart {
  constructor(userId) {
    this.userId = userId;
    this.items = [];
    this.total = 0;
  }

  addItem(product, quantity) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ ...product, quantity });
    }
    this.calculateTotal();
  }
};`,
    },
    {
      id: "rejoiuceclone",
      title: "Rejoiuce Clone",
      description: "Beverage ordering and delivery platform",
      longDescription:
        "Clone of Rejoiuce beverage platform featuring product browsing, ordering, and delivery tracking system.",
      tech: ["React", "Express.js", "MongoDB", "JWT"],
      featured: false,
      github: "https://github.com/DHRUV-SHERE/RejoiuceClone",
      language: "JavaScript",
      stars: 8,
      forks: 3,
      lastUpdated: "2024-07-20T00:00:00Z",
      duration: "June 2024 – July 2024",
      codeSnippet: `// Order processing system
processOrder = async (order) => {
  const verified = await verifyPayment(order.paymentId);
  if (!verified) throw new Error('Payment failed');
  
  const inventory = await checkInventory(order.items);
  if (!inventory.available) throw new Error('Out of stock');
  
  return createDelivery(order, inventory);
};`,
    },
    {
      id: "online_learning_management_system",
      title: "Learning Management System",
      description:
        "Online education platform with courses and progress tracking",
      longDescription:
        "Complete online learning management system with course creation, student enrollment, progress tracking, and assessment tools.",
      tech: ["MERN Stack", "Tailwind CSS", "Video Streaming"],
      featured: false,
      github:
        "https://github.com/DHRUV-SHERE/Online_Learning_Management_System",
      language: "JavaScript",
      stars: 11,
      forks: 4,
      lastUpdated: "2024-06-15T00:00:00Z",
      duration: "May 2024 – June 2024",
      codeSnippet: `// Course progress tracking
trackProgress = (userId, courseId, moduleId) => {
  const progress = Progress.findOne({ userId, courseId });
  if (!progress.completedModules.includes(moduleId)) {
    progress.completedModules.push(moduleId);
    progress.percentage = calculatePercentage(progress);
    progress.save();
  }
  return progress;
};`,
    },
    {
      id: "react_text_site",
      title: "React Text Site",
      description: "Text-based application with React features",
      longDescription:
        "A React-based text manipulation and processing application with various text utilities and tools.",
      tech: ["React", "JavaScript", "CSS"],
      featured: false,
      github: "https://github.com/DHRUV-SHERE/React_Text_Site",
      language: "JavaScript",
      stars: 5,
      forks: 2,
      lastUpdated: "2024-05-10T00:00:00Z",
      duration: "April 2024 – May 2024",
      codeSnippet: `// Text processing utilities
const textUtils = {
  countWords: (text) => text.trim().split(/\s+/).length,
  countCharacters: (text) => text.length,
  reverseText: (text) => text.split('').reverse().join(''),
  toUpperCase: (text) => text.toUpperCase()
};`,
    },
    {
      id: "todolist",
      title: "ToDo List Application",
      description: "Task management application with priority and deadlines",
      longDescription:
        "Advanced todo list application with task prioritization, deadlines, reminders, and progress tracking features.",
      tech: ["React", "Local Storage", "CSS"],
      featured: false,
      github: "https://github.com/DHRUV-SHERE/ToDoList",
      language: "JavaScript",
      stars: 7,
      forks: 2,
      lastUpdated: "2024-04-05T00:00:00Z",
      duration: "March 2024 – April 2024",
      codeSnippet: `// Task management system
class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  addTask(task) {
    this.tasks.push({
      ...task,
      id: Date.now(),
      completed: false,
      createdAt: new Date()
    });
    this.save();
  }
};`,
    },
  ];

  // Coming Soon Projects (special section)
  const comingSoonProjects = [
    {
      id: "aryapath",
      title: "AryaPath",
      description:
        "Tourism platform for international travelers exploring India",
      status: "planning",
      progress: 30,
      tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "Socket.io"],
      icon: <Clock className="w-5 h-5" />,
    },
    {
      id: "promptstudio",
      title: "PromptStudio",
      description: "AI-driven prompt generator for image, code, and content",
      status: "active",
      progress: 60,
      tech: [
        "MERN Stack",
        "Tailwind CSS",
        "JWT Authentication",
        "Framer Motion",
      ],
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: "connectvista",
      title: "ConnectVista",
      description: "Service-connection platform with smart matching algorithms",
      status: "active",
      progress: 50,
      tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "Socket.io", "JWT"],
      icon: <Wrench className="w-5 h-5" />,
    },
  ];

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      HTML: "#e34c26",
      CSS: "#1572b6",
      PHP: "#4F5D95",
      SQL: "#e38c00",
    };
    return colors[language] || "#8b949e";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "from-green-500 to-emerald-500";
      case "planning":
        return "from-blue-500 to-cyan-500";
      case "paused":
        return "from-yellow-500 to-orange-500";
      default:
        return "from-primary to-secondary";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Active Development";
      case "planning":
        return "Planning Phase";
      case "paused":
        return "On Hold";
      default:
        return "Coming Soon";
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono text-sm mb-2">{`// Featured Work`}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work. Each project represents a unique
            challenge solved with modern technologies and clean code.
          </p>
        </motion.div>

        {/* Featured Projects - Only 3 */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {staticProjects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="gradient-border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-secondary" />
                        <span className="text-xs text-secondary font-mono">
                          Featured
                        </span>
                      </div>
                      <div className="flex gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 rounded-lg bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {/* Language Badge */}
                      <span
                        className="px-2 py-1 text-xs font-mono rounded-md"
                        style={{
                          backgroundColor: `${getLanguageColor(
                            project.language
                          )}20`,
                          color: getLanguageColor(project.language),
                          border: `1px solid ${getLanguageColor(
                            project.language
                          )}40`,
                        }}
                      >
                        {project.language}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground font-mono mb-2 flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {project.duration} • Updated:{" "}
                      {formatDate(project.lastUpdated)}
                    </p>

                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span>{project.stars} stars</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <GitFork className="w-3 h-3" />
                        <span>{project.forks} forks</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono rounded-md bg-muted/50 text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Code Preview */}
                  <div className="bg-muted/30 border-t border-border p-4 font-mono text-xs overflow-hidden">
                    <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                      <Code className="w-3 h-3" />
                      <span>Preview</span>
                    </div>
                    <pre className="text-secondary/80 overflow-hidden text-ellipsis whitespace-pre-wrap line-clamp-3">
                      {project.codeSnippet.split("\n").slice(0, 4).join("\n")}
                      ...
                    </pre>
                  </div>

                  {/* View More */}
                  <div className="p-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Click to explore
                    </span>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {staticProjects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="gradient-border rounded-xl p-5 bg-card/30 backdrop-blur-sm cursor-pointer group hover:bg-card/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <span
                    className="px-2 py-1 text-xs font-mono rounded-md"
                    style={{
                      backgroundColor: `${getLanguageColor(
                        project.language
                      )}20`,
                      color: getLanguageColor(project.language),
                      border: `1px solid ${getLanguageColor(
                        project.language
                      )}40`,
                    }}
                  >
                    {project.language}
                  </span>
                </div>

                <p className="text-xs text-muted-foreground font-mono mb-2 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {project.duration}
                </p>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <GitFork className="w-3 h-3" />
                    <span>{project.forks}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Clock className="text-secondary" size={28} />
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                Coming Soon
              </h3>
              <Clock className="text-primary" size={28} />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exciting projects currently in development. Stay tuned for
              updates!
            </p>
          </div>

          {/* Coming Soon Projects */}
          <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {comingSoonProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="gradient-border rounded-xl p-6 bg-card/30 backdrop-blur-sm group hover:bg-card/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${getStatusColor(
                        project.status
                      )} bg-opacity-20 border border-border/50`}
                    >
                      {project.icon}
                    </div>
                    <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-mono rounded-md bg-gradient-to-r ${getStatusColor(
                      project.status
                    )} text-white`}
                  >
                    {project.status === "active"
                      ? "In Progress"
                      : "Coming Soon"}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground">
                      Progress
                    </span>
                    <span className="text-xs font-mono text-secondary">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-full rounded-full bg-gradient-to-r ${getStatusColor(
                        project.status
                      )}`}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-center">
                    {getStatusText(project.status)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono rounded bg-muted/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl border border-primary/20 max-w-2xl mx-auto hover:border-primary/40 transition-all duration-500">
            <p className="text-muted-foreground mb-6">
              Want to explore more of my work?
            </p>
            <a
              href="https://github.com/DHRUV-SHERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105">
                <Github className="w-5 h-5" />
                Explore My GitHub
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          // In Projects.jsx, update the modal container:
          <motion.div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-background/80 backdrop-blur-sm overflow-x-hidden"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[95vw] sm:max-w-3xl max-h-[90vh] overflow-y-auto gradient-border rounded-2xl bg-card mx-2"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10">
                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    {selectedProject.duration} • Updated:{" "}
                    {formatDate(selectedProject.lastUpdated)}
                  </p>
                </div>
                <button
                  className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span
                      className="px-3 py-1 text-sm font-mono rounded-lg"
                      style={{
                        backgroundColor: `${getLanguageColor(
                          selectedProject.language
                        )}20`,
                        color: getLanguageColor(selectedProject.language),
                        border: `1px solid ${getLanguageColor(
                          selectedProject.language
                        )}40`,
                      }}
                    >
                      {selectedProject.language}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{selectedProject.stars} stars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{selectedProject.forks} forks</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  {selectedProject.longDescription}
                </p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-mono text-secondary mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-mono rounded-lg bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code Snippet */}
                <div>
                  <h4 className="text-sm font-mono text-secondary mb-3">
                    Code Snippet
                  </h4>
                  <div className="gradient-border rounded-xl overflow-hidden">
                    <div className="bg-muted/30 px-4 py-2 border-b border-border flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-xs text-muted-foreground font-mono ml-2">
                        {selectedProject.id}.js
                      </span>
                    </div>
                    <pre className="p-4 text-sm font-mono overflow-x-auto text-secondary/90 bg-card/50">
                      {selectedProject.codeSnippet}
                    </pre>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 pt-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-card/50 border border-primary/30 text-primary font-mono rounded-lg hover:bg-card/70 hover:border-primary/50 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
