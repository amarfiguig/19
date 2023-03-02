import React, { Component } from 'react';

class Resume extends Component {
  renderEducation = (education) => (
    education.map((item, index) => (
      <div key={`education-${index}`} className="row item">
        <div className="twelve columns">
          <h3>{item.UniversityName}</h3>
          <p className="info">
            {item.specialization}
            <span>&bull;</span> 
            <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em>
          </p>
          <p>{item.Achievements}</p>
        </div>
      </div>
    ))
  );

  renderWork = (work) => (
    work.map((item, index) => (
      <div key={`work-${index}`} className="row item">
        <div className="twelve columns">
          <h3>{item.CompanyName}</h3>
          <p className="info">
            {item.specialization}
            <span>&bull;</span> 
            <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
          </p>
          <p>{item.Achievements}</p>
        </div>
      </div>
    ))
  );

  renderSkills = (skills) => (
    <div className="bars">
      <ul className="skills">
        {skills.map((item, index) => (
          <li key={`skill-${index}`}>
            <span className={`bar-expand ${item.skillname.toLowerCase()}`}></span>
            <em>{item.skillname}</em>
          </li>
        ))}
      </ul>
    </div>
  );

  render() {
    const { resumeData } = this.props;

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.education && this.renderEducation(resumeData.education)}
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            {resumeData.work && this.renderWork(resumeData.work)}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>{resumeData.skillsDescription}</p>
            {resumeData.skills && this.renderSkills(resumeData.skills)}
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
