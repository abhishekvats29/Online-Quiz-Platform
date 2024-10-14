
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state;

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <div className="result-container">
        <div className="thankyou-container">
      <h1>Thank You for Participating !</h1>
      <p>"We appreciate your time and effort in completing the quiz. Your participation is valuable to us, and we hope you enjoyed the challenge."</p> </div>
      <h1 className='result'>Quiz Results</h1>
      <p>You scored {score} out of {total}</p>
      <button className="restart-button" onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
