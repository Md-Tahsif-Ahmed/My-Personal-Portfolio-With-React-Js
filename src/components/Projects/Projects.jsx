import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';
import classes from './Projects.module.css';
import blog from "../images/blog.PNG";
import bridal from "../images/bridal.PNG";
import github from "../images/github.png"; // Import the GitHub icon image

// Web projects
const webItem = [
  {
    link: 'https://diamondbridal.netlify.app/',
    title: 'Special Bridal Diamond',
    techStack: 'Tech Stack: React JS, MUI, Express jS',
    desc: 'Profilee is an open source profile link bio page builder',
    image: bridal,
    color: '#0FFFFF',
    githubLink: 'https://github.com/Md-Tahsif-Ahmed/Bridal-frontend'
  },
  {
    link: 'https://needy-tah.surge.sh/',
    title: 'Proramming Blog',
    techStack: 'Useful repo for most common frontend challenges',
    desc: 'Technology used: React Js, Tailwind CSS, Context API',
    image: blog,
    color: '#E5E483',
    githubLink: 'https://github.com/Md-Tahsif-Ahmed/Programming-Blog-With-React-JS-Client'
  },
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45} key={cardItem.title}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank' rel='noopener noreferrer'>
            <img src={cardItem.image} className={classes.card__image} alt={cardItem.title} />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} alt='GitHub' />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>My PROJECTS</span>
    
      <ul className={classes.cards}>
        {webItem.map(getProjectCard)}
      </ul>
      {/* </ScrollAnimation> */}
    </div>
  );
}
