import { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';

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
                      <span style={{ fontWeight: 'bold' }}>Spectrum Software & Consulting (Pvt.) Ltd. (Apr 2026 - Present)</span>
                      <p>
                        I am working as a <b style={{ color: '#007acc' }}>Software Engineer</b>, developing and maintaining a Supply Chain Finance platform with <b style={{ color: '#007acc' }}>Next.js, Redux, and TypeScript</b>.
                        <i>
                          I build high-performance APIs with Node.js, Express.js, and PostgreSQL, and work in a Docker-based microservices architecture using RabbitMQ and Redis.
                        </i>
                      </p>
                      <span style={{ fontWeight: 'bold' }}>Finixcode (Jan 2025 - Mar 2026)</span>
                      <p>
                        I worked as a <b style={{ color: '#007acc' }}>Software Engineer</b>, building TutorSplan and a business management system with <b style={{ color: '#007acc' }}>Next.js, NestJS, and PostgreSQL</b>.
                        <i>
                          I implemented RBAC, optimized APIs, built reusable UI components, and migrated legacy MySQL production data to PostgreSQL with zero data loss.
                        </i>
                      </p>
                      <span style={{ fontWeight: 'bold' }}>Dream Diver NL (Jan 2024 - Dec 2024)</span>
                      <p>
                        <i>
                          Built a courier service system with React, Node.js, Express.js, and MongoDB, including real-time parcel tracking, bulk data upload, and database indexing. I also contributed to backend automation for an enterprise ERP project using Python and Django.
                        </i>
                      </p>
                      <span style={{ fontWeight: 'bold' }}>LeetCode Problem Solver</span>
                      <p><i>Solved <b style={{ color: '#007acc' }}>117+</b> algorithmic problems using Python, covering core data structures and algorithms.</i></p>
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
                        Bachelor of Science in <b style={{ color: '#007acc' }}>Computer Science & Engineering</b> from <a href='https://www.ewubd.edu/' target='_blank' rel='noreferrer'><b style={{ color: '#007acc'  }}>East West University</b></a>.
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
