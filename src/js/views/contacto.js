import React from 'react';
import { NavLink } from "react-router-dom";
import contact from "../../img/contact-bg.jpg";

const Contacto = () => {
return<>
     <main className="flex-shrink-0">
      {/* Header*/}
    <header className="masthead" style={{ backgroundImage: `url(${contact})` }}>
      <div className="container position-relative px-5 px-lg-3">
        <div className="row gx-4 gx-lg-5 justify-content-around">
          <div className="col-md-12 col-lg-11 col-xl-10">
            <div className="text-center my-2">
              <h1 className="site-heading fw-bolder mb-1">
                Más cerca de ti
              </h1>
              <p className="lead-header fw-normal text-black mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                est, ut esse NavLink labore aliquam beatae expedita. Blanditiis impedit
                numquam libero molestiae et fugit cupiditate, quibusdam expedita,
                maiores eaque quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Page content*/}
    <section className="py-5">
      <div className="container px-5">
        {/* Contact form*/}
        <div className="bg-light rounded-4 py-5 px-4 px-md-5 mb-5" id="contacto">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              {/* <i className="bi bi-envelope" /> */}
            </div>
            <h1 className="fw-bolder">Contáctanos</h1>
            <p className="lead fw-normal text-muted mb-0">
              Nos encantaría escucharte
            </p>
          </div>
          <div className="row gx-5 justify-content-center" >
            <div className="col-lg-8 col-xl-6">
              {/* * * * * * * * * * * * * * * **/}
              {/* * * SB Forms Contact Form * **/}
              {/* * * * * * * * * * * * * * * **/}
              {/* This form is pre-integrated with SB Forms.*/}
              {/* To make this form functional, sign up at*/}
              {/* https://startbootstrap.com/solution/contact-forms*/}
              {/* to get an API token!*/}
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
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
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
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
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
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
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
                    defaultValue={""}
                  />
                  <label htmlFor="message">Mensaje</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
                {/* Submit success message*/}
                {/**/}
                {/* This is what your users will see when the form*/}
                {/* has successfully submitted*/}
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
                {/**/}
                {/* This is what your users will see when there is*/}
                {/* an error submitting the form*/}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/* Submit Button*/}
                <div className="d-grid">
                  <button
                    className="btn btn-lg"
                    id="submitButton"
                    type="submit"
                    style={{background:"yellow"}}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Contact cards*/}
        <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5">
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-chat-dots" />
            </div>
            <div className="h5 mb-2">Chat with us</div>
            <p className="text-muted mb-0">
              Chat live with one of our support specialists.
            </p>
          </div>
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-people" />
            </div>
            <div className="h5">Ask the community</div>
            <p className="text-muted mb-0">
              Explore our community forums and communicate with other users.
            </p>
          </div>
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-question-circle" />
            </div>
            <div className="h5">Support center</div>
            <p className="text-muted mb-0">
              Browse FAQ's and support articles to find solutions.
            </p>
          </div>
          <div className="col">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-telephone" />
            </div>
            <div className="h5">Call us</div>
            <p className="text-muted mb-0">
              Call us during normal business hours at (555) 892-9403.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
  {/* * *                               SB Forms JS                               * **/}
  {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
</>

}

export default Contacto;