import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// Page
import Homepage from './pages/Homepage/Homepage';
import Project from './pages/ProjectPage/Project';
import Experience from './pages/Experience/Experience';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
