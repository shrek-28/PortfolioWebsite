import React from "react";
import "./CourseComponentLeft.css";

const CourseComponentLeft = ({ courseNumber, imgSrc, heading, text }) => {
  return (
    <div className="course-container">
      {/* Course Title */}      
      {/* Course Card */}
      
        <div className="course-content">
          {/* Image Section */}
          <div className="course-image-container">
            <img src={imgSrc} alt={heading} className="course-image" />
          </div>
          
          {/* Text Section */}
          <div className="course-text">
            <h2 className="course-heading text-white">{heading}</h2>
            <p className="course-description text-white">{text}</p>
          </div>
        </div>
      </div>
  );
};

export default CourseComponentLeft;
