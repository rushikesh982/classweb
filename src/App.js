import './App.css';
import Menu from './website/heder/Menu.jsx';
import About from './website/home/About.jsx';
import Courses from './website/home/Courses.jsx';
import Founder from './website/home/Founder.jsx';
import Slider from './website/home/Slider.jsx';


function App() {
  return (
    <>
        <Menu/>
        <Slider />
        <About />
        <Courses/>
        <Founder />
    </>
  );
}

export default App;
