import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const ExperienceSection = () => {
  const education = [
    {
      id: 'btech',
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'U.V. Patel College of Engineering - Ganpat University, Mehsana',
      duration: '2023 - 2026 (Expected)',
      grade: '7.88/10 CGPA',
    },
    {
      id: 'diploma',
      degree: 'Diploma in Information Technology',
      institution: 'Government Polytechnic College, Ahmedabad',
      duration: '2020 - 2023',
      grade: '8.19/10 CGPA',
    },
    {
      id: 'ssc',
      degree: 'Class X - GSEB',
      institution: 'New Noble School, Ahmedabad',
      duration: '2019 - 2020',
      grade: '78.33%',
    },
  ];

  const achievements = [
    {
      title: 'SIH-2024',
      description: 'Led a 6-member team in the internal SIH 2024 round, shortlisted among college teams in the Agriculture domain. Developed a farmer support platform prototype that later evolved into the AgroSense project.',
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-secondary font-mono text-sm mb-2">{'/* Background */'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and notable accomplishments in the tech space.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20 transform md:-translate-x-1/2" />

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary transform -translate-x-1/2 md:-translate-x-1/2 z-10 shadow-lg shadow-primary/50" />

              {/* Content */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="gradient-border rounded-xl p-6 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-secondary font-medium text-sm">{edu.institution}</p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                    <div className="flex items-center gap-1 text-secondary font-mono">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-secondary font-mono">{'>'}</span> Achievements
          </h3>
          <div className="grid gap-6 max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="gradient-border rounded-xl p-6 bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-secondary font-mono">{'>'}</span> Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management'].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 rounded-xl bg-muted/50 text-foreground font-medium hover:bg-muted transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;