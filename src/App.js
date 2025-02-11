import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import './App.css';
import Home from './website/home/Home';
import Menu from './website/heder/Menu';
import About from './website/About/About';



function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About></About>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
