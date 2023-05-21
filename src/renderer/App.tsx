import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
// import icon from '../../assets/icon.svg';
import './App.css';
import Controller from './components/Controller'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Controller />} />
      </Routes>
    </Router>
  );
}

export default App
