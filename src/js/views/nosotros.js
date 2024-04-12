import React from 'react';
import { NavLink } from "react-router-dom";
import homeBG from "../../img/home-bg.jpg";
import elpactoV2 from "../../img/Elpacto-V3.png";
import desarrollo from "../../img/blog-bg.jpg";

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
                                    Nuestra misión es entregar una formación académica de calidad para todos
                                </h1>
                                <p className="lead fw-normal text-black mb-5">
                                    Entregando una educación personalizada para niños y jóvenes, bajo valores, principios y conceptos cristianos; dando apoyo a las familias en el proceso de aprendizaje de sus hijos. Contemplando los niveles desde enseñanza pre-básica a media, a través de una plataforma online y talleres presenciales.
                                </p>
                                <NavLink className="btn btn-lg" to="#scroll-target" style={{ background: "green" }}>
                                    Lee nuestra historia
                                </NavLink>
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
                                src={elpactoV2}
                                alt="..."
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder" style={{color:"green"}}>Visión</h2>
                            <p className="lead fw-normal text-muted mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                est, ut esse NavLink labore aliquam beatae expedita. Blanditiis impedit
                                numquam libero molestiae et fugit cupiditate, quibusdam expedita,
                                maiores eaque quisquam.
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
                            <h2 className="fw-bolder" style={{color:"green"}}>Desarrollo &amp; más allá</h2>
                            <p className="lead fw-normal text-muted mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                                est, ut esse NavLink labore aliquam beatae expedita. Blanditiis impedit
                                numquam libero molestiae et fugit cupiditate, quibusdam expedita,
                                maiores eaque quisquam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team members section*/}
            <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder" style={{color:"green"}}>--- Nuestro equipo ---</h2>
                        <p className="lead fw-normal text-muted mb-5">
                            Dedicados a la calidad &amp; el éxito
                        </p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src="https://dummyimage.com/150x150/ced4da/6c757d"
                                    alt="..."
                                />
                                <h5 className="fw-bolder">Ibbie Eckart</h5>
                                <div className="fst-italic text-muted">Founder &amp; CEO</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src="https://dummyimage.com/150x150/ced4da/6c757d"
                                    alt="..."
                                />
                                <h5 className="fw-bolder">Arden Vasek</h5>
                                <div className="fst-italic text-muted">CFO</div>
                            </div>
                        </div>
                        <div className="col mb-5 mb-5 mb-sm-0">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src="https://dummyimage.com/150x150/ced4da/6c757d"
                                    alt="..."
                                />
                                <h5 className="fw-bolder">Toribio Nerthus</h5>
                                <div className="fst-italic text-muted">Operations Manager</div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img
                                    className="img-fluid rounded-circle mb-4 px-4"
                                    src="https://dummyimage.com/150x150/ced4da/6c757d"
                                    alt="..."
                                />
                                <h5 className="fw-bolder">Malvina Cilla</h5>
                                <div className="fst-italic text-muted">CTO</div>
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