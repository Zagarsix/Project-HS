import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NotFound = () => {
return( <>
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
<h1>
    Page not found (404)
</h1>
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

</>
)
}


export default NotFound;