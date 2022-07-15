import React from 'react';
import { NavLink,Link } from "react-router-dom";

const Faq = () => {
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
    {/* Page Content*/}
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bolder">Frequently Asked Questions</h1>
          <p className="lead fw-normal text-muted mb-0">How can we help you?</p>
        </div>
        <div className="row gx-5">
          <div className="col-xl-8">
            {/* FAQ Accordion 1*/}
            <h2 className="fw-bolder mb-3">Account &amp; Billing</h2>
            <div className="accordion mb-5" id="accordionExample">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse show"
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
            {/* FAQ Accordion 2*/}
            <h2 className="fw-bolder mb-3">Website Issues</h2>
            <div className="accordion mb-5 mb-xl-0" id="accordionExample2">
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Accordion Item #1
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse show"
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Accordion Item #2
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h3 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Accordion Item #3
                  </button>
                </h3>
                <div
                  className="accordion-collapse collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong>
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card border-0 bg-light mt-xl-5">
              <div className="card-body p-4 py-lg-5">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <div className="h6 fw-bolder">Have more questions?</div>
                    <p className="text-muted mb-4">
                      Contact us at
                      <br />
                      <NavLink to="#!">support@domain.com</NavLink>
                    </p>
                    <div className="h6 fw-bolder">Follow us</div>
                    <NavLink className="fs-5 px-2 link-dark" to="#!">
                      <i className="bi-twitter" />
                    </NavLink>
                    <NavLink className="fs-5 px-2 link-dark" to="#!">
                      <i className="bi-facebook" />
                    </NavLink>
                    <NavLink className="fs-5 px-2 link-dark" to="#!">
                      <i className="bi-linkedin" />
                    </NavLink>
                    <NavLink className="fs-5 px-2 link-dark" to="#!">
                      <i className="bi-youtube" />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
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
</>

}

export default Faq;