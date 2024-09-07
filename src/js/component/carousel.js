import React, { useState, useEffect } from 'react';

import dad1 from "../../img/testimonials/dad1.jpg";
import dad2 from "../../img/testimonials/dad2.jpg";
import dad3 from "../../img/testimonials/dad3.jpg";
import mom1 from "../../img/testimonials/mom1.jpg";
import mom2 from "../../img/testimonials/mom2.jpg";
import mom3 from "../../img/testimonials/mom3.jpg";

const testimonials = [
  { name: 'Juan Inostroza', message: 'Sinceramente, este colegio ha cambiado la vida de mis hijos para mejor.', role: 'Padre de familia', image: dad1 },
  { name: 'María Gómez', message: 'El enfoque personalizado ha permitido que mi hijo aprenda a su propio ritmo.', role: 'Madre de familia', image: mom1 },
  { name: 'Luis Rodríguez', message: 'Nada que decir, los profes son muy profesionales y siempre están disponibles.', role: 'Padre de familia', image: dad2 },
  { name: 'Ana López', message: 'Las clases virtuales son interactivas y muy bien estructuradas.', role: 'Madre de familia', image: mom2 },
  { name: 'Carlos Fernández', message: 'Mis hijos disfrutan aprendiendo desde la casa con los recursos que entrega el colegio.', role: 'Padre de familia', image: dad3 },
  { name: 'Sofía Martínez', message: 'El programa educativo es excelente y se adapta a las necesidades de cada estudiante.', role: 'Madre de familia', image: mom3 }
];

const TestimonialCarousel = () => {
  const [groupedTestimonials, setGroupedTestimonials] = useState([]);

  // Detectar el tamaño de la pantalla y agrupar los testimonios en consecuencia
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 576;
      const groups = [];
      const groupSize = isMobile ? 1 : 3; // Mostrar 1 tarjeta en móvil y 3 en escritorio
      
      for (let i = 0; i < testimonials.length; i += groupSize) {
        groups.push(testimonials.slice(i, i + groupSize));
      }

      setGroupedTestimonials(groups);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {groupedTestimonials.map((group, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex flex-wrap justify-content-center">
              {group.map((testimonial, idx) => (
                <div key={idx} className="testimonial-card px-1 mx-1">
                  <p className='fs-4 mb-5 fst-italic'>"{testimonial.message}"</p>
                  <div className='fs-6 d-flex align-item-center justify-content-center'>
                    <img src={testimonial.image} alt={testimonial.name} className="rounded-circle mb-1" />
                  </div>
                  <div className='fw-bold' style={{fontSize:"1rem"}}>{testimonial.name}
                    <span className='text-primary mx-1'>/{testimonial.role}</span>
                  </div>
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