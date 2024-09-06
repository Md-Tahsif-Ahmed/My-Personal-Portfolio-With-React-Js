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
    Hi! My name is <b style={{ color: '#007acc' }}>Md. Tahsif Ahmed</b>. I am a passionate developer with experience in{' '}
    <b style={{ color: '#007acc' }}>Python Django</b>, <b style={{ color: '#007acc' }}>React JS</b> & <b style={{ color: '#007acc' }}>MERN Stack</b> development. 
    I'm currently working at{' '}
    <b>
      <a className={classes.link} style={{ color: '#007acc' }} target='_blank' href='https://dreamdiver.nl/'>
        Dream Diver IT Solution
      </a>
    </b>{' '}
    as a <b style={{ color: '#007acc' }}>Jr. Software Engineer</b>. I am highly interested in developing new things that excite me.
  </p>
  <p className={classes.br}>
    I love exploring new technologies, and as a practitioner, I like to stay on top of the latest trends. I try to leave every line of code I write more readable, accessible, and modular. My problem-solving mindset and active GitHub profile showcase my commitment to innovative and collaborative coding.
  </p>
</div>

        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
