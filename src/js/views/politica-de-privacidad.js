import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (<>
        <main className="flex-shrink-0" id="notFound">
            <h1 className="site-heading fw-bolder px-3 mx-3 py-1 my-1">
                <span style={{ color: "#0e408f" }}>Política de </span> <span style={{ color: "#ff8800" }}>Privacidad</span>
            </h1>
            <div className='row justify-content-center'>
                <div className="lead-norm py-3 px-4 px-md-2 mb-3 col-md-9 col-lg-8 col-xl-9">
                    <ol>
                        <li>
                            <h2 className="h5 m-3"> <strong>Introducción</strong></h2>
                            <p className="m-3">
                                La presente Política de Privacidad describe cómo Alianza recoge, utiliza y protege la información personal de sus usuarios. Al utilizar nuestros servicios, aceptas la recopilación y uso de información de acuerdo con esta política.<br />
                            </p>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Información que Recogemos</strong></h2>
                            <ul className='m-3'>
                                <li><strong>Información Personal:</strong> Nombre, dirección de correo electrónico, número de teléfono, dirección física.</li>
                                <li><strong>Información Académica:</strong> Historial académico, resultados de exámenes, participación en actividades.</li>
                                <li><strong>Datos de Uso:</strong> Información sobre cómo accedes y usas nuestra plataforma.</li>
                            </ul>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Uso de la Información</strong></h2>
                            <p className="m-3">
                                Utilizamos la información recopilada para:
                            </p>
                            <ul>
                                <li>Proporcionar y gestionar nuestros servicios educativos.</li>
                                <li>Mejorar la calidad de nuestra plataforma.</li>
                                <li>Comunicarte sobre novedades y actualizaciones.</li>
                                <li>Cumplir con obligaciones legales.</li>
                            </ul>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Protección de Datos</strong></h2>
                            <p className="m-3">
                                Implementamos medidas de seguridad para proteger tu información personal contra accesos no autorizados, alteraciones, divulgación o destrucción.<br />
                            </p>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Compartición de Información</strong></h2>
                            <p className="m-3">
                                No compartimos tu información personal con terceros, excepto en los siguientes casos:
                            </p>
                            <ul>
                                <li>
                                    Con tu consentimiento.</li>
                                <li>Para cumplir con la ley o procesos legales.</li>
                                <li>Para proteger los derechos y la seguridad de Alianza y sus usuarios.</li>
                            </ul>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Derechos de los Usuarios</strong></h2>
                            <p className="m-3">
                                Tienes derecho a acceder, rectificar y eliminar tu información personal. Para ejercer estos derechos, contáctanos a través de la dirección de correo electrónico proporcionada en nuestra plataforma.<br />
                            </p>
                        </li>
                        <li>
                            <h2 className="h5 m-3"> <strong>Cambios en la Política de Privacidad</strong></h2>
                            <p className="m-3">
                                Nos reservamos el derecho a actualizar esta política. Notificaremos a los usuarios sobre cualquier cambio significativo.<br />
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


export default PrivacyPolicy;