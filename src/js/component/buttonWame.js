import React from 'react';
import contact from "../../img/what5.png";

const ButtonWame = () => {
  return (
    <>
      <div className='container fixed-bottom p-1 my-1' id="buttonWame">
        <span className='d-grid gap-2 d-md-flex justify-content-md-end m-auto mx-0'>
          <a className='text-white' target="_blank" rel="noopener noreferrer" href="https://wa.me/56973655180/">
            <div className="tooltip-container">
              <img
                className="Wame p-0"
                src={contact}
                alt="logo-brand"
                width="75"
                height="75"
              />
              <div className="tooltip-text">¿Necesitas ayuda?</div>
            </div>
          </a>
        </span>
      </div>
    </>
  );
}

export default ButtonWame;