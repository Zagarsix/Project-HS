import React from 'react';
import { NavLink,Link } from "react-router-dom";

const PortfolioOverview = () => {
return<>
     <main className="flex-shrink-0">
    {/* Page Content*/}
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h1 className="fw-bolder">Our Work</h1>
          <p className="lead fw-normal text-muted mb-0">Company portfolio</p>
        </div>
        <div className="row gx-5">
          <div className="col-lg-6">
            <div className="position-relative mb-5">
              <img
                className="img-fluid rounded-3 mb-3"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
              <NavLink
                className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                to="#!"
              >
                Project name
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative mb-5">
              <img
                className="img-fluid rounded-3 mb-3"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
              <NavLink
                className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                to="#!"
              >
                Project name
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative mb-5 mb-lg-0">
              <img
                className="img-fluid rounded-3 mb-3"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
              <NavLink
                className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                to="#!"
              >
                Project name
              </NavLink>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                className="img-fluid rounded-3 mb-3"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
              <NavLink
                className="h3 fw-bolder text-decoration-none link-dark stretched-link"
                to="#!"
              >
                Project name
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-light">
      <div className="container px-5 my-5">
        <h2 className="display-4 fw-bolder mb-4">
          Let's build something together
        </h2>
        <NavLink className="btn btn-lg btn-primary" to="#!">
          Contact us
        </NavLink>
      </div>
    </section>
  </main>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</>

}

export default PortfolioOverview;