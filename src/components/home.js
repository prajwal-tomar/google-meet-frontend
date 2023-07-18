import React from "react";
import image1 from "../assets/images/1.svg";
import image2 from "../assets/images/2.svg";
import image3 from "../assets/images/3.svg";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Google Meet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Join a Meeting
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Start a Meeting
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Premium Video Meetings.</h1>
              <h1>Now For Everyone.</h1>
              <p>
                We re-engineered the service we built for secure business
                meetings, Google Meet, to make it free and available for all.
              </p>
              <div className="d-flex align-items-center">
                <button className="px-3 btn btn-primary">Meeting</button>
                <input
                  type="text"
                  className="form-control ms-4"
                  placeholder="Enter code or link"
                />
              </div>
              <hr className="mt-5 w-75" />
              <p>Learn More about Google Meet</p>
            </div>
            <div className="col-md-6">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img src={image1} alt="" height="300px" width="300px" />
                      <h4 className="mt-2">Get a link you can share</h4>
                      <p className="text-center">
                        Click New meeting to get a link you can send to people{" "}
                        <br /> you want to meet with
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img src={image3} alt="" height="300px" width="300px" />
                      <h4 className="mt-2">Get a link you can share</h4>
                      <p className="text-center">
                        Click New meeting to get a link you can send to people{" "}
                        <br /> you want to meet with
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img src={image2} alt="" height="300px" width="300px" />
                      <h4 className="mt-2">Get a link you can share</h4>
                      <p className="text-center">
                        Click New meeting to get a link you can send to people{" "}
                        <br /> you want to meet with
                      </p>
                    </div>
                  </div>
                  {/* Add more carousel items here */}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
