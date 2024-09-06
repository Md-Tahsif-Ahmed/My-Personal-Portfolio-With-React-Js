import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaLinux } from 'react-icons/fa';
import { DiJavascript1, DiPhp, DiMongodb } from 'react-icons/di';
import { SiCplusplus, SiTailwindcss, SiDjango, SiPostgresql } from 'react-icons/si';
import './SkillComponent.css';  // Import the CSS file

const skills = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: <FaPython />, level: 90 },
      { name: "C++", icon: <SiCplusplus />, level: 85 },
      { name: "C", icon: <SiCplusplus />, level: 80 },
      { name: "JavaScript", icon: <DiJavascript1 />, level: 90 },
      { name: "PHP", icon: <DiPhp />, level: 75 }
    ]
  },
  
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML5", icon: <DiJavascript1 />, level: 95 },
      { name: "CSS3", icon: <DiJavascript1 />, level: 90 },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 85 },
      { name: "React JS", icon: <FaReact />, level: 90 },
      { name: "Django", icon: <SiDjango />, level: 80 },
      { name: "Django REST Framework", icon: <SiDjango />, level: 75 },
      { name: "JWT", icon: <FaNodeJs />, level: 70 }
    ]
  },
  {
    category: "Familiar With",
    skills: [
      { name: "Express JS", icon: <FaNodeJs />, level: 70 },
      { name: "Node JS", icon: <FaNodeJs />, level: 75 },
      { name: "React Router", icon: <FaReact />, level: 80 },
      { name: "Axios", icon: <FaReact />, level: 85 },
      { name: "Stripe", icon: <FaNodeJs />, level: 65 },
      { name: "Firebase", icon: <FaNodeJs />, level: 70 },
      { name: "Bootstrap4", icon: <DiJavascript1 />, level: 80 }
    ]
  },
  {
    category: "Database Skills",
    skills: [
      { name: "MySQL", icon: <FaDatabase />, level: 85 },
      { name: "MongoDB", icon: <DiMongodb />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 75 }
    ]
  },
  {
    category: "Software and Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "MATLAB", icon: <FaReact />, level: 70 },
      { name: "Xampp", icon: <FaDatabase />, level: 75 },
      { name: "Anaconda", icon: <FaPython />, level: 80 },
      { name: "NetBeans", icon: <FaReact />, level: 70 },
      { name: "VS Code", icon: <FaReact />, level: 95 }
    ]
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Windows 10", icon: <FaLinux />, level: 95 },
      { name: "Linux (Ubuntu)", icon: <FaLinux />, level: 85 }
    ]
  }
];

export default function SkillComponent() {
  return (
    <section id='skill' >
        <span className="head">My Skills</span>
      <div id="skills">
      <div className="container">
        <div className="skills-grid">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="skill-category">{category.category}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    className="skill-item"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="skill-name">
                      <span className="skill-icon">{skill.icon}</span> {skill.name}
                    </span>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        style={{ width: `${skill.level}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.7, delay: idx * 0.2 }}
                      ></motion.div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
