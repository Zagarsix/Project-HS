import React from 'react';
import { NavLink } from "react-router-dom";

import homeBG from "../../img/lapices-bg.jpg";
import logoVyM from "../../img/logo-valores.png";
import desarrollo from "../../img/blog-bg.jpg";
import valores from "../../img/logo-vision-mision.png";
import dany from "../../img/DanyP.png";
import claudio from "../../img/Claudio.png";
import solange from "../../img/Solange.png";
import sandra from "../../img/Sandra.png";
import michelle from "../../img/Michelle.png";
import sahian from "../../img/Sayita.png";
import daniC from "../../img/DaniC.png";

const Nosotros = () => {
    return <>
        <main className="flex-shrink-0">
            {/* Header*/}
            <header className="masthead" style={{ backgroundImage: `url(${homeBG})` }}>
                <div className="container position-relative px-5 px-lg-3">
                    <div className="row gx-4 gx-lg-5 justify-content-around">
                        <div className="col-md-12 col-lg-11 col-xl-10">
                            <div className="text-center my-2">
                                <h1 className="site-heading fw-bolder mb-1">
                                    <span>¿Quiénes</span> <span style={{ color: "#ff6600" }}> somos?</span>
                                </h1>
                                <p className="lead-header mb-5">
                                    <strong>Colegio Virtual Alianza</strong> está conformado por un equipo de <strong>profesionales especialistas en educación online</strong>, capacitados para brindar un aprendizaje interactivo y efectivo a través de <strong>plataformas digitales</strong>, garantizando una educación de calidad, acorde a las necesidades del mundo moderno y en un entorno que fomenta tanto el conocimiento como el crecimiento personal.
                                </p>
                                {/* <NavLink className="btn btn-xl py-2 my-2" to="#scroll-target" style={{ background: "#131c96" }}>
                                    Lee nuestra historia
                                </NavLink> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* About section one*/}
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img
                                className="img-fluid rounded mb-5 mb-lg-0"
                                src={logoVyM}
                                alt="logo visión y misión"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder" style={{ color: "#0e408f", borderRadius: "5rem" }}><span >Visión </span><span style={{ color: "#3dfffb", background: "rgb(0, 0, 90, 0.5)", borderRadius: "5rem", padding: "5px" }}> &amp; Misión</span></h2>
                            <p className="lead fw-normal text-muted mb-0">
                                <strong>Visión: </strong>Ser reconocidos como un referente en educación a distancia, destacándonos por la excelencia académica, la innovación pedagógica y el compromiso con el desarrollo integral de nuestros estudiantes. Aspiramos a formar individuos críticos, creativos y con valores sólidos, preparados para enfrentar los desafíos del mundo contemporáneo.
                                <p><strong>Misión: </strong>Entregar una educación integral y personalizada para niños y jóvenes, bajo valores, principios y conceptos cristianos; fomentando un aprendizaje activo, participativo y significativo. Nos comprometemos a acompañar a nuestros estudiantes en su proceso de aprendizaje, respetando sus ritmos y estilos, y promoviendo el desarrollo de sus capacidades y talentos.</p>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* About section two*/}
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last">
                            <img
                                className="img-fluid rounded mb-5 mb-lg-0"
                                src={desarrollo}
                                alt="desarrollo integral"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder" style={{ color: "#0e408f" }}>Desarrollo <span style={{ color: "#3dfffb", background: "rgb(0, 0, 90, 0.5)", borderRadius: "5rem", padding: "5px" }}>&amp; más allá</span></h2>
                            <p className="lead fw-normal text-muted mb-0">Nuestro compromiso es ofrecer un entorno educativo <strong>flexible y personalizado </strong>que se adapte a las necesidades individuales de cada estudiante, promoviendo el desarrollo integral y el amor por el aprendizaje.
                                Contemplando los niveles <strong>desde enseñanza pre-básica a media</strong>, a través de una plataforma <strong>online y talleres presenciales.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* About section three*/}
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6">
                            <img
                                className="img-fluid rounded mb-5 mb-lg-0"
                                src={valores}
                                alt="valores homeschool"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder" style={{ color: "#0e408f", borderRadius: "5rem" }}><span >Nuestros </span><span style={{ color: "#3dfffb", background: "rgb(0, 0, 90, 0.5)", borderRadius: "5rem", padding: "5px" }}> Valores</span></h2>
                            <p className="lead fw-normal text-muted mb-0">
                                <strong>Excelencia Académica: </strong>Nos esforzamos por ofrecer una educación de alta calidad, basada en programas académicos rigurosos y actualizados.
                                <p><strong>Innovación Pedagógica: </strong>Implementamos metodologías de enseñanza innovadoras que fomentan el pensamiento crítico y creativo.</p>
                                <p><strong>Personalización del Aprendizaje: </strong>Adaptamos nuestros programas educativos a las necesidades individuales de cada estudiante, reconociendo y valorando su diversidad.</p>
                                <p><strong>Compromiso y Responsabilidad: </strong>Nos comprometemos con el éxito académico y personal de nuestros estudiantes, promoviendo una cultura de responsabilidad y ética.</p>
                                <p><strong>Formación Integral: </strong>Fomentamos el desarrollo de competencias académicas, sociales y emocionales, preparando a nuestros estudiantes para ser ciudadanos responsables y comprometidos.</p>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team members section*/}
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder" style={{ color: "#0e408f" }}>--- Nuestro equipo ---</h2>
                        <p className="lead fw-normal text-muted mb-5">
                            Dedicados a la calidad &amp; el éxito
                        </p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5 mb-xl-5">
                            <img
                                className="img-fluid rounded-circle mb-2 px-2"
                                src={dany}
                                alt="Dany Pacheco riendo"
                            />
                            <div className="text-center">

                                <h5 className="fw-bolder">Daniela Pacheco</h5>
                                <div className="fst-italic text-muted">Coordinadora General</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-xl-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-2 px-2"
                                    src={claudio}
                                    alt="Claudio Candia riendo"
                                />
                                <h5 className="fw-bolder">Claudio Candia</h5>
                                <div className="fst-italic text-muted">Webmaster, desarrollador &amp; diseñador</div>
                            </div>
                        </div>
                        {/* <div className="col mb-5 mb-xl-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-2 px-2"
                                    src={nicole}
                                    alt="Nicole"
                                />
                                <h5 className="fw-bolder">Nicole Jorquera</h5>
                                <div className="fst-italic text-muted">UTP Chief</div>
                            </div>
                        </div> */}
                        <div className="col mb-5 mb-xl-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-2 px-2"
                                    src={solange}
                                    alt="Solange González riendo"
                                />
                                <h5 className="fw-bolder">Solange González</h5>
                                <div className="fst-italic text-muted">Jefa de Operaciones</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-xl-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-2 px-2"
                                    src={sandra}
                                    alt="Sandra Panguinao riendo"
                                />
                                <h5 className="fw-bolder">Sandra Panguinao</h5>
                                <div className="fst-italic text-muted">Jefa de talleres</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-xl-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-2 px-2"
                                    src={michelle}
                                    alt="Michelle Zapata riendo"
                                />
                                <h5 className="fw-bolder">Michelle Zapata</h5>
                                <div className="fst-italic text-muted">Jefa Unidad de Apoyo N.E.E.</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-xl-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-2 px-2"
                                    src={sahian}
                                    alt="Sahian candia riendo"
                                />
                                <h5 className="fw-bolder">Sahian Candia</h5>
                                <div className="fst-italic text-muted">Encargada Redes Sociales</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-xl-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-2 px-2"
                                    src={daniC}
                                    alt="Dani Córdova riendo"
                                />
                                <h5 className="fw-bolder">Daniela Córdova</h5>
                                <div className="fst-italic text-muted">Asistente administrativo</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}

export default Nosotros;