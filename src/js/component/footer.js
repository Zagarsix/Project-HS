import React from 'react';
import { NavLink, Link } from "react-router-dom";
import logoCC from "../../img/iconZagarsix.jpg";
import iconDP from "../../img/iconDP.jpg"

const Footer = () => {
    return <>
        {/* Footer*/}
        <footer className="footer py-2 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between justify-items-end flex-column flex-sm-row">
                    <div className='col-auto text-center p-3'>
                        <span className='m-auto mx-3'>
                            <a className='text-white' target="_blank" href="https://www.linkedin.com/in/daniela-pacheco-araya-716a32264/">
                                <i className="fa-brands fa-linkedin fa-beat fa-2xl"></i>
                            </a>
                        </span>
                        <span className='m-auto mx-3'>
                            <a className='text-white' target="_blank" href="https://www.instagram.com/danydent_odontoesthetic/">
                                <i className="fa-brands fa-square-instagram fa-beat fa-2xl"></i>
                            </a>
                        </span>
                        <span className='m-auto mx-3'>
                            <a className='text-white' target="_blank" href="https://wa.me/56973655180/">
                                <i className="fa-brands fa-square-whatsapp fa-beat-fade fa-2xl "></i>
                            </a>
                        </span>
                        <span className='m-auto mx-3'>
                            <a className='text-white' target="_blank" href="mailto:dany.pacheco.a@gmail.com">
                                <i className="fa-solid fa-square-envelope fa-beat-fade fa-2xl"></i>
                            </a>
                        </span>
                    </div>
                    <div className='col-auto'>
                        <div className="m-0 text-white text-center">
                            <img className="mx-1" src={iconDP} alt="logo-brand" width="150" height="150"></img>
                            <p>© Dra. Dany 2024. Todos los derechos reservados.</p>
                            <p>Metro Pedro de Valdivia, Providencia</p>
                            <NavLink className="link-light small" to="#!">
                                Política de Privacidad
                            </NavLink>
                            <span className="text-white mx-1">·</span>
                            <NavLink className="link-light small" to="#!">
                                Términos y condiciones
                            </NavLink>
                        </div>
                    </div>
                    <div className='col-auto text-center p-3'>
                        <div className='small text-center mt-3 justify-items-end'>
                            <img className="mx-1" src={logoCC} alt="Zagarsix" width="30" height="25"></img>
                            <span className='small m-0 text-white'> &copy; 2024 - Developed with <i className="fa fa-heart text-danger" /> by {""}
                                <a target="_blank" href="https://github.com/Zagarsix">Zagarsix</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer; 