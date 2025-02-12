import React from "react";
import './courses.css'
import { NavLink } from "react-router-dom";


export default function Coursesbanner(){
    return(
        <>
            <div className="bannerBox">
                <div className="bannerinner fw-bold">
                    <div>
                    <h3 className="fw-bolder">Courses</h3>
                    <p><NavLink className={'nav-link d-inline'} to={'/'}>home</NavLink>{`>>`}courses</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}