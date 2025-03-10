import React from 'react';
import CourseComponentLeft from './CourseComponentLeft'; // Import the left component
import CourseComponentRight from './CourseComponentRight'; // Import the right component
import SkillsBackground from './PageBackground'; // Import background
import './CoursesPage.css';

function CoursesPage() {
  const courses = [
    {
        imgSrc: 'https://www.svgrepo.com/show/530661/genetic-data.svg',
        heading: 'Genomic Data Science',
        text: 'This course covers computational techniques for analyzing genomic data. It includes bioinformatics tools, sequencing technologies, and hands-on projects to understand the fundamentals of genomic research.',
    },
    {
        imgSrc: 'https://static-00.iconduck.com/assets.00/biology-cancer-cell-disease-health-human-tumor-illustration-2048x2000-cknist75.png',
        heading: 'Cancer Biology Specialization',
        text: 'This course explores the molecular basis of cancer, including genetic mutations, tumor progression, and targeted therapies. It provides insights into research methodologies used in cancer biology.',
    },
    {
        imgSrc: 'https://www.svgrepo.com/show/373830/matlab.svg',
        heading: 'MATLAB Onramp',
        text: 'A beginner-friendly introduction to MATLAB, covering fundamental concepts, matrix operations, and programming basics with interactive exercises to reinforce learning.',
    },
    {
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/7343/7343857.png',
        heading: 'Neurobiology',
        text: 'An introduction to the nervous system, exploring brain function, neural networks, and mechanisms behind cognition, perception, and behavior.',
    },
    {
        imgSrc: 'https://www.svgrepo.com/show/303548/git-icon-logo.svg',
        heading: 'Git and GitHub',
        text: 'Covers version control fundamentals, branching, merging, and collaborating using Git and GitHub. Essential for developers working in teams or managing projects efficiently.',
    },
    {
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png',
        heading: 'Linux',
        text: 'This course introduces Linux fundamentals, command-line operations, file systems, scripting, and system administration, helping users become proficient in Linux environments.',
    },
    {
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/4824/4824797.png',
        heading: 'Data Science and Machine Learning',
        text: 'A comprehensive course covering data preprocessing, visualization, statistical analysis, and machine learning models using Python and libraries like Scikit-learn and TensorFlow.',
    },
];


  const leftCourses = courses.filter((_, index) => index % 2 === 0);
  const rightCourses = courses.filter((_, index) => index % 2 !== 0);

  return (
    <div className="courses-page">
      <SkillsBackground quote="AS KNOWLEDGE INCREASES, WONDER DEEPENS" />
      <div className="courses-main">
        <h1 className="courses-header">My Courses</h1>
        <div className="courses-columns">
          {/* Left Column */}
          <div className="courses-left">
            {leftCourses.map((course, index) => (
              <CourseComponentLeft
                key={index}
                imgSrc={course.imgSrc}
                heading={course.heading}
                text={course.text}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="courses-right">
            {rightCourses.map((course, index) => (
              <CourseComponentRight
                key={index}
                imgSrc={course.imgSrc}
                heading={course.heading}
                text={course.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
