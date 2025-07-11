import './App.css'
// src/App.jsx
import 'boxicons/css/boxicons.min.css';
import NavbarMain from './components/Navbar/NavbarMain'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="bg-[#081b29] text-[#ededed] scroll-smooth">
      <NavbarMain />
      <main>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
