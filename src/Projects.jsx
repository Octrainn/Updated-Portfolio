import React from 'react';
import './CSS Files/projects.css';

import medical from './Images/medical.png';
import fault from './Images/FaultFinder.png';
import calendar from './Images/Calendar.png';
import tensor from './Images/TensorFlow.jpg';
import discord from './Images/DiscordBot.png';
import picture from './Images/Better.jpg';
import SpaceSim from './Images/SpaceSim.png';
import Ruby from './Images/Ruby.png'
import RateMyCourses from "./Images/RateMyCourses.png"


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function ProjectCard({ title, imageSrc, githubLink, technologies, description }) {
  return (
    <div className='project'>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <img className='images' src={imageSrc} alt={title} />
      </a>
      <div className='project-info'>
        <div className='project-title'>
          <h2>{title}</h2>
          <div className='liness'></div>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <h3><span style={{ color: '#FF004F' }}>{technologies}</span></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id='Projects'>
      <h1 className='title'>
        My Projects <span style={{ color: '#FF004F' }}>.</span>{' '}
      </h1>
      <div className='projects-wrapper'>
      <ProjectCard
  className="project-card"
  title="Space Simulator X"
  imageSrc={SpaceSim}
  githubLink="https://www.roblox.com/games/15775582193/UPD-4-Space-Simulator-X"
  technologies="LUA, Roblox Game Engine, ProfileService API, TopBarPlus API"
  
  description="Developed a fully functional game in Roblox, utilizing multiple tech stacks and APIs. Game is publicly available, click the icon above."
/>

<ProjectCard
  className="project-card"
  title="RateMyCourses"
  imageSrc={RateMyCourses}
  githubLink="https://github.com/EliyaFarhat/RateMyClasses"
  technologies="MongoDB, Docker, Postman, React, Node, Express"
  
  description="Developed a full-stack MERN web app for course reviews at Toronto Metropolitan University using
MongoDB to store users and courses. "
/>


<ProjectCard
  className="project-card"
  title="Bug Report Rails"
  imageSrc={Ruby}
  githubLink="https://github.com/EliyaFarhat/BugReportRails"
  technologies="Ruby, Docker, Javscript, Ruby on Rails, PostgreSQL"
  description="Full-stack web application responsible for tracking bug reports. Includes graphical representations of past sprint data to help visualize data effectively. Implemented user registration and login with a PostgreSQL database for secure data storage "
/>



<ProjectCard
  className="project-card"
  title="Hackathon Fault Finder"
  imageSrc={fault}
  githubLink="https://github.com/HNow/MetHacks2023Base"
  technologies="NodeJS, Astro/React, HTML/CSS, JS/JSX, Python, OpenAI API, Figma"
  description="The project employs OpenAI's API to generate interview-level questions paired with intentionally incorrect solutions process."
/>



<ProjectCard
  className="project-card"
  title="Health Policy Student Association"
  imageSrc={medical}
  githubLink="https://github.com/ChrisMikhail/hpsa-website"
  technologies="HTML CSS JavaScript JQuery"
  description="The website is a nonprofit organization aiming to raise awareness among students by providing information on corporate health and policies. It serves as a project proposal with a fully responsive design for both mobile and desktop platforms. Website URL/link is posted in the README."
/>

      </div>
    </div>
  );
}

export default Projects;
