import React from 'react';
import { NavLink } from "react-router-dom";
import "../../styles/home.css";
import paes from "../../img/blog-bg.jpg"; 

const FlexCards = () => {
  return <>
    <main className="flex-shrink-0">
      {/* Page Content*/}
      <div className="wrapper">
        <div className='containerX'>
          <input type='radio' name='slide' id='c1'/>
          <label htmlFor='c1' className='cardX' style={{ backgroundImage: `url(${paes})`}}>
            <div className='row'>
              <div className='icon'>1</div>
              <div className='description'>
                <h4> Preparación PAES</h4>
                <p>Desde 1° a 4° medio. Todas las materias.</p>
              </div>
            </div>
          </label>

          <input type='radio' name='slide' id='c2'/>
          <label htmlFor='c2' className='cardX'>
            <div className='row'>
              <div className='icon'>2</div>
              <div className='description'>
                <h4> Título 2</h4>
                <p>lorem ipsum dolor sit ame volunpatu,m presmakene enin quaus</p>
              </div>
            </div>
          </label>

          <input type='radio' name='slide' id='c3'/>
          <label htmlFor='c3' className='cardX'>
            <div className='row'>
              <div className='icon'>3</div>
              <div className='description'>
                <h4> Título 3</h4>
                <p>lorem ipsum dolor sit ame volunpatu,m presmakene enin quaus</p>
              </div>
            </div>
          </label>

          <input type='radio' name='slide' id='c4'/>
          <label htmlFor='c4' className='cardX'>
            <div className='row'>
              <div className='icon'>4</div>
              <div className='description'>
                <h4> Título 4</h4>
                <p>lorem ipsum dolor sit ame volunpatu,m presmakene enin quaus</p>
              </div>
            </div>
          </label>

          <input type='radio' name='slide' id='c5'/>
          <label htmlFor='c5' className='cardX'>
            <div className='row'>
              <div className='icon'>5</div>
              <div className='description'>
                <h4> Título 5</h4>
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