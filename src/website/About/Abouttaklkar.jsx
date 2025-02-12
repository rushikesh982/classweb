import React from "react";
import './About.css'


export default function Abouttaklkar(){
    return(
        <>
            <div className="aboutTaklkarOuter">
                <div className="box1">
                    <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/about.jpg" alt="" />
                </div>
                <div className="box2">
                    <h3 className="fw-bold text-uppercase">About <span className="text-danger">Takalkar Classes</span></h3>
                    <p>in the year 1987, a visionary saw a dream. A dream to impart quality education to    every student who would come seeking it. Through his persistent eﬀorts, Prof. Kedar Takalkar realized his dream and brought the Takalkar legacy to life along with Prof. Vrinda Takalkar, Prof. Ritesh Bhattad, and Mr. Sheetal Patil as support pillars and directors of the organization.
                        Takalkar Eduhub Pvt. Ltd. with a directorial experience of 70+ years has evolved tremendously, both in their scale and the quality of education. Started from just 20 students in the ﬁrst batch, the class today caters to thousands of students every year.
                        Student-centric approach, stress-free environment, and personal attention from the dedicated team of teachers play a crucial role in helping students achieve their goals and thus resulting in fulﬁlling parents their dream.</p>
                        <button className="btn btn-success text-light p-2"><i class="ri-megaphone-line ml-2"></i>Apply For Admission</button>
                </div>
            </div>
        </>
    )
}