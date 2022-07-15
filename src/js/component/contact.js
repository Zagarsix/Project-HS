import React from 'react';
import { NavLink,Link } from "react-router-dom";

const Contact = () => {
return<>
     <main className="flex-shrink-0">
        {/* Navigation*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <NavLink className="navbar-brand" to="/">
                    Start Bootstrap
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/pricing">
                                Pricing
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/faq">
                                FAQ
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownBlog"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Blog
                            </NavLink>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownBlog"
                            >
                                <li>
                                    <NavLink className="dropdown-item" to="/blog-home">
                                        Blog Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/blog-post">
                                        Blog Post
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownPortfolio"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Portfolio
                            </NavLink>
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownPortfolio"
                            >
                                <li>
                                    <NavLink className="dropdown-item" to="/portfolio-overview">
                                        Portfolio Overview
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="/portfolio-item">
                                        Portfolio Item
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    {/* Page content*/}
    <section className="py-5">
      <div className="container px-5">
        {/* Contact form*/}
        <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
          <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
              <i className="bi bi-envelope" />
            </div>
            <h1 className="fw-bolder">Get in touch</h1>
            <p className="lead fw-normal text-muted mb-0">
              We'd love to hear from you
            </p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              {/* * * * * * * * * * * * * * * **/}
              {/* * * SB Forms Contact Form * **/}
              {/* * * * * * * * * * * * * * * **/}
              {/* This form is pre-integrated with SB Forms.*/}
              {/* To make this form functional, sign up at*/}
              {/* https://startbootstrap.com/solution/contact-forms*/}
              {/* to get an API token!*/}
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* Name input*/}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Full name</label>
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
                  <label htmlFor="email">Email address</label>
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
                  <label htmlFor="phone">Phone number</label>
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
                  <label htmlFor="message">Message</label>
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
                    className="btn btn-primary btn-lg disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
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
  {/* Footer*/}
  <footer className="bg-dark py-4 mt-auto">
    <div className="container px-5">
      <div className="row align-items-center justify-content-between flex-column flex-sm-row">
        <div className="col-auto">
          <div className="small m-0 text-white">
            Copyright © Your Website 2022
          </div>
        </div>
        <div className="col-auto">
          <NavLink className="link-light small" to="#!">
            Privacy
          </NavLink>
          <span className="text-white mx-1">·</span>
          <NavLink className="link-light small" to="#!">
            Terms
          </NavLink>
          <span className="text-white mx-1">·</span>
          <NavLink className="link-light small" to="#!">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  </footer>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
  {/* * *                               SB Forms JS                               * **/}
  {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
</>

}

export default Contact;