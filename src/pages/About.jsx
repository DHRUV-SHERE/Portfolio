"use client";
import { motion } from "framer-motion";
import { User, Briefcase, MapPin, Award, Lightbulb, Users } from "lucide-react";

const AboutSection = ({ darkMode }) => {
  const stats = [
    {
      icon: User,
      label: "Dhruv Shere",
      value: "Full Stack Web Developer",
    },
    {
      icon: Briefcase,
      label: "Diploma",
      value: "Government Polytechnic Collage, Ahmedabad",
    },
    {
      icon: Briefcase,
      label: "Btech",
      value: "U.V. Patel College of Engineering, Ganpat University",
    },
  ];

  const values = [
    {
      icon: Award,
      title: "Quality",
      description:
        "I believe in writing clean, maintainable code that stands the test of time.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Always exploring new technologies and approaches to solve complex problems.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working together with teams to create exceptional digital experiences.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className={`py-5 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ minHeight: "100vh", paddingTop: "100px" }}
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
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </h1>
          <p className={`lead ${darkMode ? "text-secondary" : "text-muted"}`}>
            Get to know more about my journey and passion
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="row d-flex justify-content-center align-items-center mb-5">
          {/* Left Side - Description */}
          <div className="col-lg-5 mb-4 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="h3 fw-bold mb-4">Hello! I'm Dhruv</h2>

              <motion.p
                className={`mb-4 ${darkMode ? "text-light" : "text-muted"}`}
                style={{ lineHeight: "1.7", fontSize: "1.1rem" }}
                variants={itemVariants}
              >
                My name is <strong>Dhruv Shere</strong>. I am currently pursuing
                my <strong>B.Tech</strong> in Information Technology at{" "}
                <strong>
                  U.V. Patel College of Engineering, Ganpat University
                </strong>
                . I have completed my
                <strong> Diploma in IT Engineering</strong> from{" "}
                <strong>Government Polytechnic College, Ahmedabad</strong> with
                a CGPA of <strong>8.19</strong>.
              </motion.p>

              <motion.p
                className={`mb-4 ${darkMode ? "text-light" : "text-muted"}`}
                style={{ lineHeight: "1.7", fontSize: "1.1rem" }}
                variants={itemVariants}
              >
                I am passionate about{" "}
                <strong>full-stack web development using the MERN stack</strong>{" "}
                and have worked on several real-life projects such as:
                <strong> Rate IT</strong>, <strong> HinduVidhyapith</strong>,{" "}
                <strong> AgroSense</strong>.
              </motion.p>

              <motion.p
                className={`mb-0 ${darkMode ? "text-light" : "text-muted"}`}
                style={{ lineHeight: "1.7", fontSize: "1.1rem" }}
                variants={itemVariants}
              >
                These projects have helped me grow technically and strengthened
                my problem-solving and development skills, especially in{" "}
                <strong>React</strong> and <strong>Node.js</strong>-based
                applications.
              </motion.p>
            </motion.div>
            <motion.a
              href="/resume.pdf"
              download="Dhruv_Shree_Resume.pdf"
              className="btn btn-primary mt-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                border: "none",
                padding: "12px 24px",
                borderRadius: "12px",
                fontWeight: "bold",
                color: "#fff",
                display: "inline-block",
              }}
            >
              📄 Download Resume
            </motion.a>
          </div>

          {/* Right Side - Stats */}
          <div className="col-lg-5">
            <motion.div
              className="row g-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="col-12"
                  variants={itemVariants}
                >
                  <motion.div
                    className={`p-4 rounded-4 h-100 ${
                      darkMode
                        ? "bg-secondary border border-secondary"
                        : "bg-white border border-light shadow-sm"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      boxShadow: darkMode
                        ? "0 10px 30px rgba(102, 126, 234, 0.2)"
                        : "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="rounded-3 p-3 me-3"
                        style={{
                          background:
                            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        }}
                      >
                        <stat.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h5
                          className={`mb-1 fw-bold ${
                            darkMode ? "text-light" : "text-dark"
                          }`}
                        >
                          {stat.label}
                        </h5>
                        <p
                          className={`mb-0 ${
                            darkMode ? "text-light" : "text-muted"
                          }`}
                        >
                          {stat.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* My Values Section */}
        <motion.div
          className="mt-5 pt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-5">
            <h2
              className={`display-5 fw-bold ${
                darkMode ? "text-light" : "text-dark"
              }`}
            >
              My Values
            </h2>
          </div>

          <motion.div
            className="row g-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="col-lg-4 col-md-6"
                variants={itemVariants}
              >
                <motion.div
                  className={`p-4 rounded-4 h-100 text-center ${
                    darkMode
                      ? "bg-secondary border border-secondary"
                      : "bg-white border border-light shadow-sm"
                  }`}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    boxShadow: darkMode
                      ? "0 15px 40px rgba(102, 126, 234, 0.3)"
                      : "0 15px 40px rgba(0,0,0,0.15)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="rounded-circle p-3 mx-auto mb-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      width: "70px",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h4
                    className={`fw-bold mb-3 ${
                      darkMode ? "text-light" : "text-dark"
                    }`}
                  >
                    {value.title}
                  </h4>
                  <p
                    className={`mb-0 ${
                      darkMode ? "text-secondary" : "text-muted"
                    }`}
                  >
                    {value.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
