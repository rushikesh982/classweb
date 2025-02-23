import React from "react";
import './contact.css';
import { NavLink } from "react-router-dom";


export default function Contactbanner(){
    return(
        <>
            <div className="aboutbannerBox">
                <div className="aboutbannerinner fw-bold">
                    <div>
                    <h3 className="fw-bolder">contact </h3>
                    <p><NavLink className={'nav-link d-inline'} to={'/'}>home</NavLink>{`>>`}contact</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}