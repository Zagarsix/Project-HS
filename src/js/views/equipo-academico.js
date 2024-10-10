import React from 'react';
import { Link } from "react-router-dom";

import homeBG from "../../img/bg-section/lapices-bg.jpg";
import dany from "../../img/team/DanyP.png";
import claudio from "../../img/team/Claudio.png";
import mitzi from "../../img/team/Mitzi.png";
import sandra from "../../img/team/Sandra.png";
import michelle from "../../img/team/Michelle.png";
import camila from "../../img/team/Camila.png";

const EquipoA = () => {
    return <>
        <main className="flex-shrink-0">
            {/* Header*/}
            <header className="masthead" style={{ backgroundImage: `url(${homeBG})` }}>
                <div className="container position-relative px-4 px-lg-3">
                    <div className="row gx-4 gx-lg-5 justify-content-around">
                        <div className="col-md-12 col-lg-11 col-xl-10">
                            <div className="text-start my-2">
                                <h1 className="site-heading fw-bolder mb-1">
                                    <span>Equipo</span> <span style={{ color: "#ff6600" }}> Académico</span>
                                </h1>
                                <p className="lead-header mb-5">
                                    Conoce <strong>a tus profesores:</strong> un equipo de <strong>profesionales especialistas en educación online</strong>, capacitados para brindar un aprendizaje interactivo y efectivo a través de <strong>plataformas digitales</strong>, garantizando una educación de calidad, acorde a las necesidades del mundo moderno y en un entorno que fomenta tanto el conocimiento como el crecimiento personal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Team members section*/}
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    {/* <div className="text-center">
                        <h1 className="fw-bolder" style={{ color: "#0e408f" }}>Equipo Administrativo</h1>
                        <p className="lead fw-normal text-muted mb-5">
                            Dedicados a la calidad &amp; el éxito
                        </p>
                    </div> */}
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5 mb-xl-5">
                            <img
                                className="img-fluid rounded-circle mb-2 px-2"
                                src={camila}
                                alt="Camila Zamorano riendo"
                            />
                            <div className="text-center">

                                <h5 className="fw-bolder">Camila Zamorano</h5>
                                <div className="fst-italic text-muted">Educadora Pre-básica</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-xl-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-2 px-2"
                                    src={mitzi}
                                    alt="Mitzi"
                                />
                                <h5 className="fw-bolder">Mitzi Gardel</h5>
                                <div className="fst-italic text-muted">Profesora de Historia</div>
                                <div className="fst-italic text-muted">5° a 8° básico</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-xl-5">
                            <img
                                className="img-fluid rounded-circle mb-2 px-2"
                                src={dany}
                                alt="Dany Pacheco riendo"
                            />
                            <div className="text-center">

                                <h5 className="fw-bolder">Daniela Pacheco</h5>
                                <div className="fst-italic text-muted">Profesora de Ciencias (Física y Biología)</div>
                                <div className="fst-italic text-muted">5° a 8° básico</div>
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
                                <div className="fst-italic text-muted">Profesor de Matemáticas y Ciencias (Química)</div>
                                <div className="fst-italic text-muted">5° a 8° básico</div>
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
                                <div className="fst-italic text-muted">Encargada de talleres y Profesora de piano inicial</div>
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
                                <div className="fst-italic text-muted">Profesora de valores cristianos</div>
                            </div>
                        </div>
                    </div>
                    <div className='justify-content-end'>
                        <Link className="btn btn-xl m-2" to="/matriculas">
                            Matricúlate! <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    </>
}

export default EquipoA;