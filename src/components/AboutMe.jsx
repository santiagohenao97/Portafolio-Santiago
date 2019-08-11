import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faScroll } from "@fortawesome/free-solid-svg-icons";
import "../Styles/aboutme.css";

const AboutMe = () => (
  <section id="AboutMe" className="mt-5">
    
    <hr className="my-12 " />
    <div className="container-fluid">
      <h1 className="text-center ">
        About Me <br />
      </h1>
      <p>
        I like to figure out problems and I love becoming them into simple
        things. <br />
        I feel passion for technologies and Sustainability…
        <br /> But also I like reading and sometimes I write...
        <br />
        <br />
      </p>
      <div className="row">
        <div className="col-lg-4">
          <div className="our-team-main">
            <div className="team-front">
              <FontAwesomeIcon icon={faCode} className="icono mb-2" />
              <h3>Developer</h3>
            </div>

            <div className="team-back justify-content-center">
              <span>
                I am a developer because it gives me the opportunity to
                integrate technology in all fields and create new solutions that
                change the way things should be done.
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="our-team-main">
            <div className="team-front">
              <FontAwesomeIcon icon={faGraduationCap} className="icono mb-2" />
              <h3>Researcher</h3>
            </div>

            <div className="team-back ">
              <span>
                I firmly believe in lifelong learning as a way to change the
                world, that's why I'm always studying about new things. I also love
                teaching and creating a knowledge network that can help other
                people to transform their lives and their environment.
              </span>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="our-team-main">
            <div className="team-front">
              <FontAwesomeIcon icon={faScroll} className="icono mb-2" />
              <h3>Curious</h3>
            </div>

            <div className="team-back">
              <span>
                I like to know about different topics, I enjoy reading
                literature and listening music. I always look for ways to
                integrate my passions into my knowledge... That is where my
                "children" are born
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-12" />
  </section>
);

export default AboutMe;
