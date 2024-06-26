import React from 'react';
import { NavLink } from "react-router-dom";

import homeBG from "../../img/lapices-bg.jpg";
import alianzaCV from "../../img/logo-vision-mision.png";
import desarrollo from "../../img/blog-bg.jpg";
import valores from "../../img/logo-valores.png";
import dany from "../../img/Danieleichon.jpg";
import claudio from "../../img/Claudieichon.jpg";
import nicole from "../../img/Nicoleichon.jpg";
import solange from "../../img/Solangeichon2.jpg";
import sandra from "../../img/Sandreichon.jpg";
import michelle from "../../img/Michelleichon.jpg";
import sahian from "../../img/Sahianeichon.jpg";
import daniC from "../../img/Cordoveichon.jpg";

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
                                    <strong>Colegio Virtual Alianza</strong> está conformado por un equipo de <strong>profesionales especialistas en educación online</strong>, capacitados para brindar un aprendizaje interactivo y efectivo a través de plataformas digitales, garantizando una educación de calidad, acorde a las necesidades del mundo moderno y en un entorno que fomenta tanto el conocimiento como el crecimiento personal.
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
                                src={alianzaCV}
                                alt="..."
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
                                alt="..."
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
                                alt="..."
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
                        <h2 className="fw-bolder" style={{ color: "#131c96" }}>--- Nuestro equipo ---</h2>
                        <p className="lead fw-normal text-muted mb-5">
                            Dedicados a la calidad &amp; el éxito
                        </p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src={dany}
                                    alt="Dany"
                                />
                                <h5 className="fw-bolder">Daniela Pacheco</h5>
                                <div className="fst-italic text-muted">Founder &amp; CEO</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src={claudio}
                                    alt="Claudio"
                                />
                                <h5 className="fw-bolder">Claudio Candia</h5>
                                <div className="fst-italic text-muted">Webmaster, developer &amp; designer</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-5 mb-sm-0">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src={nicole}
                                    alt="Nicole"
                                />
                                <h5 className="fw-bolder">Nicole Jorquera</h5>
                                <div className="fst-italic text-muted">UTP Chief</div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src={solange}
                                    alt="Solange"
                                />
                                <h5 className="fw-bolder">Solange González</h5>
                                <div className="fst-italic text-muted">Operations Manager</div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src={sandra}
                                    alt="Sandra"
                                />
                                <h5 className="fw-bolder">Sandra Panguinao</h5>
                                <div className="fst-italic text-muted">Workshop manager</div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src={michelle}
                                    alt="Michelle"
                                />
                                <h5 className="fw-bolder">Michelle Zapata</h5>
                                <div className="fst-italic text-muted">PIE Manager</div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src={sahian}
                                    alt="Sahian"
                                />
                                <h5 className="fw-bolder">Sahian Candia</h5>
                                <div className="fst-italic text-muted">Social media manager</div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src={daniC}
                                    alt="Dani C."
                                />
                                <h5 className="fw-bolder">Daniela Córdova</h5>
                                <div className="fst-italic text-muted">Administrative advisor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        {/* Bootstrap core JS*/}
        {/* Core theme JS*/}
    </>
}

export default Nosotros;