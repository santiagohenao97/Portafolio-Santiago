import React from 'react';



const Form = () => (
<section className="mb-4" id="Form">

    <h1 className="h1-responsive font-weight-bold text-center mt-5 mb-5">Let me a message...</h1>
<div className="container fluid">
    <div className="row m-6">

        <div className="col-md-12 p-5 justify-content-center">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label htmlFor="name" className="">Your name</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label htmlFor="email" className="">Your email</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label htmlFor="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label htmlFor="message">Your message</label>
                        </div>
                    </div>
                </div>
            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-lg btn-block btn-primary text-light">Send</a>
            </div>
            <div className="status"></div>
        </div>
      
    </div>
 </div>
</section>
);

export default Form;