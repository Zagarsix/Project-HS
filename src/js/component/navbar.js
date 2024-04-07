import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return <>{/* Navigation*/}
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <NavLink className="navbar-brand" to="/">
                    Logo HomeSchool
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/">
                                Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/nosotros">
                                Nosotros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/matriculas">
                                Matrículas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/blog">
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/contacto">
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;