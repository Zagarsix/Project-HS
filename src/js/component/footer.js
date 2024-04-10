import React from 'react';
import { NavLink } from "react-router-dom";
import metroLogo from "../../img/metroLogo.png";
import iconoHS from "../../img/iconoHS.jpg"

const Footer = () => {
    return <>
        {/* Footer*/}
        <footer className="footer py-2 mt-auto text-black">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between justify-items-end flex-column flex-sm-row">
                    <div className='col-auto text-center p-3 m-3'>
                        <span className='m-auto mx-3'>
                            <a className='text-white' target="_blank" href="https://www.linkedin.com/in/daniela-pacheco-araya-716a32264/">
                                <i className="fa-brands fa-facebook-f fa-bounce fa-2xl" style={{ color: "blue" }}></i>
                            </a>
                        </span>
                        <span className='m-auto mx-3'>
                            <a className='text-white' target="_blank" href="https://www.instagram.com/danydent_odontoesthetic/">
                                <i className="fa-brands fa-instagram fa-bounce fa-2xl" style={{ color: "pink" }}></i>
                            </a>
                        </span>
                        <span className='m-auto mx-3'>
                            <a className='text-white' target="_blank" href="https://wa.me/56973655180/">
                                <i className="fa-brands fa-whatsapp fa-bounce fa-2xl " style={{ color: "green" }}></i>
                            </a>
                        </span>
                        <span className='m-auto mx-3'>
                            <a className='text-white' target="_blank" href="mailto:dany.pacheco.a@gmail.com">
                                <i className="fa-regular fa-envelope fa-bounce fa-2xl" style={{ color: "red" }}></i>
                            </a>
                        </span>
                    </div>
                    <div className='col-auto p-2 m-2'>
                        <div className="text-white text-center">
                            <img className="mx-1" src={iconoHS} alt="logo-brand" width="150" height="150"></img>
                            <p>© El Pacto Homeschool 2024. Todos los derechos reservados.</p>
                            <p>Curacaví, Estación Central, Santiago, Chile.</p>
                            <p><img className="mx-0" src={metroLogo} alt="Metro Logo" width="30" height="25" />Metro Las Rejas</p>
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