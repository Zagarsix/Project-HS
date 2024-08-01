import React from 'react';
import { NavLink } from "react-router-dom";
import "../../styles/home.css";
import s1 from "../../img/servicio1-paes.jpg";
import s2 from "../../img/servicio2-ingles.png";
import s3 from "../../img/servicio3-reforzamiento.png";
import s4 from "../../img/servicio4-necesidades.png";
import s5 from "../../img/servicio5-fonoaudio.png";
import s6 from "../../img/servicio6-telemedicina.png"; 

const FlexCards = () => {
  return <>
    <main className="flex-shrink-0">
      {/* Page Content*/}
      <div className="wrapper">
        <div className='containerX'>
          <input type='radio' name='slide' id='c1'/>
          <label htmlFor='c1' className='cardX' style={{ backgroundImage: `url(${s1})`}}>
            <div className='row'>
              <div className='icon'>1</div>
              <div className='description'>
                <h4> Preparación PAES</h4>
                <p>Desde 1° a 4° medio. Todas las materias.</p>
              </div>
            </div>
          </label>

          <input type='radio' name='slide' id='c2'/>
          <label htmlFor='c2' className='cardX' style={{ backgroundImage: `url(${s2})`}}>
            <div className='row'>
              <div className='icon'>2</div>
              <div className='description'>
                <h4> Clases de Inglés</h4>
                <p>lorem ipsum dolor sit ame volunpatu,m presmakene enin quaus</p>
              </div>
            </div>
          </label>

          <input type='radio' name='slide' id='c3'/>
          <label htmlFor='c3' className='cardX' style={{ backgroundImage: `url(${s3})`}}>
            <div className='row'>
              <div className='icon'>3</div>
              <div className='description'>
                <h4> Clases de reforzamiento</h4>
                <p>lorem ipsum dolor sit ame volunpatu,m presmakene enin quaus</p>
              </div>
            </div>
          </label>

          <input type='radio' name='slide' id='c4'/>
          <label htmlFor='c4' className='cardX' style={{ backgroundImage: `url(${s4})`}}>
            <div className='row'>
              <div className='icon'>4</div>
              <div className='description'>
                <h4> Apoyo N.E.E.</h4>
                <p>Atención a niños con Necesidades Educativas Especiales transitorias y permanentes.</p>
              </div>
            </div>
          </label>

          <input type='radio' name='slide' id='c5'/>
          <label htmlFor='c5' className='cardX' style={{ backgroundImage: `url(${s5})`}}>
            <div className='row'>
              <div className='icon'>5</div>
              <div className='description'>
                <h4> Fonoaudiología</h4>
                <p>Contamos con un equipo especialista para detectar de forma temprana, problemas del lenguaje.</p>
              </div>
            </div>
          </label>

          <input type='radio' name='slide' id='c6'/>
          <label htmlFor='c6' className='cardX' style={{ backgroundImage: `url(${s6})`}}>
            <div className='row'>
              <div className='icon'>6</div>
              <div className='description'>
                <h4> Telemedicina</h4>
                <p>lorem ipsum dolor sit ame volunpatu,m presmakene enin quaus</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </main>
  </>
}

export default FlexCards;