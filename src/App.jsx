import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx'; // Adjusted path to correct location
import Events from './pages/events.jsx'; // Import the Events component
import About from './pages/about.jsx'; // Import the About component

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} /> {/* Add the About route */}
        </Routes>
      </Router>
    </>
  )
}

export default App
