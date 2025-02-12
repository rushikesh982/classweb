import React from "react";
import './admission.css'


export default function Forms()
{
    return(
        <>
            <div className="container-fluid">
                <div className="row formouter">
                    <div className="box1">
                        <img src="https://takalkarclasses.com/wp-content/uploads/2024/12/Takalkar-classes-admission.png" alt="" />
                    </div>
                    <div className="box2 ">
                        <table border={'2px'}>
                            <form action="abc.html" method="get">
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Name" name="" id="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="email" placeholder="email" name="" id="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Number" name="" id="" />
                                    </td>
                                </tr>
                            </form>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}