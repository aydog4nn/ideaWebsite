import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Academic from "./pages/Academic"
import Header from "./components/Header"
import FirstSection from "./components/homeComponents/FirstSection"
import SecondSection from "./components/homeComponents/SecondSection"
import "./index.css"

function App() {
  
  return (
    <div className="flex flex-col bg-black">
        <Header/>
        

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/academic" element={<Academic />}/>
           
        </Routes>
    </div>
  )
}

export default App
