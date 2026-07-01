import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CVPage from './pages/CVPage';
import HighlightsPage from './pages/HighlightsPage';
import PublicationsPage from './pages/PublicationsPage';
import ExperiencePage from './pages/ExperiencePage';
import RecentsPage from './pages/RecentsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-950">
        <Navigation />
        <Routes>
          <Route path="/" element={<CVPage />} />
          <Route path="/highlights" element={<HighlightsPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/recents" element={<RecentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;