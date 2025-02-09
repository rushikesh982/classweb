// import React from "react"

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
                <div className="image-box grid gap-3">
                    <img src="logo.png" className="g-col-6" alt="" />
                    <img src="Takalkar-classes-centres-in-pune-and-pcmc.png" className="g-col-6" alt="" />
                </div>
                <div className="navItemBox">
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>courses</li>
                        <li>admission</li>
                        <li>gallery</li>
                        <li>contact</li>
                        <i class="ri-menu-line"></i>
                        <button className="btn btn-danger">enquire now</button>
                    </ul>
                </div>
            </div>

            {/* nav end */}
        </>
    )
}