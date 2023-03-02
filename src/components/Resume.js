import React from 'react';

function EducationItem({ universityName, specialization, monthOfPassing, yearOfPassing, achievements }) {
  return (
    <div className="row item">
      <div className="twelve columns">
        <h3>{universityName}</h3>
        <p className="info">
          {specialization}
          <span>&bull;</span> <em className="date">{monthOfPassing} {yearOfPassing}</em>
        </p>
        <p>{achievements}</p>
      </div>
    </div>
  );
}

function WorkItem({ companyName, specialization, monthOfLeaving, yearOfLeaving, achievements }) {
  return (
    <div className="row item">
      <div className="twelve columns">
        <h3>{companyName}</h3>
        <p className="info">
          {specialization}
          <span>&bull;</span> <em className="date">{monthOfLeaving} {yearOfLeaving}</em>
        </p>
        <p>{achievements}</p>
      </div>
    </div>
  );
}

function SkillItem({ skillName, skillLevel }) {
  const levelClass = skillLevel.toLowerCase();
  return (
    <li>
      <span className={`bar-expand ${levelClass}`}></span>
      <em>{skillName}</em>
    </li>
  );
}

function Resume({ resumeData }) {
  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1><span>Education</span></h1>
        </div>
        <div className="nine columns main-col">
          {resumeData.education && resumeData.education.map((item) => (
            <EducationItem key={item.UniversityName} {...item} />
          ))}
        </div>
      </div>
      <div className="row work">
        <div className="three columns header-col">
          <h1><span>Work</span></h1>
        </div>
        <div className="nine columns main-col">
          {resumeData.work && resumeData.work.map((item) => (
            <WorkItem key={item.CompanyName} {...item} />
          ))}
        </div>
      </div>
      <div className="row skill">
        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
        </div>
        <div className="nine columns main-col">
          <p>{resumeData.skillsDescription}</p>
          <div className="bars">
            <ul className="skills">
              {resumeData.skills && resumeData.skills.map((item) => (
                <SkillItem key={item.skillname} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
