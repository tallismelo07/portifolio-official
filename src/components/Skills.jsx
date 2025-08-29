import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const skillsList = [
  { name: "Java", img: "/projects/java.png" },
  { name: "JavaScript", img: "/projects/javascript.png" },
  { name: "ReactJs", img: "/projects/reactjs.png" },
  { name: "SQL", img: "/projects/sql.png" },
  { name: "MySql", img: "/projects/mysql.png" },
  // { name: "MongoDB", img: "/projects/mongodb.png" },
  // { name: "AWS", img: "/projects/aws.png" },
  // { name: "Docker", img: "/projects/docker.png" },
];

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="skills-title"
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {skillsList.map((skill) => (
          <motion.div
            key={skill.name}
            className="skill-card"
            variants={fadeInUp}
            whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }}
          >
            <div
              className="skill-image"
              style={{ backgroundImage: `url('${skill.img}')` }}
            />
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
