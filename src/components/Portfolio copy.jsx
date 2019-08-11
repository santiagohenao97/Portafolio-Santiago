import React from "react";
import SmartFarming from "../img/smart-farming.jpg";
import GonzaloArango from "../img/Gonzalo-Arango.jpg";
import GeekConference from "../img/Geek-Conference.PNG"
import "../Styles/portfolio.css";

const Portfolio = () => (
  <section id="Portfolio">
    <hr className="my-4 bg-light" />

    <div className="container-fluid mt-4 mb-3">
      <h1 className="mb-3">Portfolio</h1>
      <p className="mb-5">You will find some of my recent projects</p>

      <div className="row mt-3 pb-2">
        <div className="col-md-4 col-sm-12 ">
          <div className="portfolio-style">
            <img
            className="card-img-top"
              src={SmartFarming}
              alt="Smart Farming"
            />
            <div className="box-content">
              <h4 className="title">Smart Farming App</h4>
              <p className="description">
              Measurement and control of crops in a sustainable way in the fields of Sucre, Colombia
              </p>
              <a className="read-more" href="#">
                Demo
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="portfolio-style">
            <img
              className="card-img-top"
              src={GonzaloArango}
              alt="Gonzalo Arango"
            />
            <div className="box-content">
              <h4 className="title">Gonzalo Arango Tribute Page</h4>
              <p className="description">
                FreeCodeCamp Challenge: Tribute Page, includes the writing "life" by Gonzalo Arango
              </p>
              <a className="read-more" href="https://codepen.io/santiagohenao97/full/qedvNO" target="_blank">
                Demo
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="portfolio-style">
            <img className="card-img-top img-fluid"
              src={GeekConference}
              alt=""
            />
            <div className="box-content">
              <h4 className="title">Academia Geek Conference</h4>
              <p className="description">
              Portal that contains information about Demo-day of Academia-Geek and allows you to register and buy tickets
              </p>
              <a className="read-more" href="#">
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <hr className="my-4 bg-light" />
    </div>
  </section>
);

export default Portfolio;
