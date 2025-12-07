import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Phone, CheckCircle, Loader2, Clock, ExternalLink } from 'lucide-react';

// EmailJS config
const SERVICE_ID = "service_mvmzvlq";
const TEMPLATE_ID = "template_ofep908";
const PUBLIC_KEY = "G3P48wd0AD6_lUVxK";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await window.emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setSubmitStatus("success");
      setIsSubmitted(true);
      
      // Reset form after delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/DHRUV-SHERE', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/dhruv-shere/', label: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:sheredhruv@gmail.com', label: 'Email' },
  ];

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
      value: "Gujarat, India",
      color: "purple",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      color: "cyan",
    },
  ];

  // Input Components
  const Input = ({ className = '', ...props }) => (
    <input
      className={`w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 text-sm ${className}`}
      {...props}
    />
  );

  const Textarea = ({ className = '', ...props }) => (
    <textarea
      className={`w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none text-sm min-h-[120px] ${className}`}
      {...props}
    />
  );

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono text-sm mb-2">{'<Contact />'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Terminal Card */}
            <div className="gradient-border rounded-xl overflow-hidden">
              <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-4">
                  contact.sh
                </span>
              </div>
              <div className="bg-card/80 p-6 font-mono text-sm space-y-3">
                <div className="code-line">
                  <span className="text-muted-foreground">$</span>{' '}
                  <span className="text-primary">cat</span> contact_info.txt
                </div>
                <div className="space-y-2 pl-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">+91 9316846548</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">sheredhruv@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="text-muted-foreground">Gujarat, India</span>
                  </div>
                </div>
                <div className="code-line pt-2">
                  <span className="text-muted-foreground">$</span>{' '}
                  <span className="text-primary">echo</span>{' '}
                  <span className="string">"Seeking internship opportunities!"</span>
                </div>
                <div className="text-secondary pl-4">Seeking internship opportunities!</div>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="gradient-border rounded-xl p-4 bg-card/30 backdrop-blur-sm group hover:bg-card/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-foreground font-medium hover:text-primary transition-colors text-base"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium text-base">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Connect with me</h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl glass glass-hover"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="gradient-border rounded-xl p-4 bg-card/30">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-secondary animate-ping opacity-50" />
                </div>
                <span className="font-medium">Open to internship opportunities</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 ml-6">
                Response time: Usually within 24 hours
              </p>
            </div>

            {/* Languages */}
            <div className="gradient-border rounded-xl p-4 bg-card/30">
              <h4 className="font-mono text-secondary text-sm mb-3">Languages</h4>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-lg bg-muted/50 text-foreground text-sm">English (Fluent)</span>
                <span className="px-3 py-1 rounded-lg bg-muted/50 text-foreground text-sm">Hindi (Fluent)</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="gradient-border rounded-xl p-6 bg-card/50 backdrop-blur-sm space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium font-mono text-muted-foreground">
                    name:
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium font-mono text-muted-foreground">
                    email:
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium font-mono text-muted-foreground">
                  subject:
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium font-mono text-muted-foreground">
                  message:
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Success & Error Messages */}
              {submitStatus === "success" && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500 text-green-400 text-sm animate-fade-in">
                  ✅ Your message has been successfully delivered!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500 text-red-400 text-sm animate-fade-in">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Your message is encrypted and secure. I'll respond within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;