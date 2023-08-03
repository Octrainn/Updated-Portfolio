import React from 'react';
import './CSS Files/projects.css';

import medical from './Images/medical.png';
import fault from './Images/FaultFinder.png';
import calendar from './Images/Calendar.png';
import tensor from './Images/TensorFlow.jpg';
import discord from './Images/DiscordBot.png';

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
          title="Health Policy Student Association"
          imageSrc={medical}
          githubLink="https://github.com/ChrisMikhail/hpsa-website"
          technologies="HTML CSS JavaScript JQuery"
          description="The website is a nonprofit organization aiming to raise awareness among students by providing information on corporate health and policies. It serves as a project proposal with a fully responsive design for both mobile and desktop platforms."
        />

        <ProjectCard
          title="Hackathon Fault Finder"
          imageSrc={fault}
          githubLink="https://github.com/HNow/MetHacks2023Base"
          technologies="NodeJS, Astro/React, HTML/CSS, JS/JSX, Python, OpenAI API, Figma"
          description="The project employs OpenAI's API to generate interview-level questions paired with intentionally incorrect solutions. It utilizes a backend database in Node.js to present users with these questions and solutions, allowing them to review and debug the provided code. The system then provides feedback on the accuracy of the debugging process."
        />

        <ProjectCard
          title="React Calendar"
          imageSrc={calendar}
          githubLink="https://github.com/Octrainn/React-Calendar-App"
          technologies="React JSX, GH-Pages, Vite, CSS"
          description="React-Calendar is a feature-rich calendar component built using React. Leveraging the power of React, it offers several dynamic and interactive features to enhance the user experience."
        />

        <ProjectCard
          title="Discord Bot Weaver"
          imageSrc={discord}
          githubLink="https://github.com/Octrainn/DiscordBot"
          technologies="Python, OAuth 2.0, Spotify API"
          description="Versatile Discord bot that utilizes the Spotify API to stream music, and it offers several other functionalities like moderation, chat restriction, image generation, and meme generation."
        />

        <ProjectCard
          title="Tensor Flow Model"
          imageSrc={tensor}
          githubLink="https://github.com/Octrainn/TensorFlowModel"
          technologies="Python, Juypter Notebook, Google Colab"
          description="Mini-project that focuses on implementing a machine learning model to accurately differentiate between images of humans and animals, specifically distinguishing between dogs and cats. Additionally, the project leverages the computational capabilities of Google Colab to efficiently train the model and handle the image datasets effectively."
        />
      </div>
    </div>
  );
}

export default Projects;
