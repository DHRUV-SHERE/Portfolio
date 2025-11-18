import { useState } from 'react';
import { Mail, MapPin, Clock, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

// EmailJS config
const SERVICE_ID = "service_mvmzvlq";
const TEMPLATE_ID = "template_ofep908";
const PUBLIC_KEY = "G3P48wd0AD6_lUVxK";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sheredhruv@gmail.com",
      href: "mailto:sheredhruv@gmail.com",
      color: "blue",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, India",
      color: "purple",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      color: "cyan",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/DHRUV-SHERE",
      color: "blue",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/dhruv-shere",
      color: "purple",
    },
    {
      name: "Portfolio",
      icon: ExternalLink,
      href: "#",
      color: "cyan",
    },
  ];

  const getGlowClass = (color) => {
    switch (color) {
      case 'purple':
        return 'glow-purple';
      case 'cyan':
        return 'glow-cyan';
      default:
        return 'glow-blue';
    }
  };

  const getTextColorClass = (color) => {
    switch (color) {
      case 'purple':
        return 'text-secondary';
      case 'cyan':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  const getBackgroundClass = (color) => {
    switch (color) {
      case 'purple':
        return 'bg-secondary/10';
      case 'cyan':
        return 'bg-accent/10';
      default:
        return 'bg-primary/10';
    }
  };

  const Button = ({ children, onClick, className = '', variant = 'default', size = 'default', disabled = false, type = 'button' }) => {
    const baseStyles = 'px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-lift font-["Orbitron"] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      default: 'bg-gradient-to-r from-primary to-secondary text-primary-foreground hover-glow',
      outline: 'border-2 border-neon text-primary hover:bg-primary/10',
    };

    const sizes = {
      default: 'text-base',
      sm: 'text-sm px-4 py-2',
      lg: 'text-lg px-8 py-4'
    };

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
    );
  };

  const Input = ({ className = '', ...props }) => (
    <input
      className={`w-full px-4 py-3 bg-muted/50 border-2 border-primary/30 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:glow-blue transition-all duration-300 font-["Inter"] ${className}`}
      {...props}
    />
  );

  const Textarea = ({ className = '', ...props }) => (
    <textarea
      className={`w-full px-4 py-3 bg-muted/50 border-2 border-primary/30 rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:glow-blue transition-all duration-300 font-["Inter"] min-h-[150px] resize-vertical ${className}`}
      {...props}
    />
  );

  return (
    <section id="contact" className="py-20 relative w-full bg-gradient-to-b from-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="text-center mb-16 animate-slide-up w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron']">
            Get In <span className="name-gradient">Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-['Inter'] leading-relaxed">
            Let's discuss your next project or just say hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="glass-card p-8">
              <h3 className="text-3xl font-bold mb-6 font-['Orbitron'] text-foreground">
                Let's work together
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed font-['Inter'] text-lg">
                I'm always interested in new opportunities, whether it's a full-time position, 
                freelance project, or just a conversation about technology. Feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`p-4 rounded-xl ${getBackgroundClass(info.color)} ${getGlowClass(info.color)} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={getTextColorClass(info.color)} size={28} />
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground text-sm font-['Inter'] mb-1">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-foreground font-medium hover:text-primary transition-colors font-['Inter'] text-lg"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium font-['Inter'] text-lg">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-3xl font-bold mb-6 font-['Orbitron'] text-foreground">
                Find me online
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 rounded-xl ${getBackgroundClass(social.color)} ${getGlowClass(social.color)} hover-lift hover-glow transition-all duration-300 group`}
                    >
                      <Icon className={`${getTextColorClass(social.color)} group-hover:scale-110 transition-transform duration-300`} size={28} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-6 font-['Orbitron'] text-foreground">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-lg text-muted-foreground mb-3 block font-['Inter'] font-medium">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="text-lg py-4"
                  />
                </div>
                <div>
                  <label className="text-lg text-muted-foreground mb-3 block font-['Inter'] font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="text-lg py-4"
                  />
                </div>
              </div>

              <div>
                <label className="text-lg text-muted-foreground mb-3 block font-['Inter'] font-medium">
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="text-lg py-4"
                />
              </div>

              <div>
                <label className="text-lg text-muted-foreground mb-3 block font-['Inter'] font-medium">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  required
                  className="text-lg py-4"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full text-lg py-4"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={24} />
                  </>
                )}
              </Button>

              {/* Success & Error Messages */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500 text-green-400 font-['Inter'] text-lg animate-fade-in">
                  ✅ Your message has been successfully delivered!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500 text-red-400 font-['Inter'] text-lg animate-fade-in">
                  ❌ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;