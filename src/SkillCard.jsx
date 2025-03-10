import React from 'react';
import './SkillCard.css'; // Optional custom CSS for the card

function SkillCard({ name, image }) {
  return (
    <div className="skill-card">
      <div className="card-content flex justify-center">
        <div className="skill-card-image">
          <img alt={name} loading="lazy" width="100" height="100" src={image} />
        </div>
        <div className="card-info-wrapper">
          <div className="card-info">
            <div className="card-info-title">
              <h4 className="text-center">{name}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
