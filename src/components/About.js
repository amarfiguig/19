import React, { Component } from 'react';

export default class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="skills">
        <div className="row">
          <div className="twelve columns">
            <h2>Skills</h2>
            <p>{resumeData.skillsDescription}</p>
            <div className="skills-list">
              <ul>
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li key={item.skillName}>
                        <span className="skill-name">{item.skillName}</span>
                        <div className="skill-level">
                          <div
                            className="skill-level-bar"
                            style={{ width: item.skillLevel }}
                          ></div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
