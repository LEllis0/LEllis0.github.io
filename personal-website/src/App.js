import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Blog from './components/Blog';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <NavBar>
        <Routes>
          <Route path="/" element={<AboutMe/>}  />
          <Route path="/services" element={<Services/>}  />
          <Route path="/blog" element={<Blog/>}  />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </NavBar>
    </Router>
  );
}

export default App;
