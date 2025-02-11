import React from "react";
import About from './About.jsx';
import Courses from './Courses.jsx';
import Article from './Article.jsx';
import Founder from './Founder.jsx';
import Slider from "./Slider.jsx";
import Branches from "./Branches.jsx";




function Home(){
    return(
        <>
            <Slider />
            <About />
            <Courses/>
            <Founder />
            <Article/>
            <Branches/>
        </>
    )
}

export default Home