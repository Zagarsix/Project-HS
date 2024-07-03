import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (<>
        <main className="flex-shrink-0" id="notFound">
            <h1 className='col p-4 m-4 h-100 py-3 my-3'>
                Página no encontrada (error 404).
            </h1>
            <div className="col p-4 m-4 mb-5 h-100">
                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
                    <i className="bi bi-building" />
                </div>
                <h2 className="h5 m-3"><i className="fa-regular fa-face-surprise fa-2x" /> ¡Ups! ¿Te has equivocado de enlace?</h2>
                <p className="fw-bolder m-3">
                    No hemos encontrado la página que estás buscando.<br />
                    Intenta volver al inicio de Colegio Virtual Alianza.<br />
                </p>
                <Link className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-bolder p-2 m-2' to="/">
                    <i className="fa-solid fa-book-open-reader fa-3x"></i> Inicio</Link>
            </div>
        </main>
    </>
    )
}


export default NotFound;