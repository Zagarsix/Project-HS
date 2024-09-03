import React, { useEffect, useState } from 'react';
import "../../styles/home.css";
import s1 from "../../img/services/servicio1-paes.jpg";
import s2 from "../../img/services/servicio2-ingles.png";
import s3 from "../../img/services/servicio3-reforzamiento.png";
import s4 from "../../img/services/servicio4-necesidades.png";
import s5 from "../../img/services/servicio5-fonoaudio.png";
import s6 from "../../img/services/servicio6-telemedicina.png"; 

const FlexCards = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Estado para controlar la tarjeta activa

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex % 6) + 1); // Cambia la tarjeta activa de forma cíclica
    }, 4000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  // Información de cada tarjeta
  const cardsData = [
    {
      id: 1,
      image: s1,
      title: "Preparación PAES",
      description: "Desde 1° a 4° medio. Todas las materias."
    },
    {
      id: 2,
      image: s2,
      title: "Clases de Inglés",
      description: "Tu camino al inglés empieza aquí. Desde 1° básico."
    },
    {
      id: 3,
      image: s3,
      title: "Reforzamiento",
      description: "Apoyo escolar, éxito total. Clases de reforzamiento en todos los niveles."
    },
    {
      id: 4,
      image: s4,
      title: "Apoyo N.E.E.",
      description: "Atención a niños con Necesidades Educativas Especiales transitorias y permanentes."
    },
    {
      id: 5,
      image: s5,
      title: "Fonoaudiología",
      description: "Contamos con un equipo especialista para detectar de forma temprana, problemas del lenguaje."
    },
    {
      id: 6,
      image: s6,
      title: "Telemedicina",
      description: "Bienestar escolar a un clic, al alcance de tu familia."
    }
  ];

  return (
    <>
      <main className="flex-shrink-0">
        <div className="wrapper">
          <div className='containerX'>
            {cardsData.map((card) => (
              <React.Fragment key={card.id}>
                <input
                  type='radio'
                  name='slide'
                  id={`c${card.id}`}
                  checked={activeIndex === card.id}
                  onChange={() => setActiveIndex(card.id)}
                />
                <label htmlFor={`c${card.id}`} className='cardX' style={{ backgroundImage: `url(${card.image})` }}>
                  <div className='row'>
                    <div className='icon'>{card.id}</div>
                    <div className='description'>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default FlexCards;


// const FlexCards = () => {
//   return <>
//     <main className="flex-shrink-0">
//       {/* Page Content*/}
//       <div className="wrapper">
//         <div className='containerX'>
//           <input type='radio' name='slide' id='c1'/>
//           <label htmlFor='c1' className='cardX' style={{ backgroundImage: `url(${s1})`}}>
//             <div className='row'>
//               <div className='icon'>1</div>
//               <div className='description'>
//                 <h4> Preparación PAES</h4>
//                 <p>Desde 1° a 4° medio. Todas las materias.</p>
//               </div>
//             </div>
//           </label>

//           <input type='radio' name='slide' id='c2'/>
//           <label htmlFor='c2' className='cardX' style={{ backgroundImage: `url(${s2})`}}>
//             <div className='row'>
//               <div className='icon'>2</div>
//               <div className='description'>
//                 <h4> Clases de Inglés</h4>
//                 <p>Tu camino al inglés empieza aquí. Desde 1° básico.</p>
//               </div>
//             </div>
//           </label>

//           <input type='radio' name='slide' id='c3'/>
//           <label htmlFor='c3' className='cardX' style={{ backgroundImage: `url(${s3})`}}>
//             <div className='row'>
//               <div className='icon'>3</div>
//               <div className='description'>
//                 <h4> Reforzamiento</h4>
//                 <p>Apoyo escolar, éxito total. Clases de reforzamiento en todos los niveles.</p>
//               </div>
//             </div>
//           </label>

//           <input type='radio' name='slide' id='c4'/>
//           <label htmlFor='c4' className='cardX' style={{ backgroundImage: `url(${s4})`}}>
//             <div className='row'>
//               <div className='icon'>4</div>
//               <div className='description'>
//                 <h4> Apoyo N.E.E.</h4>
//                 <p>Atención a niños con Necesidades Educativas Especiales transitorias y permanentes.</p>
//               </div>
//             </div>
//           </label>

//           <input type='radio' name='slide' id='c5'/>
//           <label htmlFor='c5' className='cardX' style={{ backgroundImage: `url(${s5})`}}>
//             <div className='row'>
//               <div className='icon'>5</div>
//               <div className='description'>
//                 <h4> Fonoaudiología</h4>
//                 <p>Contamos con un equipo especialista para detectar de forma temprana, problemas del lenguaje.</p>
//               </div>
//             </div>
//           </label>

//           <input type='radio' name='slide' id='c6'/>
//           <label htmlFor='c6' className='cardX' style={{ backgroundImage: `url(${s6})`}}>
//             <div className='row'>
//               <div className='icon'>6</div>
//               <div className='description'>
//                 <h4> Telemedicina</h4>
//                 <p>Bienestar escolar a un clic, al alcance de tu familia.</p>
//               </div>
//             </div>
//           </label>
//         </div>
//       </div>
//     </main>
//   </>
// }

// export default FlexCards;