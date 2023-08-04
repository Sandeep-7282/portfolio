
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
   <>  <Router>
   <div className="app-cont">
  <Navbar/>
 
    <Routes>
  <Route exact path='/' element={<Home/>}></Route>
  <Route exact path='/about' element={<About/>}></Route>
  <Route exact path='/education' element={<Education/>}></Route>
  <Route exact path='/contact' element={<Contact/>}></Route>
  </Routes>
  <Footer/>
  </div>
  </Router>
   </>
  );
}

export default App;
