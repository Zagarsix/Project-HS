import { NavLink,Link } from "react-router-dom";

const BlogPost = () => {
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>Modern Business - Start Bootstrap Template</title>
  {/* Favicon*/}
  <link rel="icon" type="image/x-icon" to="assets/favicon.ico" />
  {/* Bootstrap icons*/}
  <link
    to="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    rel="stylesheet"
  />
  {/* Core theme CSS (includes Bootstrap)*/}
  <link to="css/styles.css" rel="stylesheet" />
  <main className="flex-shrink-0">
    {/* Navigation*/}
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container px-5">
        <NavLink className="navbar-brand" to="index.html">
          Start Bootstrap
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="index.html">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="about.html">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="contact.html">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="pricing.html">
                Pricing
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="faq.html">
                FAQ
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                id="navbarDropdownBlog"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Blog
              </NavLink>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownBlog"
              >
                <li>
                  <NavLink className="dropdown-item" to="blog-home.html">
                    Blog Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="blog-post.html">
                    Blog Post
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                id="navbarDropdownPortfolio"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Portfolio
              </NavLink>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownPortfolio"
              >
                <li>
                  <NavLink className="dropdown-item" to="portfolio-overview.html">
                    Portfolio Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="portfolio-item.html">
                    Portfolio Item
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Page Content*/}
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          <div className="col-lg-3">
            <div className="d-flex align-items-center mt-lg-5 mb-4">
              <img
                className="img-fluid rounded-circle"
                src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                alt="..."
              />
              <div className="ms-3">
                <div className="fw-bold">Valerie Luna</div>
                <div className="text-muted">News, Business</div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            {/* Post content*/}
            <article>
              {/* Post header*/}
              <header className="mb-4">
                {/* Post title*/}
                <h1 className="fw-bolder mb-1">Welcome to Blog Post!</h1>
                {/* Post meta content*/}
                <div className="text-muted fst-italic mb-2">
                  January 1, 2022
                </div>
                {/* Post categories*/}
                <NavLink
                  className="badge bg-secondary text-decoration-none link-light"
                  to="#!"
                >
                  Web Design
                </NavLink>
                <NavLink
                  className="badge bg-secondary text-decoration-none link-light"
                  to="#!"
                >
                  Freebies
                </NavLink>
              </header>
              {/* Preview image figure*/}
              <figure className="mb-4">
                <img
                  className="img-fluid rounded"
                  src="https://dummyimage.com/900x400/ced4da/6c757d.jpg"
                  alt="..."
                />
              </figure>
              {/* Post content*/}
              <section className="mb-5">
                <p className="fs-5 mb-4">
                  Science is an enterprise that should be cherished as an
                  activity of the free human mind. Because it transforms who we
                  are, how we live, and it gives us an understanding of our
                  place in the universe.
                </p>
                <p className="fs-5 mb-4">
                  The universe is large and old, and the ingredients for life as
                  we know it are everywhere, so there's no reason to think that
                  Earth would be unique in that regard. Whether of not the life
                  became intelligent is NavLink different question, and we'll see if
                  we find that.
                </p>
                <p className="fs-5 mb-4">
                  If you get asteroids about NavLink kilometer in size, those are
                  large enough and carry enough energy into our system to
                  disrupt transportation, communication, the food chains, and
                  that can be NavLink really bad day on Earth.
                </p>
                <h2 className="fw-bolder mb-4 mt-5">
                  I have odd cosmic thoughts every day
                </h2>
                <p className="fs-5 mb-4">
                  For me, the most fascinating interface is Twitter. I have odd
                  cosmic thoughts every day and I realized I could hold them to
                  myself or share them with people who might be interested.
                </p>
                <p className="fs-5 mb-4">
                  Venus has NavLink runaway greenhouse effect. I kind of want to know
                  what happened there because we're twirling knobs here on Earth
                  without knowing the consequences of it. Mars once had running
                  water. It's bone dry today. Something bad happened there as
                  well.
                </p>
              </section>
            </article>
            {/* Comments section*/}
            <section>
              <div className="card bg-light">
                <div className="card-body">
                  {/* Comment form*/}
                  <form className="mb-4">
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="Join the discussion and leave NavLink comment!"
                      defaultValue={""}
                    />
                  </form>
                  {/* Comment with nested comments*/}
                  <div className="d-flex mb-4">
                    {/* Parent comment*/}
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-circle"
                        src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="ms-3">
                      <div className="fw-bold">Commenter Name</div>
                      If you're going to lead NavLink space frontier, it has to be
                      government; it'll never be private enterprise. Because the
                      space frontier is dangerous, and it's expensive, and it
                      has unquantified risks.
                      {/* Child comment 1*/}
                      <div className="d-flex mt-4">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="ms-3">
                          <div className="fw-bold">Commenter Name</div>
                          And under those conditions, you cannot establish NavLink
                          capital-market evaluation of that enterprise. You
                          can't get investors.
                        </div>
                      </div>
                      {/* Child comment 2*/}
                      <div className="d-flex mt-4">
                        <div className="flex-shrink-0">
                          <img
                            className="rounded-circle"
                            src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                            alt="..."
                          />
                        </div>
                        <div className="ms-3">
                          <div className="fw-bold">Commenter Name</div>
                          When you put money directly to NavLink problem, it makes NavLink
                          good headline.
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single comment*/}
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-circle"
                        src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                        alt="..."
                      />
                    </div>
                    <div className="ms-3">
                      <div className="fw-bold">Commenter Name</div>
                      When I look at the universe and all the ways the universe
                      wants to kill us, I find it hard to reconcile that with
                      statements of beneficence.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* Footer*/}
  <footer className="bg-dark py-4 mt-auto">
    <div className="container px-5">
      <div className="row align-items-center justify-content-between flex-column flex-sm-row">
        <div className="col-auto">
          <div className="small m-0 text-white">
            Copyright © Your Website 2022
          </div>
        </div>
        <div className="col-auto">
          <NavLink className="link-light small" to="#!">
            Privacy
          </NavLink>
          <span className="text-white mx-1">·</span>
          <NavLink className="link-light small" to="#!">
            Terms
          </NavLink>
          <span className="text-white mx-1">·</span>
          <NavLink className="link-light small" to="#!">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  </footer>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
</>

}

export default BlogPost;