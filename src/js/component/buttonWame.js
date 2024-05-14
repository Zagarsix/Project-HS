import React from 'react';
import contact from "../../img/what5.png";

const ButtonWame = () => {
  return <>
    <div className='container fixed-bottom p-1 my-1' id="buttonWame">
      <span className='m-auto mx-0'>
        <a className='text-white' target="_blank" href="https://wa.me/56973655180/">
          <span className='tooltipWame'>¿Necesitas ayuda?</span>
          <img className="Wame p-0" src={contact} alt="logo-brand" width="75" height="75" />
        </a>
      </span>
    </div>
  </>

}

export default ButtonWame;