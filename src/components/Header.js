import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    const { name, role, roleDescription, socialLinks } = this.props.resumeData;

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#blog">
                Blog
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hello, I'm {name}.</h1>
            <h3>
              I'm a <span>{role}</span> {roleDescription}.
            </h3>
            <hr />
            <ul className="social">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    <i className={item.className} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}
