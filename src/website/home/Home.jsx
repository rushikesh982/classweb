import React from "react";
import About from './About.jsx';
import Courses from './Courses.jsx';
import Article from './Article.jsx';
import Founder from './Founder.jsx';
import Slider from "./Slider.jsx";
// import Menu from "../heder/Menu.jsx";
// import Menu from "./heder/Menu.jsx";



function Home(){
    return(
        <>
            {/* <Menu/> */}
            <Slider />
            <About />
            <Courses/>
            <Founder />
            <Article/>
        </>
    )
}

export default Home