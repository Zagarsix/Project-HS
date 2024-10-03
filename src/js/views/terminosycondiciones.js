import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConds = () => {
    return (<>
        <main className="flex-shrink-0" id="notFound">
            <h1 className="site-heading fw-bolder px-3 mx-3 py-1 my-1">
                <span style={{ color: "#0e408f" }}>Términos </span> <span style={{ color: "#ff8800" }}> y Condiciones</span>
            </h1>
            <div className='row justify-content-center'>
                <div className="py-3 px-4 px-md-2 mb-3 col-md-9 col-lg-8 col-xl-9">
                    <ol>
                        <li>
                            <h2 className="h5 m-3"> <strong>Aceptación de los Términos</strong></h2>
                            <p className="m-3">
                                Al registrarte y utilizar los servicios de Alianza, aceptas estos Términos y Condiciones. Si no estás de acuerdo, no uses nuestros servicios.<br />
                            </p>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Descripción de los Servicios</strong></h2>
                            <p className="m-3">
                                Alianza ofrece educación virtual en diversas materias, incluyendo acceso a recursos, clases en línea y apoyo académico.<br />
                            </p>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Registro y Responsabilidad</strong></h2>
                            <p className="m-3">
                                Al registrarte, te comprometes a proporcionar información veraz y actualizada. Eres responsable de mantener la confidencialidad de tus credenciales de acceso.<br />
                            </p>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Uso Aceptable</strong></h2>
                            <p className="m-3">
                                Te comprometes a usar nuestra plataforma de manera legal y ética, evitando comportamientos como acoso, fraude o uso de contenido protegido sin autorización.<br />
                            </p>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Propiedad Intelectual</strong></h2>
                            <p className="m-3">
                                Todos los contenidos de Colegio Virtual Alianza, incluyendo materiales educativos, gráficos y marcas, están protegidos por derechos de autor y otras leyes de propiedad intelectual.<br />
                            </p>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Limitación de Responsabilidad</strong></h2>
                            <p className="m-3">
                                Alianza no será responsable de daños directos, indirectos, incidentales o consecuentes que puedan surgir del uso de nuestra plataforma.<br />
                            </p>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Modificaciones a los Términos</strong></h2>
                            <p className="m-3">
                                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones serán efectivas al momento de su publicación en nuestra plataforma.<br />
                            </p>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Ley Aplicable</strong></h2>
                            <p className="m-3">
                                Estos términos se rigen por la Ley General de Educación N° 20.370 de la República de Chile.<br />
                            </p>
                        </li>
                    </ol>
                </div>
            </div>
            <div className='row justify-content-end'>
                <div className="py-3 px-4 px-md-5 mb-3 col-lg-6 col-xl-7 order-2 order-md-1">
                    <Link className="btn btn-xl p-2 m-2" to="/" style={{ width: "200px" }}>
                        Volver al Inicio <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </main>
    </>
    )
}


export default TermsAndConds;