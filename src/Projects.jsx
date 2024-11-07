import React from 'react';
import './CSS Files/projects.css';

import medical from './Images/medical.png';
import fault from './Images/FaultFinder.png';
import calendar from './Images/Calendar.png';
import tensor from './Images/TensorFlow.jpg';
import discord from './Images/DiscordBot.png';
import picture from './Images/Better.jpg';
import SpaceSim from './Images/SpaceSim.png';


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
  title="Hackathon Fault Finder"
  imageSrc={fault}
  githubLink="https://github.com/HNow/MetHacks2023Base"
  technologies="NodeJS, Astro/React, HTML/CSS, JS/JSX, Python, OpenAI API, Figma"
  description="The project employs OpenAI's API to generate interview-level questions paired with intentionally incorrect solutions. It utilizes a backend database in Node.js to present users with these questions and solutions, allowing them to review and debug the provided code. The system then provides feedback on the accuracy of the debugging process."
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
