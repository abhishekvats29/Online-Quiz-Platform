import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/quiz');
  };

  return (
    
    <div className="dashboard-container">
      <h1>Quiz Instructions</h1>
      <div className="ins">
        <p>Welcome to the Brightchamps quiz Competition! We are excited to have you here and hope you enjoy the challenge. Before we begin, please take a moment to review the following instructions.</p>
        <p>
            <span className='title'>Participation:</span> Participants will compete individually. Each participant will be assigned a unique identifier.</p>
        
        <p>
        <span className='title'>Time Limit:</span> Each question must be answered within [30] seconds. Failure to answer within the time limit will result in no points for that question.</p>
        <p>
        <span className='title'>Scoring: </span>
            Points will be awarded as follows:
          <ul>
            <li>Correct answer: 4 points</li>
            <li>Incorrect answer: 1 points deducted</li>
            <li>No answer: 0 points</li>
          </ul>
        </p>
        <p>
        <span className='title'>Devices:</span> Ensure your devices are fully charged and connected to a stable internet connection.</p>
        <p>
        <span className='title'>Platform:</span> The quiz will be conducted on Online quiz Platform. Please log in 5 minutes before the start time.</p>
        <p>We wish you all the best and hope you have a great time participating in the quiz competition! Please click on start button for start the test.</p>
      </div>
      <button className="start-button" onClick={handleStart}>Start</button>
    </div>
    
  );
};

export default Dashboard;
