import React from "react";

export const Header = (props) => {


  return (
    <div className="sticky-top">
      <div className="header" >
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className=" aaa navbar-brand mb-0 text-white" href="#">
              Shri Paras Plywood
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#ScrollToHereForProducts">
                  Products
                </a>
                <a className="nav-link" href="#reachUs">
                  Reach Us
                </a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="navbar">
          <form className="container-fluid justify-content-center">
          <a href={props.location} className="sticky-a">
            <button className="btn sticky-button me-2" type="button">
            <i className="fa-solid fa-location-dot ms-0 me-1 fa-lg" style={{color:'black'}}  ></i>
              Location
            </button>
            </a>
            <a href="tel: +919927261789" className="sticky-a">
            <button className="btn sticky-button me-2" type="button">
            <i className="fa-solid fa-phone fa-lg ms-0 me-1" style={{color:'black'}}></i>
              Call
            </button>
            </a>
            <a href="https://wa.me/919927261789?text=Hi" className="sticky-a">
            <button className="btn sticky-button me-2" type="button">
            <i className="fa-brands fa-whatsapp ms-0 me-1 fa-lg" style={{color:'black'}}  ></i>
            Whatsapp
            </button>
            </a>
          </form>
        </nav>
      </div>
    </div>
  );
};
