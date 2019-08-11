import React from "react";
import SmartFarming from "../img/smart-farming.jpg";
import GonzaloArango from "../img/Gonzalo-Arango.jpg";
import GeekConference from "../img/Geek-Conference.PNG";
import acadGeek from "../img/acadGeek.PNG"
import Store from "../img/store.PNG"
import MusicApp from "../img/musicapp.PNG"
import "../Styles/portfolio.css";

const Portfolio = () => (
  <section id="Portfolio">
    <hr className="my-4 bg-light" />

    <div className="container-fluid mt-4 mb-3">
      <h1 className="mb-3">Portfolio</h1>
      <p className="mb-5">You will find some of my recent projects</p>

      <div className="row mt-3 pb-2">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={SmartFarming} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Smart Farming App</h4>
                  <p>
                    Measurement and control of crops in a sustainable way in the fields of Sucre, Colombia {'('}In process{')'}
                  </p>
                  <a className="btn btn-primary disabled" href="#">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={GonzaloArango} alt="Gonzalo Arango" />
              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Gonzalo Arango Tribute Page</h4>
                  <p>
                    FreeCodeCamp Challenge: Tribute Page, includes the writing "life" by Gonzalo Arango
                  </p>
                  <a className="btn btn-primary " href="https://codepen.io/santiagohenao97/full/qedvNO" target="_blank">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={GeekConference} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Academia Geek Conference</h4>
                  <p>
                  Portal that contains information about Demo-day of Academia-Geek and allows you to register and buy tickets
                  </p>
                  <a className="btn btn-primary " href="https://academia-geek.netlify.com">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={acadGeek} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Academia Geek Landing-Page</h4>
                  <p>
                  Portal that contains information about Academia-Geek and its courses
                  </p>
                  <a className="btn btn-primary " href="https://academia-geek-landing.firebaseapp.com">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={Store} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">Academia Geek Store</h4>
                  <p>
                  Web Store built by geek academy students {'('}in process{')'}
                  </p>
                  <a className="btn btn-primary disabled" href="https://tienda-virtual-geek.firebaseapp.com">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="team-block">
            <div className="team-img">
              <img src={MusicApp} alt="" />

              <div className="overlay">
                <div className="text content-center">
                  <h4 className="mb0 text-white">MusicApp</h4>
                  <p>
                  Streaming player-user interface {'('}in process{')'}
                  </p>
                  <a className="btn btn-primary disabled" href="#">
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>

    <hr className="my-4 bg-light" />
  </section>
);

export default Portfolio;
