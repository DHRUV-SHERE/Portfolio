import { Component } from 'react';
import { ExternalLink, Github, Calendar, Star, GitFork, Sparkles } from 'lucide-react';
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

  // Fixed project images mapping - using exact property names
  projectImages = {
    agrosence: Resource.AgroSence,
    spotify: Resource.Spotify,
    knowbase: Resource.KnowBase, // Fixed: KnowBase instead of knowBase
    oracle: Resource.Oracle,
    amazon: Resource.Amazon,
    rejoiuceclone: Resource.RejoiuceClone,
    online_learning_management_system: Resource.Online_Learning_Management_System,
    react_text_site: Resource.React_Text_Site,
    todolist: Resource.ToDoList
  };

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects = async () => {
    try {
      this.setState({ loading: true });
      const response = await fetch(
        `https://api.github.com/users/${this.githubUsername}/repos`
      );

      if (!response.ok)
        throw new Error(`GitHub API error! Status: ${response.status}`);

      const data = await response.json();
      
      // Case-insensitive filtering
      const filtered = data.filter((repo) =>
        this.selectedRepos.some(selected => 
          selected.toLowerCase() === repo.name.toLowerCase()
        )
      );

      const formatted = filtered.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || "No description provided.",
        html_url: repo.html_url,
        homepage: repo.homepage,
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
    const normalizedName = repoName.toLowerCase().replace(/-/g, '_');
    // console.log('Looking for image:', normalizedName, 'Available:', Object.keys(this.projectImages));
    return this.projectImages[normalizedName] || this.getFallbackImage();
  };

  getFallbackImage = () => {
    // Return a default image or the first available image
    return Resource.AgroSence; // Fallback to first image
  };

  getLanguageColor = (language) => {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      Python: "#3572A5",
      Java: "#b07219",
      HTML: "#e34c26",
      CSS: "#1572b6",
      PHP: "#4F5D95",
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
    const baseStyles = 'px-4 py-2 rounded-xl text-xl transition-all duration-300 font-["Orbitron"] flex items-center gap-2';
    
    const variants = {
      default: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105',
      outline: 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105',
    };

    const sizes = {
      default: 'text-xl',
      sm: 'text-xl px-3 py-2',
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

  render() {
    const { projects, loading, error } = this.state;
    const Button = this.Button;

    if (loading) {
      return (
        <section id="projects" className="py-20 relative w-full">
          <div className="container mx-auto px-4 w-full">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 p-6 rounded-2xl bg-cyan-500/10 animate-pulse">
                <div className="w-8 h-8 bg-cyan-500 rounded-full animate-spin border-2 border-cyan-300 border-t-transparent"></div>
                <p className="text-gray-400 font-['Inter']">Loading projects...</p>
              </div>
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
              <div className="inline-flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                <p className="text-red-400 font-['Inter']">Error loading projects: {error}</p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section id="projects" className="py-20 relative w-full overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10 w-full">
          {/* Header Section */}
          <div className="text-center mb-16 w-full">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="text-cyan-400" size={32} />
              <h2 className="text-4xl md:text-6xl font-bold font-['Orbitron'] bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                My Projects
              </h2>
              <Sparkles className="text-blue-400" size={32} />
            </div>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-['Inter'] leading-relaxed">
              A collection of my latest work and innovative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <div className="w-full max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s forwards`,
                    opacity: 0
                  }}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          e.target.src = this.getFallbackImage();
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                        <Github size={48} className="text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Language Badge */}
                    <div className="absolute top-4 right-4">
                      <span 
                        className="px-3 py-1 rounded-full text-xs text-xl backdrop-blur-sm border border-white/20 text-white"
                        style={{ backgroundColor: `${this.getLanguageColor(project.language)}20` }}
                      >
                        {project.language}
                      </span>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white/80">
                      <div className="flex items-center gap-1 text-xl">
                        <Star size={14} className="text-yellow-400" />
                        <span>{project.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xl">
                        <GitFork size={14} className="text-gray-300" />
                        <span>{project.forks_count}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white font-['Orbitron'] group-hover:text-cyan-400 transition-colors duration-300">
                        {this.formatProjectName(project.name)}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar size={12} />
                        <span>{this.formatDate(project.updated_at)}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed font-['Inter'] text-lg line-clamp-3">
                      {project.description}
                    </p>
                    
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
                            className="w-full justify-center text-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                          >
                            <ExternalLink size={16} />
                            Live Demo
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
                          className="w-full justify-center text-xl"
                        >
                          <Github size={16} />
                          Source Code
                        </Button>
                      </a>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 w-full">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 max-w-2xl mx-auto hover:border-cyan-400/40 transition-all duration-500">
              <p className="text-xl text-gray-300 mb-6 font-['Inter']">
                Want to explore more of my work?
              </p>
              <a
                href={`https://github.com/${this.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 transition-transform">
                  <Github size={20} />
                  Explore My GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Add CSS animations */}
        <style jsx>{`
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
        `}</style>
      </section>
    );
  }
}

export default Projects;