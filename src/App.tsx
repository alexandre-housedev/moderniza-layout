
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<iframe src="/src/pages/index.html" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
