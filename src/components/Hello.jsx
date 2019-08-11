import React from 'react';

const Hello= () => (
<section id="Hello">
    <div className="container-fluid text-light pb-5">
        <div className="row ">
            <div className="col-sm-6 ">
                <h1 className="display-4 ml-3">Hello, I am Santiago!</h1>
                <p className="lead ml-3">Electronic Engineer and EngD. Candidate at UPB<br/> My alter-ego is a FrontEnd Developer and I love him…</p>
                <hr className="my-4 bg-light"/>
                <p className="ml-3">Do not think twice and let's do it together.</p>
                <a className="btn btn-primary btn-lg ml-3" href="#ContactMe" role="button">Contact Me!</a>
            </div>
            <div className="col-sm-6 pt-3">

                <div className="tagline3a"><strong>var </strong>{'personalInfo= {'}</div>
                <br/>
                <div className="tagline3b">"firstName": "Santiago",
                <br/> "lastName": "Henao",
                <br/> "age" :  22,
                <br/> "location" : "Medellín"
                </div>
                <div className="tagline3a"> <br/>{'}'}</div>
            </div>
        </div>
    </div>
</section>

)

export default Hello;