import React from 'react';
import './PageBackground.css'

function SkillsBackground({ quote }) {
  return (
    <div className="page-background-div">
      <h1 className="page-centered-text"> {quote} </h1>
    </div>
  );
}

export default SkillsBackground;
