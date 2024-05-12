import React from 'react';
import { Link } from "react-router-dom";

import pencil from "../../img/lapices-bg.jpg";
import chave from "../../img/Ap-Isabel.jpg";
import children from "../../img/childrenSchool.jpg";
import notebook from "../../img/about-bg.jpg";
import parents from "../../img/ParentsAndChildren.jpg";


const Home = () => {
  return <>
    <main className="flex-shrink-0">
      {/* Header*/}
      {/* -- Page Header-- */}
      <header className="masthead" style={{ backgroundImage: `url(${pencil})`}}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-start">
            <div className="col-md-12 col-lg-8 col-xl-10">
              <div className="site-heading">
                <h1><span style={{ fontStyle: "italic", fontSize:"30px" }}>Homeschool&ensp; </span> El Pacto</h1>
                <span className="subheading">«...Yo hago un pacto con ustedes y les prometo que mi Espíritu y las enseñanzas que les he dado, no se apartarán jamás de ustedes ni de sus hijos...»<br />- Isaías 59:21 </span>
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
              <h2><span style={{ color: "#131c96" }}>El Pacto HomeSchool</span> es el lugar perfecto para que tus hijos den sus próximos pasos!</h2>
              <p className="lead mb-3">
                Experimenta esta nueva modalidad de estudio híbrida. Clases online y talleres presenciales. No los dejes sin su&nbsp;
                <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/matriculas">matrícula!</Link>
              </p>
              <Link className="btn btn-xl" to="/contacto" style={{ background: "#acaf00" }}>
                Contáctanos!
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services*/}
      <section className="content-section text-white text-center py-1 py-lg-5 mb-2" id="services">
        <div className="containerServices px-4 px-lg-5 mt-1 mb-2">
          <div className="content-section-heading">
            <h3 className="mb-0">Marcamos</h3>
            <h2 className="mb-5" style={{ color: "#38d338" }}>la diferencia:</h2>
          </div>
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="fa-solid fa-book-open fa-2xl" />
              </span>
              <h4>
                <strong>Educación personalizada</strong>
              </h4>
              <p className="text-faded mb-0">Looks great on any screen size!</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="fa-solid fa-cross fa-2xl" />
              </span>
              <h4>
                <strong>Valores y principios cristianos</strong>
              </h4>
              <p className="text-faded mb-0">Freshly redesigned for Bootstrap 5.</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="fa-solid fa-hands-holding-child fa-2xl" />
              </span>
              <h4>
                <strong>Formación integral</strong>
              </h4>
              <p className="text-faded mb-0">
                Cada vez más los padres prefieren comenzar con
                <i className="fas fa-heart" /> HomeSchool El Pacto!
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="fa-solid fa-hand-holding-dollar fa-2xl" />
              </span>
              <h4>
                <strong>Precios asequibles</strong>
              </h4>
              <p className="text-faded mb-0">Facilidades de pago. Tarjetas de crédito, débito y efectivo.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Features section*/}
      <section className="py-3" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <i className="fa-solid fa-ranking-star fa-5x mb-2" style={{ color: "#38d338" }} />
              <h2 className="fw-bolder mb-0" style={{ color: "#131c96" }}>Marcando la diferencia:</h2>
            </div>
            <div className="col-lg-8">
              <div className="row gx-5 row-cols-1 row-cols-md-2">
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-collection" />
                  </div>
                  <h2 className="h5"><i className="fa-solid fa-magnifying-glass-chart fa-2xl" style={{ color: "#38d338" }}/> Desarrollo focalizado</h2>
                  <p className="mb-0">
                    Clases online y presencial. Contempla los contenidos  y malla curricular del Mineduc.<br />
                    <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/contacto"> Leer más...</Link>
                  </p>
                </div>
                <div className="col mb-5 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-building" />
                  </div>
                  <h2 className="h5"><i className="fa-solid fa-hand-holding-dollar fa-2xl" style={{ color: "#38d338" }} /> Métodos de pago</h2>
                  <p className="mb-0">
                    Contamos con todo medio de pago: tarjeta de crédito, transferencia y efectivo.<br />
                    <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/matriculas"> Leer más...</Link>
                  </p>
                </div>
                <div className="col mb-5 mb-md-0 h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-toggles2" />
                  </div>
                  <h2 className="h5"><i className="fa-solid fa-briefcase-medical fa-2xl" style={{ color: "#38d338" }} /> Docencia de alto nivel</h2>
                  <p className="mb-0">
                    Lorem ipsum bla bla bla bla bla vbla bla<br />
                    <Link className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/nosotros"> Leer más...</Link>
                  </p>
                </div>
                <div className="col h-100">
                  <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-toggles2" />
                  </div>
                  <h2 className="h5"><i className="fa-solid fa-user-doctor fa-2xl" style={{ color: "#45d65d" }} /> Talleres complementarios</h2>
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
      <div className="py-2" id="testimonial">
        <div className="container px-5 my-3 text-white">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10 col-xl-7">
              <div className="text-center">
                <div className="fs-4 mb-4 fst-italic">
                  "Trabajando con Homeschool El Pacto ha sido de bendición para el desarrollo de....
                  resto de palabras que no ha dicho, pero que podrá decir, para sacar adelante este Proyecto!"
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="rounded-circle me-3"
                    src={chave}
                    alt="Apóstol Isabel riendo"
                    width="120"
                    height="120"
                  />
                  <div className="text-muted fw-bold">
                    Isabel Fernández
                    <span className="fw-bold text-primary mx-1">/</span>
                    Apóstol MCA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog preview section*/}
      <section className="py-3">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="text-center">
                <h2 className="fw-bolder" style={{ color: "#131c96" }}>--- De nuestro Blog ---</h2>
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
                  alt="..."
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
                  alt="..."
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
                  alt="..."
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
          <aside className="rounded-3 p-4 p-sm-5 mt-4" id="callToAction">
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