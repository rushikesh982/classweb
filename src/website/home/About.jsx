import React from "react";
import './about.css'



var data =[
    {
        'icon': 'ri-team-line',
        'detail':'1lakh alumini+'
    },
    {
        'icon': 'ri-team-line',
        'detail':' admission asistance'
    },
    {
        'icon': 'ri-user-community-line',
        'detail':'temart'
    },
    {
        'icon': 'ri-book-shelf-line',
        'detail':'learning material'
    },
    {
        'icon': 'ri-booklet-fill',
        'detail':'quality education'
    },
    {
        'icon': 'ri-wallet-3-line',
        'detail':'affotdable fees'
    }
]

 function About(){
    return(
        <>
            <div className="aboutBox">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-6 img1 position-relative">
                            <img src="VectorAboutimg.png" className="d-block p-2 vectorimg" alt="" />
                            <img src="AboutImg.png" alt="" />
                            <h1><span>Takalkar</span>Classes</h1>
                            <p>
                                In the year 1987, a visionary saw a dream. A dream to impart quality education to every student who would come seeking it. Through his persistent efforts , Prof. Kedar Takalkar realized his dream and brought the Takalkar Legacy to life along with Prof. Vrinda Takalkar, Prof. Ritesh Bhattad , and Mr. Sheetal Patil as support pillars and directors of the organization	
                            </p>
                            <img src="aboutbtn.png" className="btns" alt="" />
                            <div className="row aboutData">
                                {data.map((item)=>{
                                    return(
                                        <>
                                          <div className="col-12 col-md-4">
                                            <i className={item.icon}></i>
                                            <p className=" d-inline">{item.detail}</p>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 img2">
                            <img src="taklkarAbout.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About