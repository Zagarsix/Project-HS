import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Footer = () => {
    return <>
        {/* Footer*/}
        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto">
                        <div className="small m-0 text-white">
                            Copyright © Dra. Dany 2024
                        </div>
                    </div>
                    <div className='col-auto'>
                        <img className="mx-3" src={logoCC} alt="Zagarsix" width="60" height="50"></img>
                        <span>&copy; 2024 - Developed with <i className="fa fa-heart text-danger" /> by {""}
                            <a href="https://github.com/Zagarsix">Zagarsix</a>
                        </span>
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
}

export default Footer; 