import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Weapon from './components/Weapon'
import Illustration from './components/Illustration'
import Footer from './components/Footer'
import { useState } from "react"
import IllustPage from './pages/IllustPage'

function App() {
  const [currentView, setCurrentView] = useState<"home" | "illust">("home")

  return (
    <div className="nes-root">
      <Navbar currentView={currentView} onViewChange={setCurrentView}/>
      {currentView === "home" ? (
        <div>
          <Header/>
          <About/>
          <Weapon/>
          <Illustration/>
      </div>
      ) : <IllustPage/>}
      <Footer/>
    </div>
  )
}

export default App
