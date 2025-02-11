import React from "react";
import './article.css'


let data = [
    {
        'img':'https://takalkarclasses.com/wp-content/uploads/2023/04/Group-47.png'
    },
    {
        'img':'https://takalkarclasses.com/wp-content/uploads/2023/04/image-5.png'
    }
]

function Article(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center fw-bolder text-uppercase">
                        <h1>letter articles</h1>
                    </div>
                    {data.map((item)=>{
                        return(
                            <>
                                <div className="col-12 col-md-6 overflow-hidden">
                                    <img src={item.img} alt="" />
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
export default Article