import React from "react";
import './About.css';
import { NavLink } from "react-router-dom";


export default function Aboutbanner(){
    return(
        <>
            <div className="bannerBox">
                <div className="bannerinner fw-bold">
                    <div>
                    <h3 className="fw-bolder">About us</h3>
                    <p><NavLink className={'nav-link d-inline'} to={'/'}>home</NavLink>{`>>`}about</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}