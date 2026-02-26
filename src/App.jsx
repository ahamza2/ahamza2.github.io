import './App.css'
import NavbarMain from './components/navbar/NavbarMain'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Stats from './components/Stats'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-neutral-950 text-neutral-200 font-sans">
      <NavbarMain />
      <main>
        <Home />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
