import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import HomePage from './pages/HomePage';
import FeaturedProjectView from './Components/FeaturedProjectView';
// import FeaturedProjectView from '../components/FeaturedProjectView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Dynamic route passing a project ID url context hook */}
        <Route path="/project/:projectId" element={<FeaturedProjectView />} />
      </Routes>
    </Router>
  );
}
export default App;