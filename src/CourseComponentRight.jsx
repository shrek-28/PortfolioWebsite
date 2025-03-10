import React from "react";
import "./CourseComponentRight.css";

const CourseComponentRight = ({ courseNumber, imgSrc, heading, text }) => {
  return (
    <div className="course-container">
      
      {/* Course Card */}
      
        <div className="course-content">
          {/* Text Section */}
          <div className="course-text">
            <h2 className="course-heading text-white">{heading}</h2>
            <p className="course-description text-white">{text}</p>
          </div>
          
          {/* Image Section */}
          <div className="course-image-container">
            <img src={imgSrc} alt={heading} className="course-image" />
          </div>
        </div>
      </div>
    
  );
};

export default CourseComponentRight;
