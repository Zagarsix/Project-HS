import React from 'react';
import { NavLink, Link } from "react-router-dom";
import matricula from "../../img/bg-callout.jpg"

const Matriculas = () => {
  return <>
    <main className="flex-shrink-0">
      {/* Pricing section*/}
      {/* Header*/}
      <header className="masthead" style={{ backgroundImage: `url(${matricula})` }}>
        <div className="container position-relative px-5 px-lg-3">
          <div className="row gx-4 gx-lg-5 justify-content-around">
            <div className="col-md-12 col-lg-11 col-xl-10">
              <div className="text-center my-2">
                <h1 className="site-heading fw-bolder mb-1">
                  Matrículas 2024
                </h1>
                <p className="lead fw-normal text-black mb-1">
                  Entregando una educación personalizada para niños y jóvenes, bajo valores, principios y conceptos cristianos; dando apoyo a las familias en el proceso de aprendizaje de sus hijos. Contemplando los niveles desde enseñanza pre-básica a media, a través de una plataforma online y talleres presenciales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Pricing section*/}
      <section className="bg-light py-5">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bolder" style={{color:"green"}}>--- Aranceles 2024 ---</h1>
            <p className="lead fw-normal text-muted mb-0">
              Desde enseñanza pre-básica a media 
            </p>
          </div>
          <div className="row gx-5 justify-content-center">
            {/* Pricing card free*/}
            <div className="col-lg-6 col-xl-4">
              <div className="card mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold text-muted">
                    Free
                  </div>
                  <div className="mb-3">
                    <span className="display-4 fw-bold">$0</span>
                    <span className="text-muted">/ mo.</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      <strong>1 users</strong>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      5GB storage
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Unlimited public projects
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Community access
                    </li>
                    <li className="mb-2 text-muted">
                      <i className="bi bi-x" />
                      Unlimited private projects
                    </li>
                    <li className="mb-2 text-muted">
                      <i className="bi bi-x" />
                      Dedicated support
                    </li>
                    <li className="mb-2 text-muted">
                      <i className="bi bi-x" />
                      Free linked domain
                    </li>
                    <li className="text-muted">
                      <i className="bi bi-x" />
                      Monthly status reports
                    </li>
                  </ul>
                  <div className="d-grid">
                    <NavLink className="btn btn-xl" style={{ background: "green" }} to="#!">
                      Choose plan
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* Pricing card pro*/}
            <div className="col-lg-6 col-xl-4">
              <div className="card mb-5 mb-xl-0">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold">
                    <i className="bi bi-star-fill text-warning" />
                    Pro
                  </div>
                  <div className="mb-3">
                    <span className="display-4 fw-bold">$9</span>
                    <span className="text-muted">/ mo.</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      <strong>5 users</strong>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      5GB storage
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Unlimited public projects
                    </li>
                    <li className="mb-2">
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
                    </li>
                  </ul>
                  <div className="d-grid">
                    <NavLink className="btn btn-xl" style={{ background: "green" }} to="#!">
                      Choose plan
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* Pricing card enterprise*/}
            <div className="col-lg-6 col-xl-4">
              <div className="card">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold text-muted">
                    Enterprise
                  </div>
                  <div className="mb-3">
                    <span className="display-4 fw-bold">$49</span>
                    <span className="text-muted">/ mo.</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      <strong>Unlimited users</strong>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      5GB storage
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary" />
                      Unlimited public projects
                    </li>
                    <li className="mb-2">
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
                      <strong>Unlimited</strong>
                      linked domains
                    </li>
                    <li className="text-muted">
                      <i className="bi bi-check text-primary" />
                      Monthly status reports
                    </li>
                  </ul>
                  <div className="d-grid">
                    <NavLink className="btn btn-xl" style={{ background: "green" }} to="#!">
                      Choose plan
                    </NavLink>
                  </div>
                </div>
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

export default Matriculas;