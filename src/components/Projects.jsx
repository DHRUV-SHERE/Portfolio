import { Component } from 'react';
import { ExternalLink, Github, Calendar, Star, GitFork } from 'lucide-react';
import { Resource } from '../resources';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      loading: true,
      error: null
    };
  }

  githubUsername = "DHRUV-SHERE";
  selectedRepos = [
    "AgroSence",
    "Spotify",
    "knowBase",
    "Oracle",
    "Amazon",
    "RejoiuceClone",
    "Online_Learning_Management_System",
    "React_Text_Site",
    "ToDoList"
  ];
  selectedReposLower = this.selectedRepos.map((name) => name.toLowerCase());

  projectImages = {
    agrosence: Resource.AgroSence,
    spotify: Resource.Spotify,
    knowbase: Resource.KnowBase,
    oracle: Resource.Oracle,
    amazon: Resource.Amazon,
    rejoiuceclone: Resource.RejoiuceClone,
    online_learning_management_system: Resource.Online_Learning_Management_System,
    react_text_site: Resource.React_Text_Site,
    todolist: Resource.ToDoList
  };

  componentDidMount() {
    this.fetchProjects();
    this.addCSSAnimations();
  }

  addCSSAnimations = () => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      
      .animate-slide-up {
        animation: slideUp 0.8s ease-out forwards;
      }
      
      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
      }
      
      .project-image {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .project-card:hover .project-image {
        transform: scale(1.08);
      }
      
      .name-gradient {
        background: linear-gradient(135deg, hsl(187 100% 45%), hsl(270 100% 50%));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .project-card {
        transition: all 0.3s ease;
      }
      
      .project-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }

      .glass-card-enhanced {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        position: relative;
        overflow: hidden;
      }

      .glass-card-enhanced::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.6s;
      }

      .glass-card-enhanced:hover::before {
        left: 100%;
      }
    `;
    document.head.appendChild(style);
    this.animationStyle = style;
  };

  fetchProjects = async () => {
    try {
      this.setState({ loading: true });
      const response = await fetch(
        `https://api.github.com/users/${this.githubUsername}/repos`
      );

      if (!response.ok)
        throw new Error(`GitHub API error! Status: ${response.status}`);

      const data = await response.json();
      const filtered = data.filter((repo) =>
        this.selectedReposLower.includes(repo.name.toLowerCase())
      );

      const formatted = filtered.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description provided.",
        html_url: repo.html_url,
        homepage: repo.homepage || repo.html_url,
        language: repo.language || "N/A",
        updated_at: repo.updated_at,
        stargazers_count: repo.stargazers_count || 0,
        forks_count: repo.forks_count || 0,
        image: this.getProjectImage(repo.name)
      }));

      this.setState({ projects: formatted });
    } catch (err) {
      console.error("Error fetching GitHub data: ", err);
      this.setState({ error: err.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  getProjectImage = (repoName) => {
    const normalizedName = repoName.toLowerCase().replace(/[-_]/g, '');
    return this.projectImages[normalizedName] || null;
  };

  getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      React: "#61dafb",
      HTML: "#e34c26",
      CSS: "#1572b6",
    };
    return colors[language] || "#8b949e";
  };

  formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  formatProjectName = (name) => {
    return name
      .split(/[-_]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  Button = ({ children, onClick, className = '', variant = 'default', size = 'default' }) => {
    const baseStyles = 'px-4 py-2 rounded-xl font-medium transition-all duration-300 font-["Orbitron"] flex items-center gap-2';
    
    const variants = {
      default: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25',
      outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/25',
    };

    const sizes = {
      default: 'text-sm',
      sm: 'text-sm px-3 py-2',
      lg: 'text-lg px-6 py-3'
    };

    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
    );
  };

  componentWillUnmount() {
    if (this.animationStyle) {
      document.head.removeChild(this.animationStyle);
    }
  }

  render() {
    const { projects, loading, error } = this.state;
    const Button = this.Button;

    if (loading) {
      return (
        <section id="projects" className="py-20 relative w-full">
          <div className="container mx-auto px-4 w-full">
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-cyan-500/20 animate-pulse">
                <div className="w-8 h-8 bg-cyan-500 rounded-full animate-spin border-2 border-cyan-300 border-t-transparent"></div>
              </div>
              <p className="text-gray-400 mt-4 font-['Inter']">Loading projects...</p>
            </div>
          </div>
        </section>
      );
    }

    if (error) {
      return (
        <section id="projects" className="py-20 relative w-full">
          <div className="container mx-auto px-4 w-full">
            <div className="text-center">
              <p className="text-red-400 font-['Inter']">Error loading projects: {error}</p>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section id="projects" className="py-20 relative w-full ">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10 w-full">
          {/* Header Section */}
          <div className="text-center mb-16 animate-slide-up w-full">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron'] bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Projects
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-['Inter'] leading-relaxed">
              A collection of my latest work and innovative solutions
            </p>
          </div>

          {/* Projects Grid - Full Width */}
          <div className="w-full max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="glass-card-enhanced project-card group animate-slide-up"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0,
                    animationFillMode: 'forwards'
                  }}
                >
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover project-image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <span className="bg-black/60 text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          {project.language}
                        </span>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white font-['Orbitron'] group-hover:text-cyan-400 transition-colors">
                        {this.formatProjectName(project.name)}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar size={12} />
                        <span>{this.formatDate(project.updated_at)}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed font-['Inter'] text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-400" />
                          <span>{project.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={14} className="text-gray-400" />
                          <span>{project.forks_count}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.homepage && project.homepage !== project.html_url && (
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            size="sm"
                            className="w-full justify-center text-sm"
                          >
                            <ExternalLink size={16} />
                            Demo
                          </Button>
                        </a>
                      )}
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={project.homepage && project.homepage !== project.html_url ? "flex-1" : "w-full"}
                      >
                        <Button
                          size="sm"
                          variant={project.homepage && project.homepage !== project.html_url ? "outline" : "default"}
                          className={`w-full justify-center text-sm ${
                            project.homepage && project.homepage !== project.html_url 
                              ? '' 
                              : 'bg-gradient-to-r from-cyan-500 to-blue-600'
                          }`}
                        >
                          <Github size={16} />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in w-full">
            <div className="glass-card-enhanced p-8 max-w-2xl mx-auto border border-cyan-500/20">
              <p className="text-xl text-gray-300 mb-6 font-['Inter']">
                Want to see more of my work?
              </p>
              <a
                href={`https://github.com/${this.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  <Github size={20} />
                  Explore My GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;