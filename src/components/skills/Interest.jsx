import React from 'react';
import Slider from 'react-slick';
import './ServiceCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'Building responsive and high-performance websites.'
  },
  {
    title: 'API Integration',
    description: 'Integrating third-party APIs for enhanced functionality.'
  },
  {
    title: 'Frontend Development',
    description: 'Creating interactive and dynamic user interfaces.'
  },
  {
    title: 'Backend Development',
    description: 'Building robust and scalable backend services.'
  }
];

export default function ServiceCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true, // Center the active slide
    centerPadding: '15px', // Padding on each side of the center slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="services" className='out-service' >
      <span className="head">My Services</span>
      <div className="service-section">
        <Slider {...settings} className="service-slider">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
