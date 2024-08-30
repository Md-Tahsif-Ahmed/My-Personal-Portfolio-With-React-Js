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
            Hi! My name is <b>Md. Tahsif Ahmed</b>. I am a passionate developer having experience in{' '}
            <b>Python Django</b>, <b>React JS </b>& <b>MERN Stack</b> development.
            I'm currently working at{' '}
            <b>
              <a className={classes.link} target='_blank' href=''>
                Drea Diver Software Ltd.
              </a>
            </b>{' '}
            as a <b>Jr. Software Developer Engineer.</b> I am much interested in developing new things
            which excite me a lot.
          </p>
          <p className={classes.br}>
            I love exploring new technologies and being a practitioner, I like to stay on top of
            latest trends. I try to leave every line of code I write more readable, accessible, and
            modular. My problem-solving mindset and active GitHub profile showcase my commitment to
            innovative and collaborative coding.
          </p>
        </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
