import React from 'react';
import ProjectComponent from './ProjectComponent'; // Import the ProjectComponent
import NavigationBar from './NavigationBar'; // Import the NavigationBar component
import './CodingProjects.css';
import SkillsBackground from './PageBackground';

function CodingProjects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is the first project description.',
      imageLink: 'https://via.placeholder.com/300',
      buttonLink: 'https://example.com/project1'
    },
    {
      title: 'Project 2',
      description: 'This is the second project description.',
      imageLink: 'https://via.placeholder.com/300',
      buttonLink: 'https://example.com/project2'
    },
    {
      title: 'Project 3',
      description: 'This is the third project description.',
      imageLink: 'https://via.placeholder.com/300',
      buttonLink: 'https://example.com/project3'
    },
    {
      title: 'Project 4',
      description: 'This is the fourth project description.',
      imageLink: 'https://via.placeholder.com/300',
      buttonLink: 'https://example.com/project4'
    },
    {
      title: 'Project 5',
      description: 'This is the fourth project description.',
      imageLink: 'https://via.placeholder.com/300',
      buttonLink: 'https://example.com/project4'
    }
  ];

  return (
    <div className="portfolio-page">
      {/* Navigation Bar with black background and white text */}
      {/* <NavigationBar /> */}
      <SkillsBackground quote='THE EXPERT IN EVERYTHING WAS ONCE A BEGINNER' />
      <div className="coding-projects-main">
        <h1 className="coding-projects-header">My Projects</h1>
        <div className="coding-projects-grid">
          {projects.map((project, index) => (
            <ProjectComponent
              key={index}
              title={project.title}
              description={project.description}
              imageLink={project.imageLink}
              buttonLink={project.buttonLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CodingProjects;
