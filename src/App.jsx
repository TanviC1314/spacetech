import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' // Ensure this path is correct
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx'; // Adjusted path to correct location

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
