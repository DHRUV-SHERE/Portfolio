"use client";
import { motion } from "framer-motion";
import { ChevronDown, Briefcase, User } from "lucide-react";
import Dhruv from "../assets/Dhruv.png";

const HeroSection = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-vh-100 d-flex align-items-center position-relative ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ paddingTop: "60px", overflow: "hidden" }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Content */}
          <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="display-4 fw-bold mb-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi, I'm{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Dhruv
                </span>
              </motion.h1>

              <motion.h2
                className={`h5 mb-4 ${
                  darkMode ? "text-secondary" : "text-muted"
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Full Stack Web Developer
              </motion.h2>

              <motion.p
                className={`lead mb-5 ${
                  darkMode ? "text-light" : "text-muted"
                }`}
                style={{ maxWidth: "100%", margin: "0 auto" }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                I craft digital experiences with modern technologies, building
                scalable web applications that make a difference.
              </motion.p>

              <motion.div
                className="d-flex flex-column flex-md-row justify-content-center justify-content-lg-start gap-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.a
                  href="#projects"
                  className="btn btn-dark btn-lg px-4 py-3 border-light rounded-pill d-flex align-items-center justify-content-center"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Briefcase size={20} className="me-2" />
                  View My Work
                </motion.a>

                <motion.a
                  href="#about"
                  className={`btn ${
                    darkMode ? "btn-outline-light" : "btn-outline-dark"
                  } btn-lg px-4 py-3 rounded-pill d-flex align-items-center justify-content-center`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <User size={20} className="me-2" />
                  About Me
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <motion.div
              className="position-relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Decorative Blur Shape */}
                <div
                  className="position-absolute d-none d-md-block"
                  style={{
                    width: "400px",
                    height: "400px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    filter: "blur(2px)",
                    opacity: 0.1,
                    top: "-20px",
                    left: "-20px",
                  }}
                />

                {/* Image Shape */}
                <div
                  className="position-relative overflow-hidden d-flex align-items-center justify-content-center mx-auto"
                  style={{
                    width: "280px",
                    height: "280px",
                    borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    border: `2px solid ${
                      darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                    }`,
                    backdropFilter: "blur(10px)",
                    background: `linear-gradient(135deg, ${
                      darkMode
                        ? "rgba(102, 126, 234, 0.2)"
                        : "rgba(102, 126, 234, 0.1)"
                    } 0%, ${
                      darkMode
                        ? "rgba(118, 75, 162, 0.2)"
                        : "rgba(118, 75, 162, 0.1)"
                    } 100%)`,
                  }}
                >
                  <div
                    className="rounded-circle bg-primary"
                    style={{
                      width: "220px",
                      height: "220px",
                      backgroundImage: `url(${Dhruv})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="position-absolute"
                  style={{
                    top: "10px",
                    right: "10px",
                    width: "15px",
                    height: "15px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "50%",
                  }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.div
                  className="position-absolute"
                  style={{
                    bottom: "20px",
                    left: "20px",
                    width: "10px",
                    height: "10px",
                    background:
                      "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                    borderRadius: "50%",
                  }}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <motion.div
          className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown
            size={32}
            className={darkMode ? "text-light" : "text-dark"}
            style={{ opacity: 0.7 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
