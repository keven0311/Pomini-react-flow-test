
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import './App.css'
import Home from './components/Home'
import Other from './components/Other'
import ReactFlow from "./components/ReactFlow"
import Studio from "./components/Studio"
import StudioList from "./components/StudioList"
import StudioDetail from "./components/StudioDetail"

function App() {
  
  return (
      <Router>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/other' element={<Other/>}/>
         <Route path="/flow" element={<ReactFlow/>}/>
         <Route path="/studioList" element={<StudioList/>}/>
         <Route path="/studio/:id" element={<StudioDetail/>}/>
         <Route path="/studio" element={<Studio/>}/>
        </Routes>
      </Router>
  )
}

export default App
