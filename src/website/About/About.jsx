import React from "react";
import Aboutbanner from "./Aboutbanner";
import Teachingmethd from "./Teachingmethd";
import Abouttaklkar from "./Abouttaklkar";
import Aboutfounder from "./Aboutfounder";
import Different from "./Different";


export default function About()
{
    return(
        <>
            <Aboutbanner/>
            <Abouttaklkar/>
            <Aboutfounder/>
            <Different/>
            <Teachingmethd/>
        </>
    )
}