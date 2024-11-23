import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './paths/home.jsx'
import Brakes from './paths/brakes.jsx'
import Downforce from './paths/downforce.jsx'
import Suspension from './paths/suspension.jsx'
import Gearing from './paths/gearing.jsx'

function App() {
  //Javascript here
  return (
    <>
      <Router>
        <div>
          {/* These are the routes for the app */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brakes" element={<Brakes />} />
            <Route path="/downforce" element={<Downforce />} />
            <Route path="/suspension" element={<Suspension />} />
            <Route path="/gearing" element={<Gearing />} />
          </Routes>
        </div>
      </Router>
  
    </>
  );
}

export default App
