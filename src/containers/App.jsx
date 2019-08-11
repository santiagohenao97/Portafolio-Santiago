import React from 'react';
import Header from '../components/Header';
import Hello from '../components/Hello';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';
import Form from '../components/ContactForm';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Social from '../components/Social';
import ContactMe from '../components/ContactMe';

const App = () => (
      <React.Fragment>
          <Header/>
          <Hello/>
          <AboutMe/>
          <Skills/>
          <Portfolio/>
          <ContactMe>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                    <Form/>
                </div>
                <div className="col-md-6 col-sm-12 p-0 m-0">
                  <Social/>
                </div>
              </div>
            </div>
          </ContactMe>
          <Footer/>
      </React.Fragment>  
  );

export default App;

