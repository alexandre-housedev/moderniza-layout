
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import HomePopup from './components/HomePopup';
import './App.css';

// Component to conditionally render the popup only on the home page
const PopupWrapper = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return isHomePage ? <HomePopup /> : null;
};

function App() {
  return (
    <Router>
      <PopupWrapper />
      <Routes>
        <Route path="/" element={<iframe src="/src/pages/index.html" style={{ width: '100%', height: '100vh', border: 'none' }} />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
