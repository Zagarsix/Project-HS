import React from 'react';
import { NavLink,Link } from "react-router-dom";

const Pricing = () => {
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
    {/* Pricing section*/}
    <section className="bg-light py-5">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bolder">Pay as you grow</h1>
          <p className="lead fw-normal text-muted mb-0">
            With our no hassle pricing plans
          </p>
        </div>
        <div className="row gx-5 justify-content-center">
          {/* Pricing card free*/}
          <div className="col-lg-6 col-xl-4">
            <div className="card mb-5 mb-xl-0">
              <div className="card-body p-5">
                <div className="small text-uppercase fw-bold text-muted">
                  Free
                </div>
                <div className="mb-3">
                  <span className="display-4 fw-bold">$0</span>
                  <span className="text-muted">/ mo.</span>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    <strong>1 users</strong>
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    5GB storage
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Unlimited public projects
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Community access
                  </li>
                  <li className="mb-2 text-muted">
                    <i className="bi bi-x" />
                    Unlimited private projects
                  </li>
                  <li className="mb-2 text-muted">
                    <i className="bi bi-x" />
                    Dedicated support
                  </li>
                  <li className="mb-2 text-muted">
                    <i className="bi bi-x" />
                    Free linked domain
                  </li>
                  <li className="text-muted">
                    <i className="bi bi-x" />
                    Monthly status reports
                  </li>
                </ul>
                <div className="d-grid">
                  <NavLink className="btn btn-outline-primary" to="#!">
                    Choose plan
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing card pro*/}
          <div className="col-lg-6 col-xl-4">
            <div className="card mb-5 mb-xl-0">
              <div className="card-body p-5">
                <div className="small text-uppercase fw-bold">
                  <i className="bi bi-star-fill text-warning" />
                  Pro
                </div>
                <div className="mb-3">
                  <span className="display-4 fw-bold">$9</span>
                  <span className="text-muted">/ mo.</span>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    <strong>5 users</strong>
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    5GB storage
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Unlimited public projects
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Community access
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Unlimited private projects
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Dedicated support
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Free linked domain
                  </li>
                  <li className="text-muted">
                    <i className="bi bi-x" />
                    Monthly status reports
                  </li>
                </ul>
                <div className="d-grid">
                  <NavLink className="btn btn-primary" to="#!">
                    Choose plan
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* Pricing card enterprise*/}
          <div className="col-lg-6 col-xl-4">
            <div className="card">
              <div className="card-body p-5">
                <div className="small text-uppercase fw-bold text-muted">
                  Enterprise
                </div>
                <div className="mb-3">
                  <span className="display-4 fw-bold">$49</span>
                  <span className="text-muted">/ mo.</span>
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    <strong>Unlimited users</strong>
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    5GB storage
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Unlimited public projects
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Community access
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Unlimited private projects
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    Dedicated support
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-primary" />
                    <strong>Unlimited</strong>
                    linked domains
                  </li>
                  <li className="text-muted">
                    <i className="bi bi-check text-primary" />
                    Monthly status reports
                  </li>
                </ul>
                <div className="d-grid">
                  <NavLink className="btn btn-outline-primary" to="#!">
                    Choose plan
                  </NavLink>
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

export default Pricing;