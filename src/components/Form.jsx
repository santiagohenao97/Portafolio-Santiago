import React from "react";

class Form extends React.Component {
  handleClick = e => {
    console.log("El boton ha sido presionado");
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.onSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  onChange={this.props.onChange}
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.props.formValues.name}
                  required
                />
                <label htmlFor="name" className="">
                  Your name
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input
                  onChange={this.props.onChange}
                  type="text"
                  name="email"
                  className="form-control"
                  value={this.props.formValues.email}
                  required
                />
                <label htmlFor="email" className="">
                  Your email
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <input
                  onChange={this.props.onChange}
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  value={this.props.formValues.subject}
                  required
                />
                <label htmlFor="subject" className="">
                  Subject
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form">
                <textarea
                  onChange={this.props.onChange}
                  type="text"
                  name="message"
                  rows="2"
                  className="form-control md-textarea"
                  value={this.props.formValues.message}
                  required
                />
                <label htmlFor="message">Your message</label>
              </div>
            </div>
          </div>
          <div className="text-center text-md-left">
            <button type="submit" onClick={this.handleClick} className="btn btn-lg btn-block btn-primary text-light">
              Send
            </button>
          </div>

          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
