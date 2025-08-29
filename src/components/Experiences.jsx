import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Experiences = () => {
  return (
    <motion.section
      id="experiences"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Experiences
      </motion.h2>
      <motion.div
        className="project-gri"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <h3>2025 - present</h3>
          <h4> IT Support Intern - Compilart Tecnologia</h4>
          <div className="project-tech">
            <span>Customer service</span>
            <span>Remote support</span>
            <span>MySQL</span>
            <span>Problem solving</span>
            <span>System configuration | printer</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <h3>2022 - 2025</h3>
          <h4> Accounting Assistant - Nobre Accounting Advisory and Dispatch Office</h4>
          <div className="project-tech">
            <span>FGTS (Severance Indemnity Fund)</span>
            <span>Income Tax</span>
            <span>Payroll</span>
            <span>Customer service</span>
            <span>Digital Certificate</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
