import React from 'react';
import { NavLink } from "react-router-dom";
import matricula from "../../img/bg-section/home-bg.jpg"
import form from "../../img/form-and-meeting.png";
import pay from "../../img/pay-tuition.png";
import welcomeEmail from "../../img/confirm-email.png";

const Matriculas = () => {
  return <>
    <main className="flex-shrink-0">
      {/* Header*/}
      <header className="masthead" style={{ backgroundImage: `url(${matricula})` }}>
        <div className="container position-relative px-4 px-lg-3">
          <div className="row gx-4 gx-lg-5 justify-content-around">
            <div className="col-md-12 col-lg-11 col-xl-10">
              <div className="text-center my-2">
                <h1 className="site-heading fw-bolder mb-1">
                  <span>Admisión </span> <span style={{ color: "#ff6600", fontWeight: "bold" }}> 2025</span>
                </h1>
                <p className="lead-header mb-5">
                  <strong>Modalidad de estudio b-learning: </strong>clases virtuales con una duración de 1 hora pedagógica. Y a la vez, se contemplan talleres presenciales con que el alumno puede complementar su formación.
                  <br></br>
                  <strong>Horario recomendado: de 09:00 a 14:00 hrs.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Pricing section*/}
      <section className="bg-light py-1 mb-5">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bolder" style={{ color: "#0e408f" }}>Aranceles</h1>
            <p className="lead fw-normal text-muted mb-0">
              Desde enseñanza pre-básica a básica completa
            </p>
            <p className="lead fw-normal text-black mb-1">
              ¡Para comenzar un NUEVO año, con una NUEVA jornada de estudios!
            </p>
          </div>
          <div className="row gx-5 justify-content-center py-4 rounded-4" id="cardPricing">
            {/* Pricing card matrícula*/}
            <div className="col-lg-6 col-xl-4">
              <div className="card mb-5 mb-xl-0">
                <div className="card-body p-4">
                  <div className="text-uppercase fw-bold">
                    <i className="bi bi-bookmark-star-fill text-success" />
                    Matrícula
                  </div>
                  <div className="mb-4">
                    <span className="display-4 fw-bold" style={{ color: "#ff8800" }}>$55.000</span>
                    <span className="text-muted">/ Anual</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      <strong>En caso de desistir, 50% reembolsable</strong>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Clases sincrónicas
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Accede al descuento por <strong>matrícula familiar</strong>
                    </li>
                    {/* <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Acceso a retroalimentación
                    </li>
                    <li className="mb-2 text-muted">
                      <i className="bi bi-x" />
                      Mentorías 1 a 1
                    </li>
                    <li className="mb-2 text-muted">
                      <i className="bi bi-x" />
                      Lorem ipsum
                    </li>
                    <li className="mb-2 text-muted">
                      <i className="bi bi-x" />
                      Free linked domain
                    </li>
                    <li className="text-muted">
                      <i className="bi bi-x" />
                      Monthly status reports
                    </li> */}
                  </ul>
                  <div className="d-grid">
                    <NavLink className="btn btn-xl" to="/Contacto">
                      Solicitar entrevista
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* Pricing card Mensualidad*/}
            <div className="col-lg-6 col-xl-4">
              <div className="card mb-5 mb-xl-0">
                <div className="card-body p-4">
                  <div className="text-uppercase fw-bold">
                    <i className="bi bi-star-fill text-warning" />
                    Mensualidad
                  </div>
                  <div className="mb-4">
                    <span className="display-4 fw-bold" style={{ color: "#ff8800" }}>$79.000</span>
                    <span className="text-muted">/ 10 cuotas</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      <strong>De marzo a diciembre</strong>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Accede al <strong>10% de descuento</strong> por pago anual
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      10 alumnos máximo por nivel
                    </li>
                    {/* <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Community access
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Unlimited private projects
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Dedicated support
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Free linked domain
                    </li>
                    <li className="text-muted">
                      <i className="bi bi-x" />
                      Monthly status reports
                    </li> */}
                  </ul>
                  {/* <div className="d-grid">
                    <NavLink className="btn btn-xl" id="buttonSec" to="#!">
                      Matricular
                    </NavLink>
                  </div> */}
                </div>
              </div>
            </div>
            {/* Pricing card Talleres*/}
            <div className="col-lg-6 col-xl-4">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-uppercase fw-bold">
                    <i className="bi bi-file-music-fill text-info" />
                    Talleres presenciales
                  </div>
                  <div className="mb-4">
                    <span className="text-muted">desde </span>
                    <span className="display-4 fw-bold" style={{ color: "#ff8800" }}>$9.000</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      <strong>Valor mensual por taller</strong>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Música (piano inicial), acondicionamiento físico, inglés y cocina entretenida.
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Horario: entre 12:00 y 14:00 hrs
                    </li>
                    {/* <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Community access
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Unlimited private
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Dedicated support
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      <strong>Unlimited access</strong>
                      
                    </li> */}
                  </ul>
                  {/* <div className="d-grid">
                    <NavLink className="btn btn-xl" to="#!">
                      Elegir
                    </NavLink>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pasos para matricular*/}
      <section className="bg-light py-3 mt-4 mb-5">
        <div className="container px-5 my-5">
          <h1 className="fw-bolder mb-5" style={{ color: "#0e408f" }}>¿Cómo matricular a tu hijo en CVA?</h1>
          {/* Paso 1*/}
          <div className="row gx-5 mb-5">
            <div className="col-lg-7 text-start py-3 mb-5">
              <span className="text-uppercase fw-normal mb-0" style={{ color: "#3dfffb", background: "#0e408f", borderRadius: ".5rem", padding: ".6rem" }}>
                Paso 1:
              </span>
              <p className="fw-normal text-muted mb-1">
                Debes llenar el formulario de admisión, en el cual podrás agendar una reunión vía zoom, para entregarte información detallada.
              </p>
              <a className="btn btn-xl m-2" id="buttonSec" target='_blank' rel='noopener noreferrer' href="https://forms.gle/B22vLW8RmatW14RB8">Formulario de admisión <i className="fa-solid fa-chevron-right"></i></a>
            </div>
            <div className="col-lg-5 mb-5 text-center">
              <img
                className="img-fluid"
                width="200"
                height="200"
                src={form}
                alt="ilustración de formulario"
              />
            </div>
          </div>
          {/* Paso 2*/}
          <div className="row gx-5 mt-5 mb-5">
            <div className="col-lg-5 mb-5 text-center order-last order-lg-first">
              <img
                className="img-fluid"
                width="200"
                height="200"
                src={pay}
                alt="ilustración de pago"
              />
            </div>
            <div className="col-lg-7 text-start py-3 mb-5">
              <span className="text-uppercase fw-normal mb-0" style={{ color: "#0e408f", background: "#ff8800", borderRadius: ".5rem", padding: ".6rem" }}>
                Paso 2:
              </span>
              <p className="fw-normal text-muted mb-1">
                Inscripción y formalización de la matrícula (pago en efectivo ó transferencia bancaria) según las instrucciones dadas por el área administrativa.
              </p>
            </div>
          </div>
          {/* Paso 3*/}
          <div className="row gx-5 mt-5 mb-5">
            <div className="col-lg-7 text-start py-3 mb-5">
              <span className="text-uppercase fw-normal mb-0" style={{ color: "#3dfffb", background: "#0e408f", borderRadius: ".5rem", padding: ".6rem" }}>
                Paso 3:
              </span>
              <p className="fw-normal text-muted mb-1">
                Recibirás un correo de bienvenida. Posteriormente, en febrero del 2025, recibirás un correo con el acceso al Aula Virtual (usuario y contraseña).
              </p>
            </div>
            <div className="col-lg-5 mb-5 text-center">
              <img
                className="img-fluid"
                width="200"
                height="200"
                src={welcomeEmail}
                alt="ilustración de correo de bienvenida"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    {/* Bootstrap core JS*/}
    {/* Core theme JS*/}
  </>

}

export default Matriculas;