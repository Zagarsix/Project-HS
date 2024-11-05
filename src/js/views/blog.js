import React from 'react';
import { Link } from "react-router-dom";
import notebook from "../../img/bg-section/blog4.jpeg";
import officedesk from "../../img/Office-Desk.png"
import parents2 from "../../img/blog/parents-and-children2.jpg";
import children from "../../img/blog/modalidad-hs.jpg";
import family1 from "../../img/blog/family1.jpg";
import dany from "../../img/team/DanyP.png";
import andres from "../../img/testimonials/dad1.jpg";
import evelyn from "../../img/testimonials/mom2.jpg";

const Blog = () => {
    return <>
        <main className="flex-shrink-0">
            {/* Header*/}
            <header className="masthead" style={{ backgroundImage: `url(${notebook})` }}>
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
            <section className="py-3">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-5">
                        {/*1*/}
                        <div className="col-lg-4  col-md-6 mb-5">
                            <div className="card h-70 rounded-4">
                                <img
                                    className="card-img-top"
                                    src={parents2}
                                    alt="padres e hijos viendo un notebook"
                                />
                                <div className="card-body p-2">
                                    <div className="badge bg-gradient rounded-pill mb-2">
                                        Noticias
                                    </div>
                                    <Link
                                        className="text-decoration-none link-dark stretched-link"
                                        to="/blog1-en-chile-se-puede-educar-en-casa"
                                    >
                                        <h5 className="card-title">¿Se puede educar en casa en Chile?</h5>
                                    </Link>
                                    <p className="small mb-1" style={{ fontSize: "1rem" }}>
                                        No es obligatorio escolarizar estudiantes en establecimientos educativos tradicionales o
                                        reconocidos por el Estado...
                                    </p>
                                </div>
                                <div className="card-footer p-2 pt-2 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="rounded-circle me-3"
                                                src={dany}
                                                width="50"
                                                height="50"
                                                alt="..."
                                            />
                                            <div className="small" style={{ fontSize: ".9rem" }}>
                                                <div className="small fw-semibold">Daniela Pacheco</div>
                                                <div className="small text-muted">
                                                    21 de Marzo, 2024 <br></br> 6 min de lectura
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*2*/}
                        <div className="col-lg-4  col-md-6 mb-5">
                            <div className="card h-70 rounded-4">
                                <img
                                    className="card-img-top"
                                    src={children}
                                    alt="padres e hijos viendo un notebook"
                                />
                                <div className="card-body p-2">
                                    <div className="badge bg-gradient rounded-pill mb-2">
                                        Reviews
                                    </div>
                                    <Link
                                        className="text-decoration-none link-dark stretched-link"
                                        to="#!"
                                    >
                                        <h5 className="card-title mb-1">Educación virtual como agente transformador</h5>
                                    </Link>
                                    <p className="small mb-1" style={{ fontSize: "1rem" }}>
                                        La educación virtual es un elemento que permite desarrollar el proceso de enseñanza y aprendizaje a través...
                                    </p>
                                </div>
                                <div className="card-footer p-2 pt-2 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="rounded-circle me-3"
                                                src={andres}
                                                width="50"
                                                height="50"
                                                alt="..."
                                            />
                                            <div className="small" style={{ fontSize: ".9rem" }}>
                                                <div className="small fw-semibold">Andrés García</div>
                                                <div className="small text-muted">
                                                    10 de Junio, 2024 <br></br> 4 min de lectura
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*3*/}
                        <div className="col-lg-4  col-md-6 mb-5">
                            <div className="card h-70 rounded-4">
                                <img
                                    className="card-img-top"
                                    src={family1}
                                    alt="padres e hijos viendo un notebook"
                                />
                                <div className="card-body p-2">
                                    <div className="badge bg-gradient rounded-pill mb-2">
                                        Noticias
                                    </div>
                                    <Link
                                        className="text-decoration-none link-dark stretched-link"
                                        to="#!"
                                    >
                                        <h5 className="card-title mb-1">Iniciando HomeSchool- Guía para padres</h5>
                                    </Link>
                                    <p className="small mb-1" style={{ fontSize: "1rem" }}>
                                        Educar en casa te permite liberar a niños y niñas de los vicios y efectos nocivos del sistema de
                                        escolarización, basado en...
                                    </p>
                                </div>
                                <div className="card-footer p-2 pt-2 bg-transparent border-top-0">
                                    <div className="d-flex align-items-end justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img
                                                className="rounded-circle me-3"
                                                src={evelyn}
                                                width="50"
                                                height="50"
                                                alt="..."
                                            />
                                            <div className="small" style={{ fontSize: ".9rem" }}>
                                                <div className="small fw-semibold">Evelyn Martínez</div>
                                                <div className="small text-muted">
                                                    12 de agosto, 2024 <br></br> 8 min de lectura
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-4 px-lg-5 my-3">
                    <div className="row gx-5">
                        <div className='col-lg-4 col-xl-6 mb-5 py-5 order-2 order-md-1'>
                            <p>
                                Enlaces de interés:
                            </p>
                            <ul>
                                <li><a className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" target='_blank' rel='noopener noreferrer' href="https://epja.mineduc.cl/quienes-pueden-rendir-examenes-de-validacion-de-estudios-para-menores-de-18-anos/">Validación de estudios... <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </li>
                                <li><a className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" target='_blank' rel='noopener noreferrer' href="https://www.ayudamineduc.cl/ficha/examenes-libres-menores-de-18-anos-11">Exámenes Libres... <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                </li>
                            </ul>
                        </div>
                        {/* Social media*/}
                        <div className='col-lg-7 col-xl-6 order-1 order-md-2'>
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