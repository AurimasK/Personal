import React from 'react';
import './profile.css';
import avatar from '../images/me.jpg';
import mailIcon from '../images/mail.svg';
import linkedinIcon from '../images/linkedin.svg';

function profile() {
  return (
    <div class="centered">
      <div class="card-container">
        <div className="avatar-container">
          <img alt="Me" src={avatar} />
        </div>
        <h2>Hello, my name is Aurimas.</h2>
        <h5>I&apos;m from Vilnius</h5>
        <div className="introduction-text"> 
          <p>
            I&apos;m a fullstack developer currently working with Ruby on Rails.
            I&apos;m proficient with Ruby on Rails and for some time worked on Golang and React project.
          </p>
          <p>
            Right now I&apos;m spending some free time to improve my JS skills using Express, React, Node.
            I&apos;m keen to write fast and maintainable code and continue learning more about system design and architecture.
          </p>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>Fullstack development</li>
            <li>Ruby on Rails</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>SQL</li>
            <li>Docker</li>
            <li>Git</li>
            <li>Unit testing</li>
          </ul>
        </div>
        <div className="icons">
          <h6 className="icons-header">Contact me</h6>
          <a href="mailto:aurimas@kancavicius.lt">
            <img alt="Email" src={mailIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/aurimaskancavicius/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="LinkedIn" src={linkedinIcon} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default profile;



