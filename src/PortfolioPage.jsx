import React from 'react';
import SkillCard from './SkillCard'; // Import the SkillCard component
import NavigationBar from './NavigationBar'; // Import the NavigationBar component
import './PortfolioPage.css'
import SkillsBackground from './PageBackground';

function PortfolioPage() {
  const skills = [
    { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
    { name: 'Express.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }, // Better for black bg
    { name: 'FastAPI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' }, // Ensures visibility
    { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }, // Without wordmark for contrast
    { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }, // Better contrast
    { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'SQLite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    { name: 'Redis', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Flask', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' }, // Better contrast
    { name: 'Bash', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
    { name: 'Bootstrap', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }, // Without wordmark for visibility
    { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }, // Without wordmark for black bg
    { name: 'PyTorch', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
    { name: 'Scikit-Learn', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' }, // Using alternative for contrast
    { name: 'Statsmodels', image: 'https://www.statsmodels.org/stable/_images/statsmodels-logo-v2.svg' }, // Alternative logo
    { name: 'TensorFlow', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Streamlit', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg' },
    { name: 'OpenCV', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
    { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Elasticsearch', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' }, // Better contrast
  ];
  
  

  return (
    <div className="portfolio-page">
      {/* Navigation Bar with black background and white text */}
      {/* <NavigationBar /> */}
      <SkillsBackground quote='THE EXPERT IN EVERYTHING WAS ONCE A BEGINNER'/>
      <div className="skills-main">
        <h1 className="skills-header">My Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard key={index} name={skill.name} image={skill.image} />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default PortfolioPage;
