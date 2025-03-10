import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes here
import NavigationBar from './NavigationBar';
import Background from './Background';
import AboutMe from './AboutMe';
import Footer from './Footer';
import PortfolioPage from './PortfolioPage'; // Import PortfolioPage component
import CoursesPage from './CoursesPage';
import DataProjects from './DataProjects';
import CodingProjects from './CodingProjects';
import BiologyProjects from './BiologyPortfolio';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes> {/* Use Routes here instead of Switch */}
        <Route path="/" element={<><Background /><AboutMe /></>} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/DataProjects" element={<DataProjects />} />
        <Route path="/CodingProjects" element={<CodingProjects />} />
        <Route path='/BioProjects' element={<BiologyProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
