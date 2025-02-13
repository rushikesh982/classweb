import React from "react";
import './admission.css'


export default function Forms()
{
    return(
        <>
            <div className="container-fluid">
                <div className=" formouter">
                    <div className="box1">
                        <img src="https://takalkarclasses.com/wp-content/uploads/2024/12/Takalkar-classes-admission.png" className="admissionimg" alt="" />
                    </div>
                    <div className="box1">
                        <form action="abc.html" method="get">
                            <table>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Name" name="" id="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="email" placeholder="email" name="" id="" required />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="text" placeholder="Number" name="" id="" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select name="" id="">
                                            <option value="">--select course--</option>
                                            <option value="">8th 9th ssc</option>
                                            <option value="">10th ssc</option>
                                            <option value="">8th 9th CBSE</option>
                                            <option value="">10th CBSE</option>
                                            <option value="">8th 9th ICSE</option>
                                            <option value="">10th ICSE</option>
                                            <option value="">11th 12th science </option>
                                            <option value="">11th 12th science & JEE</option>
                                            <option value="">11th 12th science & NEET</option>
                                            <option value="">11th 12th science & CET</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <select name="" id="">
                                            <option value="">-- select nearest center --</option>
                                            <option value="">Aundh</option>
                                            <option value="">Balaji Nagar</option>
                                            <option value="">Baner</option>
                                            <option value="">rahtani</option>
                                            <option value="">pimpri</option>
                                            <option value="">akurdi</option>
                                            <option value="">katraj</option>
                                            <option value="">chikhali</option>
                                            <option value="">wakad</option>
                                            <option value="">swarget</option>
                                            <option value="">wakad</option>
                                            <option value="">hadpsar</option>
                                            <option value="">warje</option>
                                            <option value="">narhe</option>
                                            <option value="">kothrud</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className="btn btn-success">submit</button>
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}