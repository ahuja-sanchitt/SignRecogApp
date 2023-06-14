import React from 'react';
import Apps from './Apps';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Apps/>}/>
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
