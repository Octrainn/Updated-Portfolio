import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons';
import './CSS Files/about.css';

function About() {
  const languages = [
    'JavaScript',
    'TypeScript',
    'HTML/CSS',
    'React',
    'NodeJS',
    'MongoDB',
    'Github/Git',
    'AWS',
    'Tailwind',
    'Bootstrap CSS',
    'Python',
    'Java',
    'JQuery',
    'SQL',
    'Django',
    'Angular',
  ];

  const learning = [
    'Svelte',
    'Android / IOS Development',
    'Machine Learning',
    'ThreeJS',
    'Tensor Flow',
    'Framer Motion',
    'Motion One',
  ];

  return (
    <section className='about-section' id='About'>
      <h1 className='about-title'>
        About<span style={{ color: '#FF004F' }}>.</span>
      </h1>
      <div className='section-divider'></div>
      <div className='content-wrapper'>
        <div className='about-text'>
          <p>
            Hey there! I'm a passionate web developer with a versatile skill set, specializing primarily in full-stack development. I possess a deep understanding of both front-end and back-end development and am constantly refining my abilities while seeking opportunities for growth in both domains.
          </p>
          <br />
          <p>
            Currently, I am actively seeking full-stack opportunities that encompass both front-end and back-end development. If you're interested, I'd be thrilled to connect and discuss potential collaborations. I am currently working on several projects that emphasize specific tech stacks and frameworks, allowing me to further enhance my expertise.
          </p>
          <br />
          <p>In my personal life, I enjoy collecting various figures, spending time watching shows, and creating UI/UX designs, and working out. </p>
          <br />
          <p>Feel free to reach out if you would like to explore the potential of working together!</p>
        </div>
        <div className='right-section'>
          <div className='tools'>
            <h1>
              <FontAwesomeIcon icon={faFaceSmileWink} style={{ color: '#ff005a' }} />{' '}
              Languages/Frameworks
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon icon={faFaceSmileBeam} style={{ color: '#ff005a' }}  /> {' '} 
               Learning
            </h1>
            {learning.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;