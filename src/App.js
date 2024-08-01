import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateSurvey from './components/CreateSurvey';
import EditSurvey from './components/EditSurvey';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/edit-survey/:id" element={<EditSurvey />} />
        <Route path="/" element={<CreateSurvey />} />
      </Routes>
    </Router>
  );
};

export default App;
