import React from 'react';
import { NavLink } from "react-router-dom";

import contact from "../../img/contact-center2.jpg";
import social from "../../img/social-media.png"

const Contacto = () => {
  return <>
    <main className="flex-shrink-0">
      {/* Header*/}
      <header className="masthead" style={{ backgroundImage: `url(${contact})` }}>
        <div className="container position-relative px-5 px-lg-3">
          <div className="row gx-4 gx-lg-5 justify-content-around">
            <div className="col-md-12 col-lg-11 col-xl-10">
              <div className="text-center my-2">
                <h1 className="site-heading fw-bolder mb-1">
                  <span>Más cerca</span> <span style={{ color: "#ff6600" }}> de ti</span>
                </h1>
                <p className="lead-header mb-5">
                  Si tienes dudas o consultas, contáctanos por cualquiera de nuestros medios de atención. <br></br>
                  Horario de atención: Lunes a Viernes de 09:00 a  18:00 hrs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Page content*/}
      <section className="py-5">
        <div className="container px-5">
          <div className='row justify-content-center'>
            {/* Contact form*/}
            <div className="bg-light rounded-4 py-5 px-4 px-md-5 mb-5 col-lg-8 col-xl-6" id="contacto">
              <div className="text-start mb-5">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  {/* <i className="bi bi-envelope" /> */}
                </div>
                <h1 className="fw-bolder" style={{ color: "#ff8800" }}>Contáctanos</h1>
                <p className="lead fw-normal text-muted mb-0">
                  Nos encantaría escucharte
                </p>
              </div>
              <div className="row gx-5 justify-content-start" >
                <div className="content-header">
                  <form id="contactForm" data-sb-form-api-token="API_TOKEN" >
                    {/* Name input*/}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter your name..."
                        data-sb-validations="required"
                      />
                      <label htmlFor="name">Nombre completo</label>
                      <div className="invalid-feedback"
                        data-sb-feedback="name:required">
                        A name is required.
                      </div>
                    </div>
                    {/* Email address input*/}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        data-sb-validations="required,email"
                      />
                      <label htmlFor="email">Email</label>
                      <div className="invalid-feedback"
                        data-sb-feedback="email:required">
                        An email is required.
                      </div>
                      <div className="invalid-feedback"
                        data-sb-feedback="email:email">
                        Email is not valid.
                      </div>
                    </div>
                    {/* Phone number input*/}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        data-sb-validations="required"
                      />
                      <label htmlFor="phone">Número de contacto</label>
                      <div className="invalid-feedback"
                        data-sb-feedback="phone:required">
                        A phone number is required.
                      </div>
                    </div>
                    {/* Message input*/}
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        type="text"
                        placeholder="Enter your message here..."
                        style={{ height: "10rem" }}
                        data-sb-validations="required"
                      // defaultValue={""}
                      />
                      <label htmlFor="message">Mensaje</label>
                      <div className="invalid-feedback"
                        data-sb-feedback="message:required">
                        A message is required.
                      </div>
                    </div>
                    {/* Submit success message*/}
                    <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        To activate this form, sign up at
                        <br />
                        <NavLink to="https://startbootstrap.com/solution/contact-forms">
                          https://startbootstrap.com/solution/contact-forms
                        </NavLink>
                      </div>
                    </div>
                    {/* Submit error message*/}
                    <div className="d-none" id="submitErrorMessage">
                      <div className="text-center text-danger mb-3">
                        Error sending message!
                      </div>
                    </div>
                    {/* Submit Button*/}
                    <div className="d-grid">
                      <button className="btn btn-lg"
                        id="submitButton"
                        type="submit">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Illustration*/}
            <div className='col-lg-8 col-xl-6 mb-5 py-5'>
              <img
                className="img-fluid mb-2 px-2"
                width="500"
                height="500"
                src={social}
                alt="ilustración social media"
              />
            </div>
          </div>
        </div>
        {/* Contact cards*/}
        <div className="container px-5">
          <div className="row gx-5 px-md-5 px-4 row-cols-2 row-cols-lg-4 py-5">
            <div className="col mb-5">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-chat-dots px-1 mx-1" />
              </div>
              <div className="h5 mb-2">Escríbenos</div>
              <p className="text-muted mb-0">
                Chatea en vivo con uno de nuestros especialistas del área de soporte.
              </p>
            </div>
            <div className="col mb-5">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-telephone px-1 mx-1" />
              </div>
              <div className="h5">Ó puedes llamarnos</div>
              <p className="text-muted mb-0">
                Llámanos de lunes a viernes, entre 09:00 y 18:00 hrs. Al +569 28484497.
              </p>
            </div>
            <div className="col">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-people px-1 mx-1" />
              </div>
              <div className="h5">Pregunta a la comunidad</div>
              <p className="text-muted mb-0">
                Explora los foros de nuestra comunidad y comunícate con otros usuarios.
              </p>
            </div>
            <div className="col">
              <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                <i className="bi bi-question-circle px-1 mx-1" />
              </div>
              <div className="h5">Centro de apoyo</div>
              <p className="text-muted mb-0">
                Explora la sección de preguntas frecuentes y encuentra la solución a tus dudas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main >
  </>
}

export default Contacto;