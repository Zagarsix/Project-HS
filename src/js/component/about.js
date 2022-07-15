import React from 'react';
import { NavLink, Link} from "react-router-dom";

const About = () => {
return <>
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
        {/* Header*/}
        <header className="py-5">
            <div className="container px-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xxl-6">
                        <div className="text-center my-5">
                            <h1 className="fw-bolder mb-3">
                                Our mission is to make building websites easier for everyone.
                            </h1>
                            <p className="lead fw-normal text-muted mb-4">
                                Start Bootstrap was built on the idea that quality, functional
                                website templates and themes should be available to everyone.
                                Use our open source, free products, or support us by purchasing
                                one of our premium products or services.
                            </p>
                            <NavLink className="btn btn-primary btn-lg" to="#scroll-target">
                                Read our story
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* About section one*/}
        <section className="py-5 bg-light" id="scroll-target">
            <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6">
                        <img
                            className="img-fluid rounded mb-5 mb-lg-0"
                            src="https://dummyimage.com/600x400/343a40/6c757d"
                            alt="..."
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fw-bolder">Our founding</h2>
                        <p className="lead fw-normal text-muted mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                            est, ut esse NavLink labore aliquam beatae expedita. Blanditiis impedit
                            numquam libero molestiae et fugit cupiditate, quibusdam expedita,
                            maiores eaque quisquam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* About section two*/}
        <section className="py-5">
            <div className="container px-5 my-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-6 order-first order-lg-last">
                        <img
                            className="img-fluid rounded mb-5 mb-lg-0"
                            src="https://dummyimage.com/600x400/343a40/6c757d"
                            alt="..."
                        />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="fw-bolder">Growth &amp; beyond</h2>
                        <p className="lead fw-normal text-muted mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                            est, ut esse NavLink labore aliquam beatae expedita. Blanditiis impedit
                            numquam libero molestiae et fugit cupiditate, quibusdam expedita,
                            maiores eaque quisquam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* Team members section*/}
        <section className="py-5 bg-light">
            <div className="container px-5 my-5">
                <div className="text-center">
                    <h2 className="fw-bolder">Our team</h2>
                    <p className="lead fw-normal text-muted mb-5">
                        Dedicated to quality and your success
                    </p>
                </div>
                <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5 mb-5 mb-xl-0">
                        <div className="text-center">
                            <img
                                className="img-fluid rounded-circle mb-4 px-4"
                                src="https://dummyimage.com/150x150/ced4da/6c757d"
                                alt="..."
                            />
                            <h5 className="fw-bolder">Ibbie Eckart</h5>
                            <div className="fst-italic text-muted">Founder &amp; CEO</div>
                        </div>
                    </div>
                    <div className="col mb-5 mb-5 mb-xl-0">
                        <div className="text-center">
                            <img
                                className="img-fluid rounded-circle mb-4 px-4"
                                src="https://dummyimage.com/150x150/ced4da/6c757d"
                                alt="..."
                            />
                            <h5 className="fw-bolder">Arden Vasek</h5>
                            <div className="fst-italic text-muted">CFO</div>
                        </div>
                    </div>
                    <div className="col mb-5 mb-5 mb-sm-0">
                        <div className="text-center">
                            <img
                                className="img-fluid rounded-circle mb-4 px-4"
                                src="https://dummyimage.com/150x150/ced4da/6c757d"
                                alt="..."
                            />
                            <h5 className="fw-bolder">Toribio Nerthus</h5>
                            <div className="fst-italic text-muted">Operations Manager</div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="text-center">
                            <img
                                className="img-fluid rounded-circle mb-4 px-4"
                                src="https://dummyimage.com/150x150/ced4da/6c757d"
                                alt="..."
                            />
                            <h5 className="fw-bolder">Malvina Cilla</h5>
                            <div className="fst-italic text-muted">CTO</div>
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

export default About;