import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Reservation from './Reservation'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/reserve'} element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
