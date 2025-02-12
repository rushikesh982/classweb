import React from "react";
import './admission.css'
import { NavLink } from "react-router-dom";


export default function Admissionbanner()
{
    return(
        <>
            <div className="bannerBox">
                <div className="bannerinner fw-bold">
                    <div>
                    <h3 className="fw-bolder">Admissions</h3>
                    <p><NavLink className={'nav-link d-inline'} to={'/'}>home</NavLink>{`>>`}Admissions</p>
                    </div>
                </div>
                            
            </div>
        </>
    )
}