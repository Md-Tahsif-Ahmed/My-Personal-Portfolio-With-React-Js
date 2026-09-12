import { motion } from 'framer-motion';
import {
  FaPython,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaCpanel
} from 'react-icons/fa';
import { DiJavascript1, DiPhp, DiMongodb, DiDocker, DiLinux } from 'react-icons/di';
import {
  SiCplusplus,
  SiTailwindcss,
  SiDjango,
  SiPostgresql,
  SiSocketdotio,
  SiRedis,
  SiTypescript,
  SiRedux,
  SiNestjs,
  SiMongoose,
  SiVercel,
  SiNginx,
  SiRabbitmq
} from 'react-icons/si';
import './SkillComponent.css'; // Import the CSS file
import { RiNextjsFill } from 'react-icons/ri';
import { FaDocker } from 'react-icons/fa6';
import { MdSchedule } from 'react-icons/md';
import { GiBirdMask } from 'react-icons/gi';
import { FcServices } from 'react-icons/fc';

const skills = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', icon: <FaPython />, level: 95 },
      { name: 'JavaScript', icon: <DiJavascript1 />, level: 90 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
      { name: 'C++', icon: <SiCplusplus />, level: 90 },
      { name: 'C', icon: <SiCplusplus />, level: 80 },
      { name: 'PHP', icon: <DiPhp />, level: 75 }
    ]
  },

  {
    category: 'Frontend Technologies',
    skills: [
      { name: 'HTML5', icon: <DiJavascript1 />, level: 95 },
      { name: 'CSS3', icon: <DiJavascript1 />, level: 90 },
      { name: 'Tailwind', icon: <SiTailwindcss />, level: 85 },
      { name: 'React JS', icon: <FaReact />, level: 90 },
      { name: 'Next JS', icon: <RiNextjsFill />, level: 70 },
      { name: 'Redux', icon: <SiRedux />, level: 50 },
      { name: 'Firebase', icon: <FaNodeJs />, level: 60 },
      // { name: "Bootstrap4", icon: <DiJavascript1 />, level: 80 },
      { name: 'React Router', icon: <FaReact />, level: 80 },
      { name: 'Axios', icon: <FaReact />, level: 85 }
    ]
  },
  {
    category: 'Backend Technologies',
    skills: [
      { name: 'Express JS', icon: <FaNodeJs />, level: 90 },
      { name: 'Node JS', icon: <FaNodeJs />, level: 75 },
      { name: 'Django', icon: <SiDjango />, level: 85 },
      { name: 'Django REST Framework', icon: <SiDjango />, level: 85 },
      { name: 'NestJS', icon: <SiNestjs />, level: 50 },
      { name: 'JWT', icon: <FaNodeJs />, level: 80 },
      { name: 'Stripe', icon: <FaNodeJs />, level: 90 },
      { name: 'Cron Jobs', icon: <MdSchedule />, level: 80 },
      { name: 'Real-time (Socket.io)', icon: <SiSocketdotio />, level: 60 },
    ]
  },
  {
    category: 'Databases & ORM',
    skills: [
      { name: 'MySQL', icon: <FaDatabase />, level: 85 },
      { name: 'MongoDB', icon: <DiMongodb />, level: 80 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75 },
      { name: 'Mongoose', icon: <SiMongoose />, level: 75 },
      { name: 'TypeORM', icon: <GiBirdMask />, level: 75 },
      { name: 'Redis (Cache)', icon: <SiRedis />, level: 65 },
    ]
  },
  {
    category: 'Deployment & Hosting',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 90 },
      { name: 'Docker', icon: <DiDocker />, level: 60 },
       { name: 'Linux (Ubuntu)', icon: <FaLinux />, level: 85 },
      { name: 'Vercel', icon: <SiVercel />, level: 70 },
      { name: 'Hoistinger VPS', icon: <hoisting />, level: 90 },
      { name: 'Nginx', icon: <SiNginx />, level: 60 },
      { name: 'cPanel', icon: <FaCpanel />, level: 50 },
     
    ]
  },
  // {
  //   category: "Operating Systems",
  //   skills: [
  //     { name: "Windows 10", icon: <FaLinux />, level: 95 },
  //     { name: "Linux (Ubuntu)", icon: <FaLinux />, level: 85 }
  //   ]
  // }
  {
    category: 'Familiar Tools & Technologies',
    skills: [
      { name: 'Microservices', icon: <FcServices />, level: 40 },
      { name: 'CI/CD (GitHub Actions)', icon: <FaGithub />, level: 85 },
      { name: 'RabbitMQ', icon: <SiRabbitmq />, level: 85 },
  
      
     
    ]
  }
];

export default function SkillComponent() {
  return (
    <section id='skill'>
      <span className='head'>My Skills</span>
      <div id='skills'>
        <div className='container'>
          <div className='skills-grid'>
            {skills.map((category, index) => (
              <motion.div
                key={index}
                className='skill-card'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className='skill-category'>{category.category}</h3>
                <ul className='skill-list'>
                  {category.skills.map((skill, idx) => (
                    <motion.li
                      key={idx}
                      className='skill-item'
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className='skill-name'>
                        <span className='skill-icon'>{skill.icon}</span> {skill.name}
                      </span>
                      <div className='skill-bar-container'>
                        <motion.div
                          className='skill-bar'
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
