import React from 'react';
import './App.css';
import avatar from './images/me.jpg';
import mailIcon from './images/mail.svg';
import linkedinIcon from './images/linkedin.svg';

function App() {
  return (
    <div className="background">
      <div className="avatar-container">
        <img alt="Me" src={avatar} />
      </div>
      <h1>Hello, my name is Aurimas.</h1>
      <p>I&apos;m a fullstack developer. </p>
      <p>I&apos;m proficient with Ruby on Rails.</p>
      <p>
        Right now I&apos;m improving my MERN stack skils:
        MongoDB/Express/React/Node
      </p>
      <p>You can reach me with Email or on LinkedIn:</p>
      <div className="icons">
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
  );
}

export default App;
