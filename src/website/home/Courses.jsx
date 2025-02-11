import React from "react";
import './courses.css'


let data =[
    {
        'img':"https://takalkarclasses.com/wp-content/uploads/2023/04/8th-9th-10th-1.png",
        'title':'8th, 9th, 10th',
        'desc':'(SSC,CBSE,ICSE Boards) '
    },
    {
        'img':'https://takalkarclasses.com/wp-content/uploads/2023/04/11th-12th-Science-PCMB.png',
        'title':'11th,12th,Science-PCMB ',
        'desc':'(HSC & CBSE) '
    },
    {
        'img':'https://takalkarclasses.com/wp-content/uploads/2023/04/JEE-NEET-CET.png',
        'title':'JEE , NEET , CET ',
        'desc':'(SSC,CBSE,ICSE Boards) '
    }
]

function Courses(){
    return(
        <>
            <div className="position-relative">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {/* <div className="row"> */}
                                <div className=" text-center coursesback">
                                    <h1 className="fw-bolder text-uppercase">flexible courses</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam ea dolore temporibus deleniti distinctio vel a eos! Nulla ducimus natus tempora quo accusamus aperiam nesciunt nisi, perspiciatis sed, vero prespiciatis.</p>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="container-fluid card-box">
                    <div className="row">

                        {data.map((item)=>{
                            return(
                                <>
                                    <div className="col-12 col-sm-6 col-md-3">
                                        <div class="card">
                                            <img src={item.img} class="card-img-top" alt="..." />
                                            <div class="card-body text-center">
                                                <h5 class="card-title">{item.title}</h5>
                                                <p class="card-text">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses