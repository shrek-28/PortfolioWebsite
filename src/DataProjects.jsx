import React from 'react';
import ProjectComponent from './ProjectComponent'; // Import the ProjectComponent
import NavigationBar from './NavigationBar'; // Import the NavigationBar component
import './DataProjects.css';
import SkillsBackground from './PageBackground';

function DataProjects() {
  const projects = [
    {
      title: 'ALogP Predictor',
      description: 'In this project, Random Forest Regressors are used to predict the atom-based lipophilicity of a molecule. This is trained on a natural product database, achieving an R2 score over 0.9.',
      imageLink: 'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGZvcmVzdHxlbnwwfHwwfHx8MA%3D%3D',
      buttonLink: 'https://github.com/shrek-28/alogp-predictor-regressor'
    },
    {
      title: 'Kidney Stone Prediction',
      description: 'In this project, thorough EDA was conducted, to predict the presence of a kidney stone. Logistic Regression, KNN and SVM models were trained, with the KNN model performing the best',
      imageLink: 'https://www.shutterstock.com/shutterstock/videos/3714179337/thumb/1.jpg?ip=x480',
      buttonLink: 'https://github.com/shrek-28/kidney-stone-prediction/tree/main'
    },
    {
      title: 'Customer Segmentation',
      description: 'The project involves loading and preprocessing wholesale customer data, exploring the data through visualizations, and then applying the DBSCAN clustering algorithm to segment the customers. The results are analyzed and visualized to gain insights into the distinct groups identified by the clustering process.',
      imageLink: 'https://media.istockphoto.com/id/1489059847/vector/background-of-electric-circuit-metal-black.jpg?s=612x612&w=0&k=20&c=Bof_oGrxx0PXKOFSWc2RhY60LalpZ8WQV9n4JqhHuDQ=',
      buttonLink: 'https://github.com/shrek-28/MarketMosaic'
    },
    {
      title: 'Airline Sentiment Analysis',
      description: 'The project involves loading a dataset of airline tweets, preprocessing the text data, and applying various machine learning models to classify the sentiment of the tweets. The models used include Naive Bayes, Logistic Regression, and Support Vector Machines (SVM). The results are evaluated using classification metrics and confusion matrices.',
      imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mXwxuF4IGGaMLEkbDaU9i46Tpna9cyZWSw&s',
      buttonLink: 'https://github.com/shrek-28/AirlineSentimentAnalyzer'
    },
  ];

  return (
    <div className="portfolio-page">
      {/* Navigation Bar with black background and white text */}
      {/* <NavigationBar /> */}
      <SkillsBackground quote='THE EXPERT IN EVERYTHING WAS ONCE A BEGINNER' />
      <div className="data-projects-main">
        <div className="data-projects-grid">
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

export default DataProjects;
