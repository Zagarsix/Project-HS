import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

import logoHS from "../../img/Logos-cva/logo-t-light.png";

const Navbar = ({ onMenuToggle }) => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 992);

    const handleNavCollapse = () => {
        if (isMobileView) {
            const newNavCollapsed = !isNavCollapsed;
            setIsNavCollapsed(newNavCollapsed);
            onMenuToggle(newNavCollapsed);
        }
    };

    const handleLogoClick = () => {
        setIsNavCollapsed(true);
        if (isMobileView) {
            onMenuToggle(true);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 992;
            setIsMobileView(isMobile);
            if (!isMobile) {
                setIsNavCollapsed(true);
                onMenuToggle(true);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [onMenuToggle]);

    const navCollapseClass = isNavCollapsed ? 'collapse' : '';

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <NavLink className="navbar-brand" to="/" onClick={handleLogoClick}>
                        <img className="logoBrand mx-3" src={logoHS} alt="logo-brand" width="192" height="80" />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded={!isNavCollapsed ? true : false}
                        aria-label="Toggle navigation"
                        onClick={handleNavCollapse}
                    >
                        {isNavCollapsed ? (
                            <>
                                <i className="fas fa-bars fa-2xl" />
                            </>
                        ) : (
                            <>
                                <i className="fas fa-times fa-2xl" />
                            </>
                        )}
                    </button>
                    <div className={`${navCollapseClass} navbar-collapse`} id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            {/* <li className="nav-item">
                                <NavLink className="nav-link px-lg-3 py-3 py-lg-4" to="/" onClick={handleNavCollapse}>
                                    Inicio
                                </NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-2 py-3 py-lg-4" to="/nosotros" onClick={handleNavCollapse}>
                                    Nosotros
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-2 py-3 py-lg-4" to="/matriculas" onClick={handleNavCollapse}>
                                    Matrículas
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-2 py-3 py-lg-4" to="/blog" onClick={handleNavCollapse}>
                                    Soporte
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-2 py-3 py-lg-4" to="/contacto" onClick={handleNavCollapse}>
                                    Contacto
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link px-lg-3 py-3 py-lg-4" onClick={handleNavCollapse}>
                                    <button className='btn btn-xl'><a className='text-white' target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@colegio_virtual_alianza">AULA VIRTUAL</a></button>
                                </a> */}
                                <a className="btn px-lg-2 py-3 py-lg-4" id="buttonAula" onClick={handleLogoClick} rel='noopener noreferrer' href="#!">Aula Virtual</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
