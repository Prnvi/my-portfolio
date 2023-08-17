import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import MainPage from "./Components/MainPage";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from './Components/Work';
import SkiilsProfile from './Components/SkiilsProfile';
import AboutNew from './Components/AboutNew';
function App() {
  return (
    <div className="App">
       <Router classname="w-screen">
          <NavBar />
          <MainPage/>
          {/* <About/> */}
          <AboutNew/>
          <SkiilsProfile/>
          <Skills/>
          <Work/>
          {/* <Routes>
            <Route path = "/" element={MainPage}/>
            <Route path = "/about" element={About}/>
            <Route path = "/skills" element={Skills}/>
          </Routes> */}
        </Router>
     
      
    </div>
  );
}

export default App;
