import React from 'react';
import { NavLink } from "react-router-dom";
import apple from "../../img/rayasLapices.jpg";

const Blog = () => {
  return <>
    {/* Header*/}
    <header className="masthead" style={{ backgroundImage: `url(${apple})` }}>
      <div className="container position-relative px-5 px-lg-3">
        <div className="row gx-4 gx-lg-5 justify-content-around">
          <div className="col-md-12 col-lg-11 col-xl-10">
            <div className="text-center my-2">
              <h1 className="site-heading fw-bolder mb-1">
                Nuestro Blog
              </h1>
              <p className="lead-header fw-normal text-black mb-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                est, ut esse NavLink labore aliquam beatae expedita. Blanditiis impedit
                numquam libero molestiae et fugit cupiditate, quibusdam expedita,
                maiores eaque quisquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Page Content*/}
    <main className="flex-shrink-0">
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bolder">El Pacto responde</h1>
            <p className="lead fw-normal text-muted mb-0">¿Cómo te podemos ayudar?</p>
          </div>
          <div className="row gx-5">
            <div className="col-xl-8">
              {/* FAQ Accordion 1*/}
              <h2 className="fw-bolder mb-3">Aranceles &amp; facturación</h2>
              <div className="accordion mb-5" id="accordionExample">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse show"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default variables.
                      It's also worth noting that just about any HTML can go
                      within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default variables.
                      It's also worth noting that just about any HTML can go
                      within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default variables.
                      It's also worth noting that just about any HTML can go
                      within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
              </div>
              {/* FAQ Accordion 2*/}
              <h2 className="fw-bolder mb-3">Talleres presenciales</h2>
              <div className="accordion mb-5 mb-xl-0" id="accordionExample2">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse show"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong>
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default variables.
                      It's also worth noting that just about any HTML can go
                      within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <strong>This is the second item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default variables.
                      It's also worth noting that just about any HTML can go
                      within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>
                      It is hidden by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element. These
                      classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any
                      of this with custom CSS or overriding our default variables.
                      It's also worth noting that just about any HTML can go
                      within the
                      <code>.accordion-body</code>, though the transition does
                      limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card border-0 bg-light mt-xl-5">
                <div className="card-body p-4 py-lg-5">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <div className="h6 fw-bolder">¿Tienes más preguntas?</div>
                      <p className="text-muted mb-4">
                        Escríbenos a
                        <br />
                        <NavLink to="#!">soporte@elpactohs.cl</NavLink>
                      </p>
                      <div className="h6 fw-bolder">Síguenos</div>
                      <NavLink className="fs-5 px-2 link-dark" to="#!">
                        <i className="fa-brands fa-square-facebook" style={{ color: "blue" }}/>
                      </NavLink>
                      <NavLink className="fs-5 px-2 link-dark" to="#!">
                        <i className="fa-brands fa-square-instagram" style={{ color: "purple" }}/>
                      </NavLink>
                      <NavLink className="fs-5 px-2 link-dark" to="#!">
                        <i className="fa-brands fa-linkedin" style={{ color: "teal" }}/>
                      </NavLink>
                      <NavLink className="fs-5 px-2 link-dark" to="#!">
                        <i className="fa-brands fa-youtube" style={{ color: "red" }}/>
                      </NavLink>
                    </div>
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

export default Blog;