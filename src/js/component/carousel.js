import React from 'react';

import url1 from "../../img/Claudio.png"

const testimonials = [
  { name: 'Juan Pérez', message: 'Este colegio ha cambiado la vida de mis hijos para mejor.', role: 'Padre de familia', image: url1},
  { name: 'María Gómez', message: 'El enfoque personalizado ha permitido que mi hijo aprenda a su propio ritmo.', role: 'Madre de familia' },
  { name: 'Luis Rodríguez', message: 'Los profesores están siempre disponibles y son muy profesionales.', role: 'Padre de familia' },
  { name: 'Ana López', message: 'Las clases virtuales son interactivas y muy bien estructuradas.', role: 'Madre de familia' },
  { name: 'Carlos Fernández', message: 'Mis hijos disfrutan aprendiendo desde casa con los recursos que proporciona el colegio.', role: 'Padre de familia' },
  { name: 'Sofía Martínez', message: 'El programa educativo es excelente y se adapta a las necesidades de cada estudiante.', role: 'Madre de familia' }
];

const TestimonialCarousel = () => {
  // Split testimonials into groups of 3
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 3));
  }

  return (
    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {groupedTestimonials.map((group, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex flex-wrap justify-content-around">
              {group.map((testimonial, idx) => (
                <div key={idx} className="testimonial-card p-1 m-2">
                  <p className='mb-3'>{testimonial.message}</p>
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-circle mb-3"/>
                  <p><strong>{testimonial.name}</strong></p>
                  <p>{testimonial.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default TestimonialCarousel;