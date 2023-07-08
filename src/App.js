import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Header from './components/Header/Header';
// Page
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
