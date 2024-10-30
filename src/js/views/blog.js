import React from 'react';
import { NavLink } from "react-router-dom";
import mapa from "../../img/bg-section/blog4.jpeg";
import officedesk from "../../img/Office-Desk.png"

const Blog = () => {
    return <>
        <main className="flex-shrink-0">
            {/* Header*/}
            <header className="masthead" style={{ backgroundImage: `url(${mapa})` }}>
                <div className="container position-relative px-4 px-lg-3">
                    <div className="row gx-4 gx-lg-5 justify-content-around">
                        <div className="col-md-12 col-lg-11 col-xl-10">
                            <div className="text-center my-2">
                                <h1 className="site-heading fw-bolder mb-1">
                                    <span>Blog</span> <span style={{ color: "#ff6600" }}> CVA</span>
                                </h1>
                                <p className="lead-header mb-5">
                                    Entérate de nuestras <strong> noticias, eventos y más.</strong> También se comparten recursos, artículos y consejos relevantes para las familias, donde se abordan <strong> temas pedagógicos, metodologías educativas, consejos </strong> sobre cómo gestionar el aprendizaje en el hogar, y artículos inspirados en <strong> valores cristianos.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Page Content*/}
            <section className="py-2" style={{ paddingBottom: "100px", marginBottom: "100px" }}>
                <div className="container px-5 my-3">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder" style={{ color: "#0e408f" }}>En construcción...</h1>
                        <p className="lead fw-normal text-black mb-0" >¡Próximamente!</p>
                    </div>
                    <div className="row gx-5">
                        <div className='col-lg-4 col-xl-6 mb-5 py-5'>
                            <h3>
                                Esta sección pronto estará lista...
                            </h3>
                            <p>
                                Por el momento, te dejo estos enlaces de interés:
                            </p>
                            <ul>
                                <li><a className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" target='_blank' rel='noopener noreferrer' href="https://epja.mineduc.cl/quienes-pueden-rendir-examenes-de-validacion-de-estudios-para-menores-de-18-anos/">Validación de estudios... <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </li>
                                <li><a className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" target='_blank' rel='noopener noreferrer' href="https://www.ayudamineduc.cl/ficha/examenes-libres-menores-de-18-anos-11">Exámenes Libres... <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </li>
                            </ul>
                        </div>
                        {/* Social media*/}
                        <div className='col-lg-7 col-xl-6'>
                            <img
                                className="img-fluid mb-2 px-2"
                                width="450"
                                height="450"
                                src={officedesk}
                                alt="ilustración"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}

export default Blog;