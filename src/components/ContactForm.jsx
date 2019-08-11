import React, { Component } from 'react';
import Form from './Form'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class ContactForm extends Component {
    state = { 
        form:{
            name:'',
            email:'',
            subject:'',
            message:'',
        }
     }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
          })
            .then(() => alert("¡Su Mensaje fue enviado!"))
            .catch(error => alert(error));
        e.preventDefault();
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() { 
        return ( <section className="mb-4" id="Form">

        <h1 className="h1-responsive font-weight-bold text-center mt-5 mb-5">Let me a message...</h1>
    <div className="container fluid">
        <div className="row m-6">
    
            <div className="col-md-12 p-5 justify-content-center">
                <Form
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues = {this.state.form}
                
                />
            </div>
        </div>
    </div>
    </section>     );
    }
}
 
export default ContactForm;