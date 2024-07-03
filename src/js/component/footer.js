import React from 'react';
import { NavLink } from "react-router-dom";
import metroLogo from "../../img/metroLogo.png";
import logoDark from "../../img/logo-fondo-oscuro.png"

const Footer = () => {
    return (
        <footer className="footer mt-auto">
            <div className="container p-1">
                <div className="row align-items-center justify-content-between my-5 p-1">
                    {/*Logo y lema*/}
                    <div className='col-12 col-md-5 text-start p-3 mb-4 order-1 order-md-1'>
                        <img className="mx-1" src={logoDark} alt="logo-brand" width="270" height="120" />
                        <p className='lema'> «...Yo hago un pacto con ustedes y les prometo que mi Espíritu y las enseñanzas que les he dado, no se apartarán jamás de ustedes ni de sus hijos...»
                        </p>
                    </div>
                    {/*Contacto*/}
                    <div className='col-12 col-md-4 text-start p-4 mb-5 order-2 order-md-3'>
                        <h4>Contacto</h4>
                        <p>- cvalianza@gmail.com</p>
                        <p>- +569 28484497</p>
                        <p>- Providencia, Santiago, Chile.</p>
                        <p><img className="mx-0" src={metroLogo} alt="Metro Logo" width="30" height="25" /> Metro Pedro de Valdivia</p>
                        <NavLink className="link-light small" to="#!">
                            Política de Privacidad
                        </NavLink>
                        <span className="text-white mx-1">·</span>
                        <NavLink className="link-light small" to="#!">
                            Términos y condiciones
                        </NavLink>
                    </div>
                    {/*Redes sociales*/}
                    <div className='col-12 col-md-3 text-center p-1 mb-4 mt-4 order-3 order-md-2'>
                        <span className='m-2'>
                            <a className='text-white' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com">
                                <i className="fa-brands fa-square-facebook fa-fade fa-2xl" style={{ color: "blue" }}></i>
                            </a>
                        </span>
                        <span className='m-2'>
                            <a className='text-white' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                                <i className="fa-brands fa-square-instagram fa-fade fa-2xl" style={{ color: "purple" }}></i>
                            </a>
                        </span>
                        <span className='m-2'>
                            <a className='text-white' target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/">
                                <i className="fa-brands fa-square-twitter fa-fade fa-2xl" style={{ color: "#0d6efd" }}></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div className='down col-12 text-center p-2'>
                    <p>© Colegio Virtual Alianza 2024. Todos los derechos reservados.</p>
                    <span className='text-white'>Developed with <i className="fa fa-heart text-danger" /> by{" "}
                        <a className="developer" target="_blank" href="https://github.com/Zagarsix">Zagarsix</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
