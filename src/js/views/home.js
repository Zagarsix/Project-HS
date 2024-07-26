import React from 'react';
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';

import pencil from "../../img/ApplesBooksPencils.jpg";
import children from "../../img/childrenSchool.jpg";
import notebook from "../../img/about-bg.jpg";
import parents from "../../img/ParentsAndChildren.jpg";
import social from "../../img/social-media.png";
import TestimonialCarousel from "../component/carousel";


const Home = () => {
  return <>
    <main className="flex-shrink-0">
      {/* Header*/}
      {/* -- Page Header-- */}
      <header className="masthead" style={{ backgroundImage: `url(${pencil})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-start">
            <div className="col-md-12 col-lg-12 col-xl-10">
              <div className="site-heading">
                <h1 id="specialName" style={{ fontWeight: "bolder", color: "white" }}>Educación &nbsp;</h1>
                <h2 className="subtittle" style={{ color: "white", fontWeight: "bold", fontStyle: "italic" }}>
                  <Typewriter
                    words={['online!', 'cristiana!', 'personalizada!', 'flexible!', 'innovadora!', 'de calidad!']}
                    loop cursor delaySpeed={2000}
                    cursorStyle='|'
                  /></h2>
                <span className="subheading col-12">«...Yo hago un pacto con ustedes y les prometo que mi Espíritu y las enseñanzas que les he dado, no se apartarán jamás de ustedes ni de sus hijos...»<br />- Isaías 59:21 </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* About*/}
      <section className="content-section bg-light py-1 py-lg-4 mb-5" id="about">
        <div className="container px-4 px-lg-5 text-center">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-10">
              <h3><span style={{ color: "#ff8800" }}>Colegio Virtual</span><span style={{ fontWeight: "bolder", color: "#0e408f" }}> Alianza</span> es el lugar perfecto para que tus hijos den sus próximos pasos!</h3>
              <p className="lead mb-2">
                Experimenta esta nueva modalidad de estudio <strong>b-learning:</strong> clases online y talleres presenciales. No los dejes sin su&nbsp;
                <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/matriculas">matrícula!</Link>
              </p>
              <Link className="btn btn-xl m-2" to="/contacto">
                Contáctanos!
              </Link>
              <Link className="btn btn-xl m-2" id="buttonSec" to="/nosotros">
                Conoce de nosotros {'>'}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services*/}
      <section className="content-section text-white text-center py-1 py-lg-3 mb-2" id="services">
        <div className="containerServices px-4 px-lg-3 mt-2 mb-0">
          <div className="content-section-heading mb-5">
            <h2 className="mb-2">Bienvenidos a
              <span className="mb-1" style={{ color: "#ff8800" }}> Alianza</span></h2>
            <p> Somos la alternativa ideal a la educación tradicional. Ofrecemos un enfoque innovador basado en la modalidad de Homeschooling, diseñado para brindar una experiencia educativa flexible, personalizada y en armonía con las necesidades de nuestros estudiantes y sus familias.</p>
          </div>
          <div className="row gx-4 gx-lg-5 mt-5" style={{ color: "#3dfffb" }}>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="fa-solid fa-id-card fa-2xl" />
              </span>
              <h4>
                <span>Atención Personalizada</span>
              </h4>
              <p className="text-white-50 mb-0">Cada estudiante recibe una educación adaptada a sus necesidades y capacidades, asegurando un aprendizaje efectivo y significativo.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="fa-solid fa-book-bible fa-2xl" />
              </span>
              <h4>
                <span>Valores y Principios Cristianos</span>
              </h4>
              <p className="text-white-50 mb-0">Creemos que una educación completa debe abarcar tanto el desarrollo intelectual como el moral, preparando a nuestros alumnos para ser ciudadanos responsables y éticos.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="fa-solid fa-hands-holding-child fa-2xl" />
              </span>
              <h4>
                <span>Formación Integral</span>
              </h4>
              <p className="text-white-50 mb-0">
                Más tiempo para explorar intereses personales y desarrollar habilidades en áreas como deportes, arte y otras actividades extracurriculares.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="fa-solid fa-people-roof fa-2xl" />
              </span>
              <h4>
                <span>Entorno Familiar</span>
              </h4>
              <p className="text-white-50 mb-0">Fomentamos un entorno de aprendizaje seguro y confortable en el hogar, permitiendo una mayor participación de la familia en el proceso educativo.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Features section*/}
      <section className="py-3" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <img
                className="img-fluid mb-2 px-2"
                width="250"
                height="250"
                src={social}
                alt="ilustración social media"
              />
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    {/* <i className="bi bi-collection" /> */}
                  </div>
                  <h2 className="h5"><i className="fa-solid fa-magnifying-glass-chart fa-2xl p-1 m-1" style={{ color: "#0e408f" }} /> Innovación pedagógica</h2>
                  <p className="mb-0">
                    Utilizamos las últimas tecnologías y metodologías educativas para ofrecer una experiencia de aprendizaje dinámica e interactiva.<br />
                    <Link className='link-info link-offset-2 link-underline-opacity-75 link-underline-opacity-100-hover' to="/contacto"> Leer más...</Link>
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    {/* <i className="bi bi-building" /> */}
                  </div>
                  <h2 className="h5"><i className="fa-solid fa-hand-holding-dollar fa-2xl p-1 m-1" style={{ color: "#0e408f" }} /> Métodos de pago</h2>
                  <p className="mb-0">
                    Contamos con todo medio de pago: tarjeta de crédito, transferencia y efectivo.<br />
                    <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/matriculas"> Leer más...</Link>
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    {/* <i className="bi bi-toggles2" /> */}
                  </div>
                  <h2 className="h5"><i className="fa-solid fa-briefcase-medical fa-2xl p-1 m-1" style={{ color: "#0e408f" }} /> Docencia de alto nivel</h2>
                  <p className="mb-0">
                    Clases online y presencial. Contempla los contenidos  y malla curricular del Mineduc.<br />
                    <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/nosotros"> Leer más...</Link>
                  </p>
                </div>
                <div className="col h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                  </div>
                  <h2 className="h5"><i className="fa-solid fa-user-doctor fa-2xl p-1 m-1" style={{ color: "#0e408f" }} /> Talleres complementarios</h2>
                  <p className="mb-0">
                    Paragraph of text beneath the heading to explain the heading.<br />
                    <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/blog"> Leer más...</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial section*/}
      <div className="testimonial py-5" id="testimonial" style={{ backgroundImage: `url(${pencil})` }}>
        <div className="container px-5 my-3 text-black">
          <TestimonialCarousel />
        </div>
      </div>
      {/* Blog preview section*/}
      <section className="py-3">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder" style={{ color: "#0e408f" }}>--- De nuestro Blog ---</h2>
                <p className="lead fw-normal mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                  fugit ratione dicta mollitia. Officiis ad.
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  src={children}
                  alt="niños viendo un notebook"
                />
                <div className="card-body p-4">
                  <div className="badge bg-gradient rounded-pill mb-2">
                    News
                  </div>
                  <Link
                    className="text-decoration-none link-dark stretched-link"
                    to="#!"
                  >
                    <h5 className="card-title mb-3">Blog post title</h5>
                  </Link>
                  <p className="card-text mb-0">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle me-3"
                        src="https://dummyimage.com/40x40/ced4da/6c757d"
                        alt="..."
                      />
                      <div className="small">
                        <div className="fw-bold">Kelly Rowan</div>
                        <div className="text-muted">
                          March 12, 2022 · 6 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  src={notebook}
                  alt="manoa en un notebook"
                />
                <div className="card-body p-4">
                  <div className="badge bg-gradient rounded-pill mb-2">
                    Media
                  </div>
                  <Link
                    className="text-decoration-none link-dark stretched-link"
                    to="#!"
                  >
                    <h5 className="card-title mb-3">Another blog post title</h5>
                  </Link>
                  <p className="card-text mb-0">
                    This text is Link bit longer to illustrate the adaptive height of
                    each card. Some quick example text to build on the card title
                    and make up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle me-3"
                        src="https://dummyimage.com/40x40/ced4da/6c757d"
                        alt="..."
                      />
                      <div className="small">
                        <div className="fw-bold">Josiah Barclay</div>
                        <div className="text-muted">
                          March 23, 2022 · 4 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 shadow border-0">
                <img
                  className="card-img-top"
                  src={parents}
                  alt="papá y mamá estudiando con su hijo"
                />
                <div className="card-body p-4">
                  <div className="badge bg-gradient rounded-pill mb-2">
                    News
                  </div>
                  <Link
                    className="text-decoration-none link-dark stretched-link"
                    to="#!"
                  >
                    <h5 className="card-title mb-3">
                      The last blog post title is Link little bit longer than the
                      others
                    </h5>
                  </Link>
                  <p className="card-text mb-0">
                    Some more quick example text to build on the card title and
                    make up the bulk of the card's content.
                  </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle me-3"
                        src="https://dummyimage.com/40x40/ced4da/6c757d"
                        alt="..."
                      />
                      <div className="small">
                        <div className="fw-bold">Evelyn Martinez</div>
                        <div className="text-muted">
                          April 2, 2022 · 10 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Call to action*/}
          <aside className="rounded-4 p-4 p-sm-5 mt-4" id="callToAction">
            <div className="d-flex align-items-center justify-content-between flex-column flex-xl-row text-center text-xl-start">
              <div className="mb-4 mb-xl-0">
                <div className="fs-3 fw-bold text-white">
                  Si necesitas mayor información, escríbenos.
                </div>
                <div className="fs-5 text-white-50">
                  Suscríbete para estar al día con nuestras noticias.
                </div>
              </div>
              <div className="ms-xl-4">
                <div className="input-group mb-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingresa tu email"
                    aria-label="Email address..."
                    aria-describedby="button-newsletter"
                  />
                  <button
                    className="btn btn-outline-light"
                    id="button-newsletter"
                    type="button"
                  >
                    Suscríbete!
                  </button>
                </div>
                <div className="fs-6 text-white-50">
                  Nos preocupamos por la privacidad y nunca compartiremos tus datos.
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
    {/* Bootstrap core JS*/}
    {/* Core theme JS*/}
  </>
}

export default Home;