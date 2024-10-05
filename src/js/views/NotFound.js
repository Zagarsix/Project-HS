import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../img/not-found.png';

const NotFound = () => {
    return (<>
        <main className="flex-shrink-0" id="notFound">
            <h1 className="site-heading fw-bolder px-4 mx-4 py-1 my-1">
                <span style={{ color: "#ff8800" }}>Error 404: </span> <span style={{ color: "#0e408f" }}> Página no disponible.</span>
            </h1>
            <div className='row justify-content-center'>
                <div className="py-3 px-4 px-md-5 mb-3 col-lg-6 col-xl-7 order-2 order-md-1">
                    <h2 className="h5 m-3"><i className="fa-regular fa-face-surprise fa-2x p-1" /> ¡Ups! ¿Te has equivocado de enlace?</h2>
                    <p className="m-3">
                        No hemos encontrado la página que estás buscando.<br />
                        Intenta volver al inicio de <span><strong>Colegio Virtual Alianza.</strong></span><br />
                    </p>
                    <Link className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bolder p-2 m-2' to="/">
                        <i className="fa-solid fa-book-open-reader fa-3x" style={{ color: "#0e408f" }}></i></Link>
                    <Link className="btn btn-xl p-2 m-2" to="/" style={{ width: "200px" }}>
                        Inicio
                    </Link>
                </div>
                {/* Illustration*/}
                <div className='col-lg-6 col-xl-5 mt-3 py-2 px-4 order-md-2 order-1'>
                    <img
                        className="img-fluid mb-2 px-2"
                        width="250"
                        height="250"
                        src={notfound}
                        alt="ilustración persona en problemas"
                    />
                </div>
            </div>
        </main>
    </>
    )
}


export default NotFound;