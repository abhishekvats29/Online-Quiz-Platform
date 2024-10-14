import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Quiz from './Quiz';
import Result from './Result';


import './App.css';


function App() {
  return (
    
    
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Result" element={<Result />} />

        
        
      </Routes>

      
    </Router>


  );
}

export default App;
