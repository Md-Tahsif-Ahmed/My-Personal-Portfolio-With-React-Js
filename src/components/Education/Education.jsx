import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}s
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Professional Experience
                      </h2>
                      <span style={{ fontWeight: 'bold' }}>Dream Diver IT Solution.(June2024-Present)</span>
                      <p>
                        I am currently working as a <b style={{ color: '#007acc' }}>Jr. Software Engineer</b> at{' '}
                        <a target='_blank' href='https://dreamdiver.nl/'>
                          <b style={{ color: '#007acc' }}>Dream Diver IT Solution</b>
                        </a>{' '}
                        <i>
                           where i am working based on client-specific requirements designed and developed a Bridal Diamond Website using MERN which
                           is authenticated with JWT. Also Working with ERP Project
                        </i>{' '}
                        and boosting my professional skills.
                      </p>
                      
                      <span style={{ fontWeight: 'bold' }}>Venture Solution Software Ltd.(December2022–August2023)</span>
                      <p>
                        I have worked as a <b style={{ color: '#007acc' }}>Jr. Software Engineer</b> at{' '}
                        <a target='_blank' href='https://www.linkedin.com/company/venturenxt/about/'>
                          <b style={{ color: '#007acc' }} >Venture Solution Software Ltd.</b>
                        </a>{' '}
                        <i>
                           where i have worked  Designed and developed a web-based fleet management system using Django.
                           Incorporated client-specific requirements, ensuring high performance, scalability, and user-friendly features
                           using HTML, CSS, and JavaScript.
                        </i>{' '}
                        and boosting my professional skills.
                      </p>
                      <span style={{ fontWeight: 'bold' }}>LeetCode Problem Solver</span>
                      <p> 
                        <i>
                      Solved <b style={{ color: '#007acc' }}>100 plus</b> coding problems using python on LeetCode, showcasing proficiency including arrays,
                      strings, linked list etc. and algorithms.
                        </i> 
                        </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Education
                      </h2>
                      <p>
                        I have completed my graduation in CSE (Computer Science and Engineering)
                        from <a href='https://www.ewubd.edu/'><b style={{ color: '#007acc'  }}>East West University</b></a> 
                      </p>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                   
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
