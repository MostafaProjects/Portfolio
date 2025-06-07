
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoadSideRepair from './pages/RoadSideRepair';
import Home from './pages/Home';
import SuccessMessage from './pages/SuccessMessage';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RoadSideRepair" element={<RoadSideRepair />} />
        <Route path="/RoadSideSuccessful/SuccessMessage" element={<SuccessMessage />} />

      </Routes>
    </Router>
  );
};
