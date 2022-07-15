import React from 'react';
import { NavLink,Link } from "react-router-dom";

const PortfolioItem = () => {
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
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <h1 className="fw-bolder">Project Title</h1>
              <p className="lead fw-normal text-muted mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                similique, ducimus ut alias sit accusamus illum, asperiores
                deserunt dolorum quaerat qui! Ab, quisquam explicabo magni
                dolores unde beatae quam NavLink.
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          <div className="col-12">
            <img
              className="img-fluid rounded-3 mb-5"
              src="https://dummyimage.com/1300x700/343a40/6c757d"
              alt="..."
            />
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid rounded-3 mb-5"
              src="https://dummyimage.com/600x400/343a40/6c757d"
              alt="..."
            />
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid rounded-3 mb-5"
              src="https://dummyimage.com/600x400/343a40/6c757d"
              alt="..."
            />
          </div>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <p className="lead fw-normal text-muted">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                deserunt architecto enim eos accusantium fugit recusandae illo
                iste dignissimos possimus facere ducimus odit voluptatibus
                exercitationem, ex laudantium illum voluptatum corporis.
              </p>
              <NavLink className="text-decoration-none" to="#!">
                View project
                <i className="bi-arrow-right" />
              </NavLink>
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

export default PortfolioItem;