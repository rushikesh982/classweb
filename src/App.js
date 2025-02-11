import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './website/home/Home';
import Menu from './website/heder/Menu';
import About from './website/About/About';
import Courses from './website/courses/Courses';
import Admission from './website/admission/Admission';
import Gallery from './website/gallery/Gallery';
// import Contact from './website/contact/Contact.jsx';
import Contact from './website/contact/Contact.jsx';
import Footer from './website/footer/Footer.jsx';


function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/courses' element={<Courses></Courses>}></Route>
          <Route path='/admission' element={<Admission />}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
