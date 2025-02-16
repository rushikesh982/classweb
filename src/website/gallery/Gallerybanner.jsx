import React from "react";
import './gallery.css'
import { NavLink } from "react-router-dom";


export default function Gallerybanner(){
    return(
        <>
            <div className="bannerBox">
                <div className="bannerinner fw-bold">
                    <div>
                        <h3 className="fw-bolder">Gallery</h3>
                        <p><NavLink className={'nav-link d-inline'} to={'/'}>home</NavLink>{`>>`}Gallery</p>
                    </div>
                </div>              
            </div>
        </>
    )
}