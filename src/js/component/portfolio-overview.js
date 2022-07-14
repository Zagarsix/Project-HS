import { NavLink,Link } from "react-router-dom";

const PortfolioOverview = () => {
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Modern Business - Start Bootstrap Template</title>
  {/* Favicon*/}
  <link rel="icon" type="image/x-icon" to="assets/favicon.ico" />
  {/* Bootstrap icons*/}
  <link
    to="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  {/* Core theme CSS (includes Bootstrap)*/}
  <link to="css/styles.css" rel="stylesheet" />
  <main className="flex-shrink-0">
    {/* Navigation*/}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <NavLink className="navbar-brand" to="index.html">
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
              <NavLink className="nav-link" to="index.html">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about.html">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact.html">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="pricing.html">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="faq.html">
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
                  <NavLink className="dropdown-item" to="blog-home.html">
                    Blog Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="blog-post.html">
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
                  <NavLink className="dropdown-item" to="portfolio-overview.html">
                    Portfolio Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="portfolio-item.html">
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
          <h1 className="fw-bolder">Our Work</h1>
          <p className="lead fw-normal text-muted mb-0">Company portfolio</p>
        </div>
        <div className="row gx-5">
          <div className="col-lg-6">
            <div className="position-relative mb-5">
              <img
                className="img-fluid rounded-3 mb-3"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
              <NavLink
                className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                to="#!"
              >
                Project name
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative mb-5">
              <img
                className="img-fluid rounded-3 mb-3"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
              <NavLink
                className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                to="#!"
              >
                Project name
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative mb-5 mb-lg-0">
              <img
                className="img-fluid rounded-3 mb-3"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
              <NavLink
                className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                to="#!"
              >
                Project name
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                className="img-fluid rounded-3 mb-3"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
              <NavLink
                className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                to="#!"
              >
                Project name
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-light">
      <div className="container px-5 my-5">
        <h2 className="display-4 fw-bolder mb-4">
          Let's build something together
        </h2>
        <NavLink className="btn btn-lg btn-primary" to="#!">
          Contact us
        </NavLink>
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

export default PortfolioOverview;