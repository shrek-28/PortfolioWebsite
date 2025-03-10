import React from 'react';
import PropTypes from 'prop-types';
import './ProjectComponent.css';

const ProjectComponent = ({ imageLink, title, description, buttonLink }) => {
  return (
    <div
      className="project-component"
      style={{ backgroundImage: `url(${imageLink})` }}
    >
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={buttonLink}
          className="project-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

ProjectComponent.propTypes = {
  imageLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default ProjectComponent;
