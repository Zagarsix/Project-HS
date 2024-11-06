import React from 'react';
import { Link } from "react-router-dom";
import notebook from "../../img/bg-section/blog4.jpeg";
import children from "../../img/blog/modalidad-hs.jpg";
import andres from "../../img/testimonials/dad1.jpg";

const Blog2 = () => {
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
                        <h2 className="fw-bolder mb-5" style={{ color: "#0e408f" }}>
                            Educación virtual como agente transformador
                        </h2>
                        <div className="col-lg-5">
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
                                                10 de Junio, 2024 <br></br> 7 min de lectura
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="img-fluid rounded mb-1 mb-lg-0 shadow border-5"
                                src={children}
                                alt="manos en un notebook"
                            />
                        </div>
                        <div className="col-lg-7">
                            <div className="lead fw-normal mt-5 mb-0">
                                <p><strong>Introducción </strong> <br></br>
                                    La educación virtual es un elemento que permite desarrollar el proceso de enseñanza y aprendizaje a través de la implementación de las tecnologías de información y comunicación , así se puede llevar a cabo la labor educativa desde cualquier lugar sin necesidad de encontrarse de forma presencial con el maestro o docente. Esta permite adquirir habilidades y conocimientos a un rimo propio y no de forma colectiva, en un tiempo propio predeterminado por el estudiante y no limitado a un horario, esta metodología convierte, en la mayoría de los casos, al estudiante en autodidacta.<br></br>
                                    Se llamará educación virtual a un sistema abierto que es guiado por el usuario, en esta se promueve el intercambio de ideas y conocimiento a través de diferentes espacios con la guía y apoyo de un facilitador que será el docente que dirige la actividad educativa. Por ser un sistema de enseñanza no presencial comprende diversas actividades y tareas que no se visualizan en las clases tradicionales, tal es el caso del rol activo del estudiante para la construcción de significados y la resolución de problemas en casos reales, construcción de mapas mentales y organizadores gráficos y el intercambio de ideas para comprender los objetivos de las asignaturas.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="lead fw-normal mt-1 mb-0">
                                <p><strong>El Artículo 10 y 11 de la Constitución Chilena,</strong> indican que no hay obligación explícita de los padres a escolarizar a sus hijos en establecimientos educativos con reconocimiento oficial:</p>
                                <p><strong>10º.- El derecho a la educación. </strong><br></br> La educación tiene por objeto el pleno desarrollo de la persona en las distintas etapas de su vida. Los padres tienen el derecho preferente y el deber de educar a sus hijos. Corresponderá al Estado otorgar especial protección al ejercicio de este derecho.<br></br>
                                    Para el Estado es obligatorio promover la educación parvularia, para lo que financiará un sistema
                                    gratuito a partir del nivel medio menor, destinado a asegurar el acceso a éste y sus niveles
                                    superiores. El segundo nivel de transición es obligatorio, siendo requisito para el ingreso a la
                                    educación básica.<br></br>
                                    La educación básica y la educación media son obligatorias, debiendo el Estado financiar un sistema
                                    gratuito con tal objeto, destinado a asegurar el acceso a ellas de toda la población. En el caso de la
                                    educación media este sistema, en conformidad a la ley, se extenderá hasta cumplir los 21 años de
                                    edad.<br></br>
                                    Corresponderá al Estado, asimismo, fomentar el desarrollo de la educación en todos sus niveles;
                                    estimular la investigación científica y tecnológica, la creación artística y la protección e incremento del patrimonio cultural de la Nación. Es deber de la comunidad contribuir al desarrollo y perfeccionamiento de la educación.
                                </p>
                                <p><strong> 11º.- La libertad de enseñanza incluye el derecho de abrir, organizar y mantener establecimientos educacionales.</strong> <br></br>
                                    La libertad de enseñanza no tiene otras limitaciones que las impuestas por la moral, las buenas costumbres, el orden público y la seguridad nacional.La enseñanza reconocida oficialmente no podrá orientarse a propagar tendencia político partidista alguna.
                                    Los padres tienen el derecho de escoger el establecimiento de enseñanza para sus hijos.
                                    Una ley orgánica constitucional establecerá los requisitos mínimos que deberán exigirse en cada
                                    uno de los niveles de la enseñanza básica y media y señalará las normas objetivas, de general
                                    aplicación, que permitan al Estado velar por su cumplimiento. Dicha ley, del mismo modo,
                                    establecerá los requisitos para el reconocimiento oficial de los establecimientos educacionales de
                                    todo nivel.<br></br>
                                    <span className='fw-semibold'>En Chile la escolarización en casa no está normada como tal. Sin embargo, es legalmente posible y factible educar en casa o en establecimientos no reconocidos por el Estado y obtener las certificaciones de Enseñanza Básica y Enseñanza Media mediante exámenes de validación.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12 text-end">
                            <Link className="btn btn-xl mt-4" to="/blog">
                                <i className="fa-solid fa-reply"></i>  Volver
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}

export default Blog2;