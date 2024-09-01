import React from 'react';
import { NavLink } from "react-router-dom";
import metroLogo from "../../img/metroLogo.png";
import logoDark from "../../img/logo-cva-dark.png"

const Footer = () => {
    return (
        <footer className="footer mt-auto">
            <div className="container p-1">
                <div className="row align-items-center justify-content-between my-5 p-1">
                    {/*Logo y lema*/}
                    <div className='col-12 col-md-4 text-start p-1 mb-4 order-1 order-md-1'>
                        <img className="mx-1" src={logoDark} alt="logo-brand" width="270" height="120" />
                        <p className='lema'> «...Yo hago un pacto con ustedes y les prometo que mi Espíritu y las enseñanzas que les he dado, no se apartarán jamás de ustedes ni de sus hijos...»
                        </p>
                    </div>
                    {/*Contacto*/}
                    <div className='col-12 col-md-4 text-start p-1 mb-4 order-2 order-md-3'>
                        <h4 className='mb-3'>Contacto</h4>
                        <p>Providencia, Santiago, Chile.</p>
                        <p>Metro Pedro de Valdivia</p>
                        <a className='text-white' target="_blank" rel="noopener noreferrer" href="mailto:colegiovirtualalianza.adm@gmail.com"><strong>Correo:</strong> <span>colegiovirtualalianza.adm@gmail.com</span></a>
                        <p><a className='text-white' target='_blank' rel='noopener noreferrer' href='tel:+56928484497'><strong>Teléfono:</strong><span> +569 28484497</span></a></p>
                        <NavLink className="link-light small" to="#!">
                            Política de Privacidad
                        </NavLink>
                        <span className="text-white mx-1">·</span>
                        <NavLink className="link-light small" to="#!">
                            Términos y condiciones
                        </NavLink>
                    </div>
                    {/*Redes sociales*/}
                    <div className='col-12 col-md-4 text-center p-1 mb-4 mt-4 order-3 order-md-2'>
                        <h4 className='mb-3'>Síguenos</h4>
                        <span className='m-2'>
                            <a className='text-white' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61562958972239&mibextid=ZbWKwL">
                                <div className='space-facebook'>
                                    <i className="fa-brands fa-facebook-f mt-2"></i>
                                </div>
                            </a>
                        </span>
                        <span className='m-2'>
                            <a className='text-white' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/colegiovirtual.alianza/">
                                <div className='space-instagram'>
                                    <i className="fa-brands fa-instagram mt-2"></i>
                                </div>
                            </a>
                        </span>
                        <span className='m-2'>
                            <a className='text-white' target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@colegio_virtual_alianza">
                                <div className='space-tiktok'>
                                    <i className="fa-brands fa-tiktok mt-2"></i>
                                </div>
                            </a>
                        </span>
                    </div>
                </div>
                <div className='down col-12 col-xs-12 text-center py-2'>
                    <span>© Colegio Virtual Alianza 2024.</span><span> Todos los derechos reservados.</span>
                    <p className='text-white'>Developed with <i className="fa fa-heart text-danger" /> by{" "}
                        <a className="developer" target="_blank" rel='noopener noreferrer' href="https://github.com/Zagarsix">Zagarsix</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
