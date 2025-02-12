import React from "react";
import './courses.css'


export default function Coursesdetail(){
    return(
        <>
            <div className="container-fluid courses">
                    <div className="row">
                        <div className="col-12 text-center mt-5 mb-5">
                            <h1 className="fw-bolder text-capitalize">courses offered</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-0 p-md-5">
                            <img src="https://takalkarclasses.com/wp-content/uploads/2023/05/i1.png" alt="" />
                            <p>The MHT-CET or  Common Entrance Test is an annual entrance exam conducted by the Government of Maharashtra. It is conducted by the Directorate of Technical Education. The degree courses of the following streams are mainly accounted for this entrance exam:</p>
                            <ul>
                                <li><i class="ri-arrow-right-line text-danger"></i>engineearing</li>
                                <li><i class="ri-arrow-right-line text-danger"></i>pharmacy</li>
                            </ul>
                            <p>The test was conducted in online mode for the first time in 2019. The State Common Entrance Test Cell, Maharashtra released the syllabus and marking scheme for the Computer Based Test(CBT).</p>
                        </div>
                    </div>
            </div>
        
        </>
    )
}