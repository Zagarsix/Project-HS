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
                                    La educación virtual es un elemento que permite desarrollar el proceso de enseñanza y aprendizaje a través de la implementación de las tecnologías de información y comunicación (TIC's), así se puede llevar a cabo la labor educativa desde cualquier lugar sin necesidad de encontrarse de forma presencial con el maestro o docente. Esta permite adquirir habilidades y conocimientos a un ritmo propio y no de forma colectiva, en un tiempo propio predeterminado por el estudiante y no limitado a un horario, esta metodología convierte, en la mayoría de los casos, al estudiante en autodidacta.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="lead fw-normal mt-1 mb-0">
                                <p>Se llamará educación virtual a un sistema abierto que es guiado por el usuario, en esta se promueve el intercambio de ideas y conocimiento a través de diferentes espacios con la guía y apoyo de un facilitador que será el docente que dirige la actividad educativa. Por ser un sistema de enseñanza no presencial comprende diversas actividades y tareas que no se visualizan en las clases tradicionales, tal es el caso del rol activo del estudiante para la construcción de significados y la resolución de problemas en casos reales, construcción de mapas mentales y organizadores gráficos y el intercambio de ideas para comprender los objetivos de las asignaturas.</p>
                                <p>En los procesos de aprendizaje, la interacción social es muy importando debido a que la mayoría de lo que aprendemos proviene del contacto con otras personas, por ende, en la educación virtual es fundamental el uso de chat, video llamadas, videoconferencias, foros como herramientas de comunicación sincrónica y el correo electrónico, plataformas digitales y mensajes como herramientas de comunicación asincrónica. La base en este proceso de aprendizaje es el trabajo colaborativo y el trabajo grupal, donde se da el intercambio de experiencias para la resolución de problemas.</p>
                                <p>Soluciones de productividad que brindan a los maestros más tiempo para trabajar con los estudiantes y permiten a las escuelas desempeñarse con mayor eficacia. Portales seguros que amplíen la jornada escolar, mejoren la comunicación entre la escuela y el hogar y de oportunidad a los padres de familia a convertirse en colaboradores activos Tecnologías de colaboración que ayuden a los maestros a reducir el aislamiento y ampliar sus conocimientos tomando parte en comunidades de preparación profesional.</p>
                                <p>De acuerdo a lo anterior, se puede decir que los recursos digitales, no sólo móviles sino a nivel general permiten mejorar la didáctica de las clases incorporando, videos, imágenes y un alto nivel de interactividad que permiten la mejor comprensión de los contenidos de las asignaturas y que se convierten en potentes fuentes de búsqueda de información complementando los procesos investigativos de docentes y estudiantes de todos los niveles educativos.</p>
                                <p>La educación virtual brinda un aporte real e importante para el desarrollo de las habilidades, capacidades y destrezas de docentes y estudiantes para que el proceso de enseñanza sea óptimo y lo más importante es que se pueda hacer uso formativo de los medios que generen experiencias significativas de adquisición de conocimientos.<br></br> Citando a la Unesco, esta establece varias directrices que permiten potenciar el aprendizaje a través del uso de la tecnología e incluso brindan capacitación a los docentes para crear contenidos y blogs, además de ampliar las opciones de conectividad a través de la elaboración de estrategias que promuevan el uso seguro y responsable de las herramientas tecnológicas.</p>
                                <p><ul>
                                    <li><span className='fw-semibold fst-italic'>Organizacional</span>, corresponde con el seguimiento y control de los procesos de formación tanto de docentes como de estudiantes , es decir, tiene que ver con la práctica institucional.</li>
                                    <li><span className='fw-semibold fst-italic'>Tecnológica</span>, es la herramienta a través de cual se dan los procesos de comunicación, docente-estudiante y estudiante-docente, además posee diversidad de instrumentos que sirven de apoyo para el desarrollo de las clases.</li>
                                    <li><span className='fw-semibold fst-italic'>Educativa</span>, es el área que permite la creación de los planes de estudio, objetivos de las asignaturas, distribución de contenido, entre otros elementos que colaboren para que el proceso de enseñanza y aprendizaje se dé forma satisfactoria.</li>
                                    <li><span className='fw-semibold fst-italic'>Impacto social</span>, es el que comprende los valores y opiniones de la praxis educativa en la educación virtual.</li>
                                </ul>
                                    La educación virtual aporta a la transformación del proceso educativo debido a que implica un proceso educativo amplio y de largo alcance que debe ser controlado a través de diferentes sistemas que den cuenta de su aporte a la práctica educativa, es un campo de emplea agentes innovadores para la construcción del conocimiento dándole brindándole autenticidad al aprendizaje.
                                </p><br></br>
                                <p><strong>Consideraciones finales</strong><br></br>
                                    <span>La educación virtual brinda elementos positivos en el proceso de enseñanza y aprendizaje. Además incrementa el interés por la adquisición de conocimientos dado que se emplean videos e imágenes que aportan al proceso de aprendizaje significativo, de igual forma brinda nuevas experiencias de aprendizaje a través del reforzamiento de conocimientos a través del planteamiento de problemas y la entrega de posibles soluciones. Si bien el uso de la educación tecnológica es cuestionado, cada año va tomando más fuerza a través de la implementación de programas que permiten mejorar la comprensión lectora, simuladores matemáticos y geométricos o programas de análisis lógico, lo que permite decir que la tecnología da un claro aporte positivo a la gestión educativa y académica.</span>
                                    <p>La tecnología facilita el aprendizaje autónomo y cambia la educación tradicional unidireccional por un sistema bidireccional donde todos aprenden a través del diálogo interactivo, además con el uso de la tecnología la enseñanza sigue manteniendo el segundo orden de importancia y lo que es realmente protagónico es el aprendizaje. Sin embargo, algunos países a pesar de los avances tecnológicos, se resisten a la implementación de las TIC's en los procesos educativos.</p>
                                    <p>La incorporación de la tecnología en los procesos de aprendizaje potencia acciones para los procesos de formación e investigación y contribuyen a la socialización y comprensión de contenidos de una gran cantidad de temas en la praxis educativa. Por ende, la educación virtual ha sido inserta en el contexto educativo de manera permanente y es implementada para la generación de estrategias que fortalezcan la socialización de información en las asignaturas y permite además vincular dicha información con el contexto social en el cual se encuentran inmersos estudiantes y docentes.</p>
                                    <p className='fw-semibold'>Finalmente, se puede decir que la educación virtual es un agente transformador de los procesos de aprendizaje debido a que tiene participación activa dentro del proceso formativo, permite un aprendizaje autónomo y responde a los requerimientos de la realidad educativa en la cual los individuos buscan potenciar su aprendizaje en su propio tiempo y espacio. Lo que les permite tener autocontrol y autodirección, siendo estudiantes independientes en su aprendizaje e interdependientes compartiendo conocimientos en el aprendizaje colaborativo.<br></br>
                                        Es así, como la educación que se da en ambientes virtuales o emplea los ambientes virtuales como apoyo en la formación de los estudiantes, permite la generación de conocimientos a través del aprendizaje significativo y con una estrategia de trabajo colaborativo; en el cual los docentes, estudiantes y la tecnología, se convierten en una triada que privilegia el sistema educativo. Estos elementos permitirán que el modelo de formación pedagógica, se fundamente en el constructivismo, es decir, es un modelo donde los individuos sean capaces de generar su propio sentido del conocimiento.</p>
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