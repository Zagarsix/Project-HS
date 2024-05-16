import React from 'react';
import contact from "../../img/what5.png";

const ButtonWame = () => {
  return (
    <div className="fixed-button-container">
      <div className="tooltip-container">
        <a className="fixed-button" target="_blank" rel="noopener noreferrer" href="https://wa.me/56973655180/">
          <img
            className='Wame'
            src={contact}
            alt="logo-brand"
            width="60"
            height="60"
          />
        </a>
        <div className="tooltip-text">¿Necesitas ayuda?</div>
      </div>
    </div>
  );
}

export default ButtonWame;