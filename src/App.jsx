import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About'
import Resume from './components/Resume'
import Works from './components/Works'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="works" element={<Works />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
