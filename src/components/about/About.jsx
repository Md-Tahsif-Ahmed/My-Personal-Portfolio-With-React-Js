import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
        <span className={classes.head}>Who Am I?</span>
   
        <div className={classes.About}>
  <p>
    Hi! My name is <b style={{ color: '#007acc' }}>Md. Tahsif Ahmed</b>. I am a <b style={{ color: '#007acc' }}>Full-Stack Software Engineer</b> with 2.8+ years of experience building scalable web applications, enterprise solutions, and financial platforms. I currently work at <b style={{ color: '#007acc' }}>Spectrum Software & Consulting (Pvt.) Ltd.</b> as a <b style={{ color: '#007acc' }}>Software Engineer</b>.
  </p>
  <p className={classes.br}>
    My work spans JavaScript, TypeScript, and Python ecosystems, including React, Next.js, Redux, Node.js, Django, and PostgreSQL. I enjoy building reliable REST APIs, real-time features, and cloud-ready applications, with a focus on clean, modular code, database optimization, and practical problem-solving.
  </p>
</div>

        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
