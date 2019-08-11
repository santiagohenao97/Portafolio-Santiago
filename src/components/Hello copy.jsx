import React from 'react';
import Photo from '../img/SHGgg.png'

const Hello= () => (
<section id="Hello">
    <div className="container-fluid text-light">
        <div className="row m-0 p-0">
            <div className="col-sd-6 m-3">
                <h1 className="display-4 ">Hello, I am Santiago!</h1>
                <p className="lead">Electronic Engineer and EngD. Candidate at UPB<br/> But my alter-ego is a FrontEnd Developer, and I love it…</p>
                <hr className="my-4 bg-light"/>
                <p>Do not think twice and let's do it together.</p>
                <a className="btn btn-primary btn-lg" href="#ContactMe" role="button">Contact Me!</a>
            </div>
            <div className="col-sm-6">
                <img src={Photo} className="img-fluid p-0 m-0" alt="Santiago"/>
            </div>
        </div>
    </div>
</section>

)

export default Hello;