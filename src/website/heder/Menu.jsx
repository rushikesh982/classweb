// import React from "react"

import { NavLink } from "react-router-dom";

export default function Menu(){
    return(
        <>
            {/* mini nav start */}
            <div className="d-none d-lg-block text-light">
                <div className="minNavContainer">
                    <div className="leftSec">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <p className="d-inline">
                                        <i class="ri-mail-line"></i>xyz@gmail.com
                                    </p>
                                </div>
                                <div className="col-6">
                                    <p className="d-inline">
                                        <i class="ri-phone-fill"></i>11234465667
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightSec">
                        <div className="container-fluid">
                            <div className="row grid gap-3 text-primary ">
                                <div className="col-3 col-lg-1">
                                    <i class="ri-facebook-circle-line p-2 bg-light rounded-circle"></i>
                                </div>
                                <div className="col-3 col-lg-1">
                                    <i class="ri-instagram-line p-2 bg-light rounded-circle"></i>
                                </div>
                                <div className="col-3 col-lg-1">
                                    <i class="ri-twitter-x-line p-2 bg-light rounded-circle"></i>
                                </div>
                                <div className="col-3 col-lg-1">
                                    <i class="ri-youtube-line p-2 bg-light rounded-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mini nav end */}

            {/* nav start */}

            <div className="navContainer">
                <div className="image-box ">
                    <img src="logo.png" alt="" />
                    <img src="Takalkar-classes-centres-in-pune-and-pcmc.png" alt="" />
                </div>
                <div className="navItemBox ">
                    <ul>
                        <li>
                            <NavLink className="nav-link d-inline" to='/'style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link d-inline' to='/About' style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>About</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link d-inline' to='/courses'style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>courses</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link d-inline' to='/admission'style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>Admission</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link d-inline' to='/Gallery'style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>Gallery</NavLink>
                        </li>
                        <li>
                            <NavLink className='nav-link d-inline' to='/Contact'style={({ isActive }) => ({
                                color: isActive ? "red" : "black",
                                fontWeight: isActive ? "bold" : "normal",
                            })}>Contact</NavLink>
                        </li>
                        <i class="ri-menu-line"></i>
                        <button className="btn btn-danger text-capitalize" data-bs-toggle="modal" data-bs-target="#exampleModal">enquire now</button>
                    </ul>
                </div>
            </div>

            {/* nav end */}
        </>
    )
}