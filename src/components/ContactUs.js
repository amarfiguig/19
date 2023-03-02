import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="twelve columns">
            <h2>Contact Me</h2>
            <p>{resumeData.contactDescription}</p>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <h4>Email:</h4>
            <p>{resumeData.email}</p>
          </div>
          <div className="six columns">
            <h4>Phone:</h4>
            <p>{resumeData.phone}</p>
          </div>
        </div>
      </section>
    );
  }
}
