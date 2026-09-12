import React from 'react';
import Slider from 'react-slick';
import './ServiceCard.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const services = [
  {
    title: 'Full-Stack Development',
    description: 'Building scalable applications with React, Next.js, Redux, Node.js, and Django.'
  },
  {
    title: 'Backend & APIs',
    description: 'Designing REST APIs, business logic, authentication, and real-time features.'
  },
  {
    title: 'Database Engineering',
    description: 'Optimizing PostgreSQL, MongoDB, MySQL, Redis, and ORM-driven data models.'
  },
  {
    title: 'Cloud & Architecture',
    description: 'Working with Docker, microservices, RabbitMQ, CI/CD, and deployment workflows.'
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
      <span className="head">Areas of Interest</span>
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
