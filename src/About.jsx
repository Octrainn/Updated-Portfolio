import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import './CSS Files/about.css';

function About() {
  const languages = [
    'JavaScript',
    'TypeScript',
    'C',
    'HTML/CSS',
    'Python',
    'Java',
    'SQL',
    'Lua',
    'NoSQL',
    
  
  ];

  const techStacks = [
    "MySQL",
    "Oracle",
    "MongoDB",
    "ReactJS",
    "Django",
    "Express JS",
    'NodeJS',
    'Git/Github',
    'Postgres',
    'AWS',




    


  ]

  const Paradigms = [
    "Object Oriented Programming (OOP)",
    "Functional Programming",
    "DSA",
  ]

  return (
    <section className='about-section' id='About'>
      <h1 className='about-title'>
        Skills<span style={{ color: '#FF004F' }}>.</span>
      </h1>
      <div className='section-divider'></div>
      <div className='content-wrapper'>
        <div className='about-text'>
          <p>
            Hey there! I'm a passionate web developer with a versatile skill set, specializing primarily in full-stack development. I possess a deep understanding of both front-end and back-end development and am constantly refining my abilities while seeking opportunities for growth in both domains.
          </p>
          <br />
          <p>
          Currently, I am actively seeking full-stack opportunities that encompass both front-end and back-end development. If you're interested, I'd be thrilled to connect and discuss potential collaborations. 
          </p>
          <br></br>
          <p>as for my hobbies, i enjoy creating video games, playing video games, watching shows and wokring out! </p>
          <br />
          <p>feel free to reach out if you would like to explore the potential of working together!</p>
        </div>
        <div className='right-section'>
          <div className='tools'>
            <h1>
              <FontAwesomeIcon icon={faFaceSmileWink} style={{ color: '#ff005a' }} />{' '}
              Programming Languages
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#ff005a' }}  /> {' '} 
             Techstacks
            </h1>
            {techStacks.map((item, index) => (
              <span key={index}>{item}</span>
            ))}

<h1>
              <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#ff005a' }}  /> {' '} 
             Programming Paradigms
            </h1>
            {Paradigms.map((item, index) => (
              <span key={index}>{item}</span>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;