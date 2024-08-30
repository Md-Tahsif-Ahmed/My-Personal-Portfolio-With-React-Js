import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import Hello from '../images/3.jpg';
import Pencil from '../images/2.jpg';
import { motion } from 'framer-motion';

export default function CarouselImage() {
  return (
    <div id='start'>
      <Carousel
        dynamicHeight
        infiniteLoop={true}
        interval={6000}
        useKeyboardArrows={true}
        transitionTime={1700}
        emulateTouch
        showArrows={false}
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img className={classes.image} src={Hello} alt='myImage' />
          <div className={classes.h1}>
            I'm Md.Tahsif Ahmed
            <motion.h1
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }} // Define the scale values for the bouncing effect
              transition={{ duration: 3.3, repeat: Infinity }} // Set the duration and repeat
              whileHover={{
                scale: 1.1
              }}
            >
              <a
                href='https://drive.google.com/file/d/1f-ZAbusL-Vb85GN6BIK98-L-7JE_8KGm/view'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </motion.h1>
          </div>
        </div>
        <div>
          <img className={classes.image} src={Pencil} alt='myImage' />
          <div className={classes.h2}>
            <h1>I love </h1>
            <h1>THINGS!!</h1>
            <a
              href='https://github.com/Md-Tahsif-Ahmed'
              rel='opener noreferrer'
              target='_blank'
            >
              VIEW Web PROJECTS <GoProject />
            </a>
            {/* <div className={classes.secondButton}>
              <a
                href='https://github.com/Md-Tahsif-Ahmed'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW ANDROID PROJECTS <GoProject />
              </a>
            </div> */}
          </div>
        </div>
      </Carousel>
    </div>
  );
}
