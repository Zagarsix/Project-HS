import React from 'react';
import { NavLink } from "react-router-dom";
import lapices from "../../img/bg-section/blog2.jpg";

const Ayuda = () => {
  return <>
    <main className="flex-shrink-0">
      {/* Header*/}
      <header className="masthead" style={{ backgroundImage: `url(${lapices})` }}>
        <div className="container position-relative px-4 px-lg-3">
          <div className="row gx-4 gx-lg-5 justify-content-around">
            <div className="col-md-12 col-lg-11 col-xl-10">
              <div className="text-center my-2">
                <h1 className="site-heading fw-bolder mb-1">
                  <span>Centro</span> <span style={{ color: "#ff6600" }}> de ayuda</span>
                </h1>
                <p className="lead-header mb-5">
                  Esta sección está diseñada para abordar las <strong> preocupaciones, dudas y consultas </strong> comunes de los padres y estudiantes interesados en esta <strong> modalidad educativa.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Page Content*/}
      <section className="py-2" style={{ paddingBottom: "100px", marginBottom: "100px" }}>
        <div className="container px-5 my-3">
          <div className="text-center mb-5">
            <h1 className="fw-bolder" style={{ color: "#0e408f" }}>Alianza responde</h1>
            <p className="lead fw-normal text-muted mb-0" >¿Cómo te podemos ayudar?</p>
          </div>
          <div className="row gx-5">
            <div className="col-xl-8 rounded-4 py-5 px-4 px-md-5" id="supportCenter">
              {/* FAQ Accordion 1*/}
              <h3 className="fw-bolder mb-3" style={{ color: "#ff8800" }}>Preguntas frecuentes de Homeschool</h3>
              <div className="accordion mb-5" id="accordionExample1">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseA"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      1. ¿Qué es el homeschooling?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse show"
                    id="collapseA"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      El homeschooling, o educación en casa, es una alternativa a la educación tradicional en la que los estudiantes aprenden en el entorno del hogar bajo la supervisión y guía de sus padres o tutores, siguiendo un plan educativo personalizado.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseB"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. ¿Cómo se asegura que el plan de estudios cumple con los requisitos del Ministerio de Educación?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseB"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      En Colegio Virtual Alianza, seguimos estrictamente el currículo y las directrices establecidas por el Ministerio de Educación. Además, nuestros planes de estudio están diseñados para cubrir todos los contenidos esenciales y preparan a los estudiantes para evaluaciones oficiales.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseC"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. ¿Qué ventajas ofrece el homeschooling frente a la educación tradicional?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseC"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      El homeschooling ofrece varias ventajas, incluyendo una carga horaria más flexible, permitiendo a los estudiantes tener más tiempo para actividades familiares, recreativas, deportivas y artísticas. Esta modalidad también permite una atención más personalizada y un ambiente de aprendizaje adaptado a las necesidades individuales de cada estudiante.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseD"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      4. ¿Los estudiantes tienen la oportunidad de interactuar con otros niños?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseD"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      Sí, organizamos actividades grupales, excursiones y eventos sociales para que los estudiantes puedan interactuar y desarrollar habilidades sociales. También fomentamos la participación en actividades comunitarias y deportivas.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseE"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      5. ¿Qué soporte ofrecen a los padres que educan en casa?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseE"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      Proporcionamos recursos educativos, guías y asesoramiento continuo para los padres. Nuestro equipo de docentes está disponible para responder preguntas, ofrecer orientación y apoyar en la implementación del plan de estudios.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseF"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      6. ¿Cómo se evalúa el progreso de los estudiantes?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseF"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      Utilizamos una combinación de evaluaciones formativas y sumativas, trabajos de curso, proyectos y exámenes para evaluar el progreso de los estudiantes. También ofrecemos informes periódicos y reuniones de progreso con los padres.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseG"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      7. ¿Qué ocurre si un estudiante desea reintegrarse en una escuela tradicional?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseG"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      Nuestros programas están diseñados para ser compatibles con el sistema educativo tradicional, lo que permite una transición fluida si el estudiante decide reintegrarse en una escuela convencional. Proporcionamos toda la documentación necesaria para facilitar este proceso.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingEight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseH"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      8. ¿Cuál es el proceso de inscripción?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseH"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      El proceso de inscripción incluye una entrevista inicial, la revisión de documentos académicos y la formalización de la <NavLink className='link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover' to="/matriculas">matrícula.</NavLink> Los padres pueden contactarnos para obtener más información y comenzar el proceso.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingNine">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseI"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      9. ¿Ofrecen programas especializados o apoyo para estudiantes con necesidades especiales?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseI"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordionExample1"
                  >
                    <div className="accordion-body">
                      Sí, ofrecemos programas adaptados y apoyo especializado para estudiantes con necesidades educativas especiales. Nuestro objetivo es proporcionar un entorno de integración y accesible para todos los estudiantes.
                    </div>
                  </div>
                </div>
              </div>
              {/* FAQ Accordion 2*/}
              <h3 className="fw-bolder mb-3" style={{ color: "#ff8800" }}>Plan Lector</h3>
              <div className="accordion mb-5" id="accordionExample2">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      1. ¿Qué es el Plan que se imparte en Alianza?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse show"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      Es un programa integral diseñado para fomentar el hábito de la lectura y mejorar la comprensión lectora de nuestros estudiantes. Está compuesto por una selección de libros recomendados para cada nivel educativo, alineados con los principios de CVA.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. ¿Cómo se eligen los libros del Plan Lector?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      Los libros son seleccionados por un equipo de especialistas en educación y literatura, teniendo en cuenta la edad, intereses y nivel de comprensión de los estudiantes.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. ¿Cómo se implementa el Plan Lector en la modalidad de Homeschool?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseThree"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      Los estudiantes reciben una guía detallada con las lecturas recomendadas y actividades complementarias para realizar en casa. Además, se organizan sesiones virtuales para discutir los libros y realizar actividades de comprensión lectora.
                    </div>
                  </div>
                </div>
              </div>
              {/* FAQ Accordion 3*/}
              <h3 className="fw-bolder mb-3" style={{ color: "#ff8800" }}>Apoyo Psicopedagógico</h3>
              <div className="accordion mb-5" id="accordionExample3">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      1. ¿En Alianza se ofrece apoyo psicopedagógico?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse show"
                    id="collapse1"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample3"
                  >
                    <div className="accordion-body">
                      Sí, contamos con un equipo psicopedagógico que brinda apoyo personalizado a los estudiantes que lo necesiten. Este servicio está disponible tanto para los alumnos con dificultades de aprendizaje como para aquellos que deseen potenciar sus habilidades.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      2. ¿Cómo se accede al apoyo psicopedagógico?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapse2"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample3"
                  >
                    <div className="accordion-body">
                      Los padres pueden solicitar una evaluación a través de nuestra página web, en sección Contacto; ó también, pueden agendar una evaluación vía whatsapp. Luego de la evaluación inicial, se diseñará un plan de apoyo personalizado y se programarán sesiones de seguimiento (las sesiones tienen un costo adicional).
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      3. ¿Las sesiones de apoyo psicopedagógico son presenciales o virtuales?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapse3"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample3"
                  >
                    <div className="accordion-body">
                      Las sesiones pueden ser virtuales o presenciales, dependiendo de la necesidad y disponibilidad de las familias. Nuestro objetivo es brindar la mayor flexibilidad posible para adaptarnos a las circunstancias de cada estudiante.
                    </div>
                  </div>
                </div>
              </div>
              {/* FAQ Accordion 4*/}
              <h3 className="fw-bolder mb-3" style={{ color: "#ff8800" }}>Talleres extracurriculares</h3>
              <div className="accordion mb-5" id="accordionExample4">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseUno"
                      aria-expanded="true"
                      aria-controls="collapseUno"
                    >
                      1. ¿Qué tipo de talleres extracurriculares ofrecemos?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse show"
                    id="collapseUno"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample4"
                  >
                    <div className="accordion-body">
                      Ofrecemos una variedad de talleres extracurriculares que incluyen actividades deportivas, artísticas, tecnológicas y de desarrollo personal. Estos talleres están diseñados para complementar la formación académica y fomentar el desarrollo integral de los estudiantes.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseDos"
                      aria-expanded="false"
                      aria-controls="collapseDos"
                    >
                      2. ¿Los talleres son presenciales o virtuales?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseDos"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample4"
                  >
                    <div className="accordion-body">
                      Aunque la mayoría de nuestras actividades educativas son virtuales, los talleres extracurriculares se realizan de manera presencial para promover la interacción social y el aprendizaje práctico.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTres"
                      aria-expanded="false"
                      aria-controls="collapseTres"
                    >
                      3. ¿Cómo puedo inscribir a mi hijo en los talleres?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapseTres"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample4"
                  >
                    <div className="accordion-body">
                      La inscripción se realiza a través de la página web, agendando una reunión virtual, donde se entregará información detallada de los talleres disponibles, horarios y requisitos. También ofrecemos orientación personalizada para ayudarte a elegir las actividades más adecuadas para tu hijo.
                    </div>
                  </div>
                </div>
              </div>
              {/* FAQ Accordion 5*/}
              <h3 className="fw-bolder mb-3" style={{ color: "#ff8800" }}>Cita con coordinadora académica</h3>
              <div className="accordion mb-5" id="accordionExample5">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse11"
                      aria-expanded="true"
                      aria-controls="collapse11"
                    >
                      1. ¿Puedo agendar una cita con la coordinadora académica de forma online?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse show"
                    id="collapse11"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample5"
                  >
                    <div className="accordion-body">
                      Sí, ofrecemos la posibilidad de agendar citas con la coordinadora académica vía online. Esta es una excelente oportunidad para discutir el progreso académico de tu hijo, resolver dudas y recibir orientación personalizada.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse22"
                      aria-expanded="false"
                      aria-controls="collapse22"
                    >
                      2. ¿Cómo puedo agendar una cita con la coordinadora académica?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapse22"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample5"
                  >
                    <div className="accordion-body">
                      Puedes agendar una cita a través de nuestra página web, sección Contacto. Solo necesitas indicar una fecha y hora disponibles, y recibirás un enlace para la reunión virtual.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse33"
                      aria-expanded="false"
                      aria-controls="collapse33"
                    >
                      3. ¿Qué temas se pueden tratar en una cita con la coordinadora académica?
                    </button>
                  </h3>
                  <div
                    className="accordion-collapse collapse"
                    id="collapse33"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample5"
                  >
                    <div className="accordion-body">
                      Durante la cita, puedes discutir el rendimiento académico de tu hijo, estrategias de estudio, adaptación a la modalidad de Homeschool, y cualquier otra preocupación o consulta que puedas tener sobre su educación.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Social media*/}
            <div className="col-xl-4 mt-4">
              <div className="card border-0 bg-light mt-xl-5 rounded-4">
                <div className="card-body p-4 py-lg-5">
                  <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <div className="h6 fw-bolder" style={{ color: "#ff8800", fontSize: "1.2rem" }}>¿Tienes más preguntas?</div>
                      <p className="text-muted mb-4">
                        Escríbenos a
                        <br />
                        <a target="_blank" rel="noopener noreferrer" href="mailto:colegiovirtualalianza.adm@gmail.com" style={{ fontSize: "1rem" }}>colegiovirtualalianza.adm@gmail.com</a>
                      </p>
                      <div className="h6 fw-bolder">Síguenos</div>
                      <a className='px-2' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61562958972239&mibextid=ZbWKwL">
                        <i className="fa-brands fa-square-facebook" style={{ color: "blue" }} />
                      </a>
                      <a className='px-2' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/colegiovirtual.alianza/">
                        <i className="fa-brands fa-square-instagram" style={{ color: "#cc2366" }} />
                      </a>
                      <a className='px-2' target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/@colegio_virtual_alianza">
                        <i className="fa-brands fa-tiktok" style={{ color: "black" }} />
                      </a>
                      <NavLink className="px-2" to="#!">
                        <i className="fa-brands fa-youtube" style={{ color: "red" }} />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
}

export default Ayuda;