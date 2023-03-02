import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <div className="footer-content">
              <h3>{resumeData.name}</h3>
              <p>{resumeData.footerDescription}</p>
              <ul className="social-links">
                {resumeData.socialLinks &&
                  resumeData.socialLinks.map((item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url}>
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="fa fa-angle-up"></i>
          </a>
        </div>
      </footer>
    );
  }
}
