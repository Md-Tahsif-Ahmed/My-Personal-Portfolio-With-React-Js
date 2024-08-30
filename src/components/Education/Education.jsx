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
          duration={2}
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
                      <span>Dream Diver Software Ltd.(June2024-Present)</span>
                      <p>
                        I am currently working as a <b>Jr. Software Engineer</b> at{' '}
                        <a target='_blank' href=''>
                          <b>Dream Diver Software Ltd.</b>
                        </a>{' '}
                        <i>
                           where i am working based on client-specific requirements designed and developed a Bridal Diamond Website using MERN which
                           is authenticated with JWT. Also Working with ERP Project
                        </i>{' '}
                        and boosting my professional skills.
                      </p>
                      
                      <span>Venture Solution Software Ltd.(December2022–June2023)</span>
                      <p>
                        I have worked as a <b>Jr. Software Engineer</b> at{' '}
                        <a target='_blank' href=''>
                          <b>Venture Solution Software Ltd.</b>
                        </a>{' '}
                        <i>
                           where i have worked  Designed and developed a web-based fleet management system using Django.
                           Incorporated client-specific requirements, ensuring high performance, scalability, and user-friendly features
                           using HTML, CSS, and JavaScript.
                        </i>{' '}
                        and boosting my professional skills.
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
                        from <a href='https://www.ewubd.edu/'>East West University</a> with 3.11 CGPA
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
