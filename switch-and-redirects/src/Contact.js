import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.storeEmail(this.state.email);
    // imperatively redirect to homepage
    this.props.history.push("/");
  }

  storeEmail() {
    console.log("jk, we don't do anything with this form.");
  }

  render() {
    return (
      <div>
        <h1>This is the contact page.</h1>
        <p>To get in touch, enter email.</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
// end

export default Contact;
