import React from 'react';
import { Link } from "react-router-dom";
import notebook from "../../img/bg-section/blog4.jpeg";
import family1 from "../../img/blog/family1.jpg";
import evelyn from "../../img/testimonials/mom2.jpg";

const Blog3 = () => {
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
                            Iniciando HomeSchool- Guía para padres
                        </h2>
                        <div className="col-lg-5">
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
                                                12 de agosto, 2024 <br></br> 6 min de lectura
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                className="img-fluid rounded mb-1 mb-lg-0 shadow border-5"
                                src={family1}
                                alt="manos en un notebook"
                            />
                        </div>
                        <div className="col-lg-7">
                            <div className="lead-blog fw-normal mt-5 mb-0">
                                <p><strong>¿Cómo educar en casa? </strong> <br></br>
                                    Educar en casa te permite liberar a niños y niñas de los vicios y efectos nocivos del sistema de
                                    escolarización, basado en el modelo de escuela-fábrica-empresa, pero también requiere un
                                    esfuerzo pedagógico, una visión basada en algún marco reflexivo de la educación, conocer el
                                    marco legal y conocimientos didácticos considerables de los tutores. Este modelo educativo demanda dedicación constante y la capacidad de adaptar los métodos de enseñanza a las necesidades individuales del niño, creando un ambiente estimulante que fomente el pensamiento crítico, la creatividad y el amor por el aprendizaje.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="lead-blog fw-normal mt-1 mb-0">
                                <p className='fw-semibold'>Te damos algunos tips:</p>
                                <ol>
                                    <li>Escribe el motivo por el cual tomaron como familia iniciar la educación en casa. Eso te permitirá fijar objetivos.</li>
                                    <li>Tómate el tiempo de investigar y leer ( documentos, leyes vigentes en Chile, etc). Es importante tener en cuenta que hay algunas limitaciones para dar exámenes de validación. Por ejemplo, estudiantes que durante el año se han matriculado en un establecimiento reconocido por el estado no pueden darlos ese año.</li>
                                    <li>Busca profesionales con experiencia en apoyo escolar. Podremos guiarte en todo el proceso educativo en casa , considerando todos los aspectos que involucra el aprendizaje con equipos multidisciplinarios a tu disposición; psicopedagogos, fonoaudiólogo, educadora diferencial, psicólogo. etc.</li>
                                    <li>Establece con tus hijos y familia rutinas de estudio. Les ayudará a la organización y optimización de los tiempos de estudio.</li>
                                    <li>Escribe para ti un plan general que considere las fechas de convocatorias a exámenes de validación (son tres anuales según el reglamento) y el currículo nacional. Elementos que te ayudarán a darle un sentido y un marco a la formación en casa. Te recomendamos la fecha que se realiza en el mes de octubre, ya que así tendrás más tiempo para preparar a tus hijos.</li>
                                    <li>Propone diaria o semanalmente diferentes y diversos espacios y momentos para el aprendizaje. En la escolarización en casa, tu ciudad y el mundo son el aula. No te límites a cuestiones académicas, ni reproduzcas las prácticas que vimos como estudiantes o que hacen los colegios sin haber reflexionado en sus pros y contras.</li>
                                    <li>Organiza y mapea un repertorio amplio de recursos de aprendizaje analógicos y digitales: películas, videos, parques, juguetes, libros, computadores, móviles, artículos deportivos, instrumentos musicales, materiales de artes visuales, herramientas, tutoriales, blogs, webs, etc.</li>
                                    <li>Haz un énfasis en la autonomía, la motivación intrínseca o curiosidad, el autoconcepto, el juego y las habilidades para el autoaprendizaje de tus hijos.</li>
                                </ol>
                                <p><strong> TIPOS DE HOMESCHOOL</strong><br></br>
                                    <span className='fw-semibold fst-italic'> MODALIDADES </span><br></br>
                                    E-LEARNING: SOLO CLASES ONLINE <br></br>
                                    B-LEARNING: SEMIPRESENCIAL<br></br>
                                    FLEXI-SCHOOL: EL NIÑO GUIA LA ENSEÑANZA SEGÚN HABILIDADES</p>
                                <p><strong>¿QUÉ ES DESESCOLARIZAR?</strong><br></br>
                                    Es el proceso donde se retira del sistema escolar tradicional a un alumno y <span className='fw-semibold fst-italic'> el rol de educadores pasa a ser exclusivo de los padres.</span> Es decisión de cada familia buscar entidades de apoyo escolar para ayudarlos en este proceso. El aprendizaje se realiza de una manera 100% personalizada, así la metodología de aprendizaje se torna más flexible y entretenida. <br></br>
                                    Para validar el año escolar de manera legal, los estudiantes rinden un exámen en dos fechas durante
                                    el año. Tú elijes en que fecha inscribirlo, siendo el <span className='fw-semibold fst-italic'>proceso de inscripción para esta prueba, de exclusiva responsabilidad de los padres.</span></p><br></br>
                                <p><strong>Perfil de los Padres HomeSchool</strong><br></br>
                                    Como padres primerizos en este tipo de enseñanza, debemos tener en cuenta, ciertas cualidades
                                    que nos permitan tener éxito al momento de comenzar con la educación en casa. Recuerda que
                                    como padres, asumimos esta responsabilidad con nuestros niños al momento de desescolarizar y
                                    las entidades externas sólo cumplen su rol de apoyo en esta tarea.</p>
                                <ol>
                                    <li><span className='fw-semibold fst-italic'> PROACTIVOS:</span> Capacidad de tomar la iniciativa, anticiparse a las necesidades educativas y buscar constantemente nuevas formas de enseñanza y aprendizaje.
                                    </li>
                                    <li><span className='fw-semibold fst-italic'> COMUNICATIVOS:</span> Mantener un diálogo abierto y efectivo con los hijos, siendo capaces de explicar conceptos claramente y escuchar activamente sus necesidades y dudas.</li>
                                    <li><span className='fw-semibold fst-italic'> PERSEVERANTES:</span> Mantener la constancia y determinación en el proceso educativo, incluso cuando surjan dificultades o desafíos, sin rendirse ante los obstáculos.</li>
                                    <li><span className='fw-semibold fst-italic'> ORGANIZADOS:</span> Habilidad para estructurar el tiempo, materiales y actividades de manera eficiente, manteniendo un ambiente de aprendizaje ordenado y productivo.</li>
                                    <li><span className='fw-semibold fst-italic'> BUSCAR FORTALEZAS:</span> Capacidad de identificar y potenciar las habilidades naturales y talentos tanto de los padres como de los hijos, aprovechándolas en el proceso educativo.</li>
                                    <li><span className='fw-semibold fst-italic'> SABIOS PARA ESTABLECER RUTINAS:</span>  Habilidad para crear y mantener horarios y hábitos de estudio consistentes pero flexibles, que se adapten a las necesidades de la familia y promuevan un aprendizaje efectivo.</li>
                                </ol>
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

export default Blog3;