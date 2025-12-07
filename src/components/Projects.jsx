import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  X,
  ChevronRight,
  Sparkles,
  Calendar,
  Globe,
  Database,
  Music,
  BookOpen,
  ShoppingCart,
  Coffee,
  GraduationCap,
  FileText,
  CheckSquare,
  Map,
  Zap,
  Users,
} from "lucide-react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [staticProjects, setStaticProjects] = useState([]);
  const [comingSoonProjects, setComingSoonProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GitHub username
  const githubUsername = "DHRUV-SHERE";
  
  // Selected repositories to display
  const selectedRepos = [
    "Agrosence",
    "PashuMitra", 
    "Spotify",
    "knowBase",
    "Oracle",
    "Amazon",
    "RejoiuceClone",
    "Online_Learning_Management_System",
    "React_Text_Site",
    "ToDoList"
  ];

  // Enhanced static data for better presentation
  const projectEnhancements = {
    "agrosence": {
      title: "Agrosence",
      longDescription: "A comprehensive farmer-centric marketplace platform that eliminates middlemen through direct buyer connections. Features include an AI chatbot for farming queries, government scheme portal, Direct Market Access, and Farming Resources hub. Built with MERN stack to deliver a seamless agricultural ecosystem.",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Bootstrap", "Cloudinary", "JWT", "REST API"],
      icon: <Globe className="w-6 h-6" />,
      duration: "December 2024 – Present",
      live: "https://agrosence.vercel.app/"
    },
    "pashumitra": {
      title: "PashuMitra",
      longDescription: "Smart veterinary healthcare platform connecting farmers with veterinary doctors and medical stores. Features real-time chat consultations, medicine ordering, appointment booking, prescription management, and livestock awareness information. Built with real-time capabilities using Socket.io.",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Tailwind CSS", "Socket.io", "Cloudinary", "JWT"],
      icon: <Database className="w-6 h-6" />,
      duration: "July 2025 – Present",
      live: "https://pashumitra.vercel.app/"
    },
    "spotify": {
      title: "Spotify Clone",
      longDescription: "Full-featured music streaming platform clone with playlist management, music discovery, and user authentication. Integrates Spotify Web API for music data, features responsive design, and implements modern audio playback controls.",
      tech: ["React", "Node.js", "Spotify API", "Tailwind CSS", "Express.js", "REST API"],
      icon: <Music className="w-6 h-6" />,
      duration: "September 2024",
      live: "https://spotify-clone-dhruv.vercel.app/"
    },
    "knowbase": {
      title: "KnowBase",
      longDescription: "Knowledge management system with advanced search, categorization, and tagging capabilities. Features include markdown support, user roles, content organization, and efficient information retrieval systems.",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Tailwind CSS", "Search API", "JWT"],
      icon: <BookOpen className="w-6 h-6" />,
      duration: "October 2024",
      live: "https://knowbase-dhruv.vercel.app/"
    },
    "oracle": {
      title: "Database Management System",
      longDescription: "Comprehensive database project focusing on efficient data management, query optimization, and database administration. Includes complex SQL queries, stored procedures, triggers, and database design principles.",
      tech: ["Oracle", "SQL", "PL/SQL", "Database Design", "Query Optimization"],
      icon: <Database className="w-6 h-6" />,
      duration: "August 2024"
    },
    "amazon": {
      title: "Amazon Clone",
      longDescription: "E-commerce platform replica with product listings, shopping cart functionality, user authentication, and payment integration. Features product search, filters, reviews, order tracking, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS", "Redux"],
      icon: <ShoppingCart className="w-6 h-6" />,
      duration: "July 2024",
      live: "https://amazon-clone-dhruv.vercel.app/"
    },
    "rejoiuceclone": {
      title: "Animated Website - Rejoiuce Clone",
      longDescription: "Food and beverage delivery system with product browsing, ordering, delivery tracking, and payment processing. Includes inventory management and real-time order updates.",
      tech: ["React", "Express.js", "MongoDB", "JWT", "Socket.io", "Payment Gateway"],
      icon: <Coffee className="w-6 h-6" />,
      duration: "June 2024",
      live: "https://rejoiuce-clone.vercel.app/"
    },
    "online_learning_management_system": {
      title: "Learning Management System",
      longDescription: "Complete online education platform with course creation, student enrollment, progress tracking, and assessment tools. Features video streaming, quiz system, and certificate generation.",
      tech: ["MERN Stack", "React", "Node.js", "MongoDB", "Tailwind CSS", "Video Streaming", "JWT"],
      icon: <GraduationCap className="w-6 h-6" />,
      duration: "May 2024"
    },
    "react_text_site": {
      title: "Text Processing Tool",
      longDescription: "React-based text manipulation application with comprehensive text utilities. Features include word count, character count, text formatting, case conversion, and text analysis tools.",
      tech: ["React", "JavaScript", "CSS", "Local Storage"],
      icon: <FileText className="w-6 h-6" />,
      duration: "April 2024"
    },
    "todolist": {
      title: "Task Management App",
      longDescription: "Advanced todo list application with task prioritization, deadlines, reminders, and progress tracking. Features drag-and-drop interface, categories, and data persistence.",
      tech: ["React", "Local Storage", "CSS", "Date-fns"],
      icon: <CheckSquare className="w-6 h-6" />,
      duration: "March 2024"
    }
  };

  // Coming Soon Projects with enhanced data
  const upcomingProjects = [
    {
      id: "aryapath",
      title: "AryaPath",
      description: "Tourism platform for international travelers exploring India with itinerary planning and cultural insights",
      longDescription: "A comprehensive tourism platform designed for international travelers exploring India. Features include itinerary planning, cultural insights, local guides, booking integration, and interactive maps.",
      tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "Socket.io", "Maps API", "Payment Gateway"],
      status: "planning",
      progress: 30,
      icon: <Map className="w-6 h-6" />,
      github: "https://github.com/DHRUV-SHERE/AryaPath"
    },
    {
      id: "promptstudio",
      title: "PromptStudio",
      description: "AI-driven prompt generator for image creation, code generation, and content creation",
      longDescription: "Advanced AI prompt generation tool for creators, developers, and writers. Features include prompt templates, AI model integration, prompt optimization, and community sharing.",
      tech: ["MERN Stack", "Tailwind CSS", "OpenAI API", "Framer Motion", "JWT Authentication"],
      status: "active",
      progress: 60,
      icon: <Zap className="w-6 h-6" />,
      github: "https://github.com/DHRUV-SHERE/PromptStudio"
    },
    {
      id: "connectvista",
      title: "ConnectVista",
      description: "Service-connection platform with smart matching algorithms and professional networking",
      longDescription: "Professional service connection platform with intelligent matching algorithms. Connects service providers with clients based on skills, location, and requirements with real-time communication.",
      tech: ["MERN Stack", "Tailwind CSS", "Cloudinary", "Socket.io", "JWT", "Algorithm"],
      status: "active",
      progress: 50,
      icon: <Users className="w-6 h-6" />,
      github: "https://github.com/DHRUV-SHERE/ConnectVista"
    }
  ];

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  const fetchGitHubProjects = async () => {
    try {
      setLoading(true);
      
      const response = await fetch(
        `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`
      );

      if (!response.ok) {
        throw new Error(`GitHub API error! Status: ${response.status}`);
      }

      const allRepos = await response.json();
      
      const mainProjects = allRepos.filter((repo) =>
        selectedRepos.some(selected => 
          selected.toLowerCase() === repo.name.toLowerCase()
        )
      );

      // Merge GitHub data with static enhancements
      const formattedProjects = mainProjects.map((repo) => {
        const repoKey = repo.name.toLowerCase();
        const enhancement = projectEnhancements[repoKey] || {};
        
        return {
          id: repoKey.replace(/[^a-z]/g, '_'),
          title: enhancement.title || formatProjectName(repo.name),
          description: repo.description || "A software development project",
          longDescription: enhancement.longDescription || 
            (repo.description ? `${repo.description}. A project built with modern web technologies and best practices.` : 
            `A ${repo.language || 'web'} application project.`),
          tech: enhancement.tech || [repo.language || "Web Development"],
          github: repo.html_url,
          live: enhancement.live || repo.homepage || null,
          duration: enhancement.duration || getProjectDuration(repo.created_at, repo.updated_at),
          language: repo.language || "JavaScript",
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          lastUpdated: repo.updated_at,
          icon: enhancement.icon || <Code className="w-6 h-6" />,
          codeSnippet: generateCodeSnippet(repo, enhancement)
        };
      });

      setStaticProjects(formattedProjects);
      setComingSoonProjects(upcomingProjects);
    } catch (err) {
      console.error("Error fetching GitHub data:", err);
      setError(err.message);
      // Fallback to static data on error
      setStaticProjects(Object.values(projectEnhancements).map((proj, index) => ({
        id: Object.keys(projectEnhancements)[index],
        ...proj,
        github: `https://github.com/${githubUsername}/${Object.keys(projectEnhancements)[index]}`,
        language: proj.tech[0] || "JavaScript",
        stars: 0,
        forks: 0,
        lastUpdated: new Date().toISOString(),
        codeSnippet: `// ${proj.title} Project\nconst project = {\n  name: "${proj.title}",\n  description: "${proj.description}",\n  technologies: ${JSON.stringify(proj.tech.slice(0, 3))}\n};`
      })));
      setComingSoonProjects(upcomingProjects);
    } finally {
      setLoading(false);
    }
  };

  // Helper functions
  const getProjectDuration = (createdAt, updatedAt) => {
    const created = new Date(createdAt);
    const updated = new Date(updatedAt);
    const now = new Date();
    
    const createdMonth = created.toLocaleString('default', { month: 'long' });
    const createdYear = created.getFullYear();
    
    const daysSinceUpdate = Math.floor((now - updated) / (1000 * 60 * 60 * 24));
    
    if (daysSinceUpdate < 30) {
      return `${createdMonth} ${createdYear} – Present`;
    } else {
      const updatedMonth = updated.toLocaleString('default', { month: 'long' });
      const updatedYear = updated.getFullYear();
      return `${createdMonth} ${createdYear} – ${updatedMonth} ${updatedYear}`;
    }
  };

  const generateCodeSnippet = (repo, enhancement) => {
    const projectName = enhancement.title || formatProjectName(repo.name);
    const techStack = enhancement.tech || [repo.language || "JavaScript"];
    
    return `// ${projectName} - ${repo.language || 'JavaScript'}
const project = {
  name: "${projectName}",
  description: "${enhancement.description || repo.description || 'Web application'}",
  technologies: ${JSON.stringify(techStack.slice(0, 3), null, 2)},
  repository: "${repo.html_url}",
  features: [
    "Modern architecture",
    "Responsive design",
    "Clean code structure"
  ]
};

// Main functionality
function initialize${projectName.replace(/\s+/g, '')}() {
  console.log("Initializing ${projectName}...");
  return {
    status: "active",
    version: "1.0.0",
    techStack: ${JSON.stringify(techStack.slice(0, 3))}
  };
}`;
  };

  const formatProjectName = (name) => {
    return name
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

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
      "MERN Stack": "#61dafb",
      React: "#61dafb",
      "Node.js": "#68a063",
      "Express.js": "#000000",
      MongoDB: "#47a248",
      "Tailwind CSS": "#38b2ac",
      Bootstrap: "#7952b3",
      Oracle: "#f80000",
    };
    return colors[language] || "#8b949e";
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <section id="projects" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-8 rounded-2xl bg-primary/10 animate-pulse">
              <div className="w-10 h-10 bg-primary rounded-full animate-spin border-3 border-primary border-t-transparent"></div>
              <p className="text-muted-foreground text-lg">Loading projects from GitHub...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Project Card Component for Completed Projects
  const ProjectCard = ({ project }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={() => setSelectedProject(project)}
      className="group cursor-pointer h-full"
    >
      <div className="gradient-border rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm h-full hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 flex flex-col">
        <div className="p-6 flex-grow">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            <div className="flex gap-1.5">
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

          <div className="flex items-center gap-2 mb-3">
            <span
              className="px-2.5 py-1 font-mono rounded-lg text-sm"
              style={{
                backgroundColor: `${getLanguageColor(project.language)}20`,
                color: getLanguageColor(project.language),
                border: `2px solid ${getLanguageColor(project.language)}40`,
              }}
            >
              {project.language}
            </span>
            <p className="text-muted-foreground font-mono text-sm flex items-center gap-1.5">
              <Calendar className="w-3 h-3" />
              {project.duration}
            </p>
          </div>

          <p className="text-muted-foreground text-base mb-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 font-mono rounded-lg bg-muted/50 text-muted-foreground text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="bg-muted/30 rounded-xl p-3 font-mono">
            <div className="flex items-center gap-1.5 mb-2 text-muted-foreground">
              <Code className="w-3 h-3" />
              <span className="text-sm">Code Preview</span>
            </div>
            <pre className="text-secondary/90 overflow-hidden text-ellipsis whitespace-pre-wrap line-clamp-2 text-sm">
              {project.codeSnippet.split("\n").slice(0, 2).join("\n")}
              ...
            </pre>
          </div>
        </div>

        <div className="p-4 border-t border-border flex items-center justify-between">
          <span className="text-muted-foreground text-sm">View Details</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono mb-3">// My Projects</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Project Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            A collection of my completed projects and upcoming developments
          </p>
        </motion.div>

        {/* Completed Projects - All in 3x3 grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Completed</span>{" "}
              <span className="text-secondary">Projects</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              All my finished projects showcasing various technologies and solutions
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staticProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </div>

        {/* Coming Soon Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 mb-6">
              <Calendar className="text-secondary" size={32} />
              <h3 className="text-3xl md:text-4xl font-bold gradient-text">
                Coming Soon
              </h3>
              <Calendar className="text-primary" size={32} />
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Exciting projects currently in development. Stay tuned for updates!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comingSoonProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="gradient-border rounded-2xl p-6 bg-card/30 backdrop-blur-sm group hover:bg-card/50 transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${getStatusColor(
                        project.status
                      )} bg-opacity-20 border border-border/50`}
                    >
                      {project.icon}
                    </div>
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                  </div>
                  <span
                    className={`px-3 py-1.5 font-mono rounded-lg bg-gradient-to-r ${getStatusColor(
                      project.status
                    )} text-white text-sm`}
                  >
                    {project.status === "active"
                      ? "In Development"
                      : "Planning"}
                  </span>
                </div>

                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground text-sm">Progress</span>
                    <span className="font-mono text-secondary text-sm">
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
                  <p className="text-muted-foreground mt-1.5 text-center text-sm">
                    {getStatusText(project.status)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 font-mono rounded-lg bg-muted/50 text-muted-foreground text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-1.5 text-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
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
          className="text-center"
        >
          <div className="glass p-8 rounded-3xl border border-primary/20 max-w-2xl mx-auto hover:border-primary/40 transition-all duration-500">
            <p className="text-muted-foreground text-lg mb-6">
              Want to explore more of my work?
            </p>
            <a
              href="https://github.com/DHRUV-SHERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 flex items-center gap-3 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105">
                <Github className="w-5 h-5" />
                <span className="text-base">Explore My GitHub</span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-x-hidden"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto gradient-border rounded-3xl bg-card"
            >
              <div className="p-8 border-b border-border flex items-center justify-between sticky top-0 bg-card z-10">
                <div>
                  <h3 className="text-3xl font-bold gradient-text">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground font-mono flex items-center gap-3 mt-2">
                    <Calendar className="w-4 h-4" />
                    {selectedProject.duration}
                  </p>
                </div>
                <button
                  className="p-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-8 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="px-4 py-2 font-mono rounded-xl"
                      style={{
                        backgroundColor: `${getLanguageColor(
                          selectedProject.language
                        )}20`,
                        color: getLanguageColor(selectedProject.language),
                        border: `2px solid ${getLanguageColor(
                          selectedProject.language
                        )}40`,
                      }}
                    >
                      {selectedProject.language}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div>
                  <h4 className="font-mono text-secondary mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 font-mono rounded-xl bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-secondary mb-4">Code Example</h4>
                  <div className="gradient-border rounded-2xl overflow-hidden">
                    <div className="bg-muted/30 px-6 py-3 border-b border-border flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-muted-foreground font-mono">
                        {selectedProject.id}.js
                      </span>
                    </div>
                    <pre className="p-6 font-mono overflow-x-auto text-secondary/90 bg-card/50">
                      {selectedProject.codeSnippet}
                    </pre>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-card/50 border border-primary/30 text-primary font-mono rounded-xl hover:bg-card/70 hover:border-primary/50 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
                    >
                      <Github className="w-5 h-5" />
                      View Source Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-xl hover:opacity-90 transition-all duration-300 flex items-center gap-3 shadow-xl shadow-primary/30 hover:shadow-primary/50"
                    >
                      <ExternalLink className="w-5 h-5" />
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