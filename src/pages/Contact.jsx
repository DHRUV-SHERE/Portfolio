"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter, ExternalLink } from "lucide-react"

// EmailJS config
const SERVICE_ID = "service_mvmzvlq"
const TEMPLATE_ID = "template_ofep908"
const PUBLIC_KEY = "G3P48wd0AD6_lUVxK"

const ContactSection = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      })
      .catch(() => {
        setSubmitStatus("error")
      })
      .finally(() => {
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus(null), 5000)
      })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sheredhruv@gmail.com",
      href: "mailto:sheredhruv@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ahmedabad, India",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/DHRUV-SHERE",
      color: "#333",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/dhruv-shere",
      color: "#0077b5",
    },
    {
      name: "Portfolio",
      icon: ExternalLink,
      href: "#",
      color: "#667eea",
    },
  ]

  return (
    <section
      id="contact"
      className={`py-5 ${darkMode ? "bg-secondary text-light" : "bg-white text-dark"}`}
      style={{ minHeight: "100vh", minWidth: "100vw", paddingTop: "100px" }}
    >
      <hr />
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="display-3 fw-bold mb-3">
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Touch
            </span>
          </h1>
          <p className={`lead ${darkMode ? "text-light" : "text-muted"}`}>
            Let's discuss your next project or just say hello
          </p>
        </motion.div>

        <div className="row g-5">
          {/* Contact Info (Left Side) */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`h3 fw-bold mb-4 ${darkMode ? "text-light" : "text-dark"}`}>Let's work together</h2>
              <p className={`mb-5 ${darkMode ? "text-light" : "text-muted"}`} style={{ lineHeight: "1.7" }}>
                I'm always interested in new opportunities, whether it's a full-time position, freelance project, or
                just a conversation about technology. Feel free to reach out!
              </p>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="d-flex align-items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="rounded-3 p-3 me-3"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      minWidth: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h5 className={`mb-1 fw-bold ${darkMode ? "text-light" : "text-dark"}`}>{info.label}</h5>
                    {info.href ? (
                      <a
                        href={info.href}
                        className={`text-decoration-none ${darkMode ? "text-light" : "text-muted"}`}
                        style={{ transition: "color 0.3s ease" }}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className={`mb-0 ${darkMode ? "text-light" : "text-muted"}`}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className={`fw-bold mb-3 ${darkMode ? "text-light" : "text-dark"}`}>Find me online</h4>
                <div className="d-flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn rounded-3 p-3 ${darkMode ? "bg-dark border border-secondary" : "bg-light border-light shadow-sm"}`}
                      style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}
                      whileHover={{ scale: 1.1, y: -5, backgroundColor: social.color, borderColor: social.color }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon size={24} className={darkMode ? "text-light" : "text-dark"} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={`p-4 rounded-4 ${darkMode ? "bg-dark border border-secondary" : "bg-light border-light shadow-sm"}`}>
                <h3 className={`h4 fw-bold mb-4 ${darkMode ? "text-light" : "text-dark"}`}>Send me a message</h3>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className={`form-label ${darkMode ? "text-light" : "text-dark"}`}>Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className={`form-control ${darkMode ? "bg-secondary border-secondary text-light" : "bg-white border-light"}`}
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className={`form-label ${darkMode ? "text-light" : "text-dark"}`}>Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className={`form-control ${darkMode ? "bg-secondary border-secondary text-light" : "bg-white border-light"}`}
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className={`form-label ${darkMode ? "text-light" : "text-dark"}`}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className={`form-control ${darkMode ? "bg-secondary border-secondary text-light" : "bg-white border-light"}`}
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className={`form-label ${darkMode ? "text-light" : "text-dark"}`}>Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      className={`form-control ${darkMode ? "bg-secondary border-secondary text-light" : "bg-white border-light"}`}
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-dark btn-lg w-100 d-flex align-items-center justify-content-center gap-2"
                    style={{
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      border: "none",
                      borderRadius: "12px",
                      padding: "16px",
                    }}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner-border spinner-border-sm" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>

                  {/* Success & Error Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      className="alert alert-success mt-3 d-flex align-items-center gap-2 fw-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      ✅ Your message has been successfully delivered!
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      className="alert alert-danger mt-3 fw-bold"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      ❌ Something went wrong. Please try again.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
