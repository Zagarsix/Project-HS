import React from 'react';
import { NavLink } from "react-router-dom";
import metroLogo from "../../img/metroLogo.png";
import iconoHS from "../../img/ElpactoDarkicon.png"

const Footer = () => {
    return (
        <footer className="footer py-2 mt-auto text-black">
            <div className="container px-4">
                <div className="row align-items-center justify-content-between">
                    <div className='col-12 col-sm-auto text-center p-3'>
                        <span className='m-2'>
                            <a className='text-white' target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daniela-pacheco-araya-716a32264/">
                                <i className="fa-brands fa-facebook-f fa-fade fa-2xl" style={{ color: "blue" }}></i>
                            </a>
                        </span>
                        <span className='m-2'>
                            <a className='text-white' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/danydent_odontoesthetic/">
                                <i className="fa-brands fa-instagram fa-fade fa-2xl" style={{ color: "pink" }}></i>
                            </a>
                        </span>
                        <span className='m-2'>
                            <a className='text-white' target="_blank" rel="noopener noreferrer" href="https://wa.me/56973655180/">
                                <i className="fa-brands fa-whatsapp fa-fade fa-2xl " style={{ color: "green" }}></i>
                            </a>
                        </span>
                        <span className='m-2'>
                            <a className='text-white' target="_blank" rel="noopener noreferrer" href="mailto:dany.pacheco.a@gmail.com">
                                <i className="fa-regular fa-envelope fa-fade fa-2xl" style={{ color: "red" }}></i>
                            </a>
                        </span>
                    </div>
                    <div className='col-12 col-sm-auto p-2 m-2 text-center'>
                        <div className="text-white">
                            <img className="mx-1" src={iconoHS} alt="logo-brand" width="120" height="100" />
                            <p>© El Pacto Homeschool 2024. Todos los derechos reservados.</p>
                            <p>Curacaví, Estación Central, Santiago, Chile.</p>
                            <p><img className="mx-0" src={metroLogo} alt="Metro Logo" width="30" height="25" /> Metro Las Rejas</p>
                            <NavLink className="link-light small" to="#!">
                                Política de Privacidad
                            </NavLink>
                            <span className="text-white mx-1">·</span>
                            <NavLink className="link-light small" to="#!">
                                Términos y condiciones
                            </NavLink>
                        </div>
                    </div>
                    <div className='col-12 col-sm-auto text-center p-3'>
                        <div className='small mt-3'>
                            <span className='text-white'> &copy; 2024 - Developed with <i className="fa fa-heart text-danger" /> by{" "}
                                <a target="_blank" href="https://github.com/Zagarsix">Zagarsix</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
