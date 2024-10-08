import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Blog from './components/Blog';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}  />
          <Route path="/services" element={<Services/>}  />
          <Route path="/blog" element={<Blog/>}  />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
