import React from "react";
import './footer.css'
import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  {/* <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button ssctype="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                  </div> */}
                  <div class="modal-body">
                    <form action="abc.html">
                        <table cellPadding={'10px'}>
                            <tr>
                                <td>enter your name:-</td>
                                <td><input type="text" placeholder="enter your name" /></td>
                            </tr>
                            <tr>
                                <td>enter your email:-</td>
                                <td><input type="email" placeholder="enter your email" /></td>
                            </tr>
                        </table>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button ssctype="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                    <button ssctype="button" class="btn btn-primary">Save changes</button>

                  </div>
                </div>
              </div>
            </div>



            <div className="footerOuter text-light">
                <div className="box1 footerOuter1">
                    <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Fotter-Logo-1.png" alt="" />
                    <p>Takalkar Eduhub Pvt. Ltd. with a directorial experience of 70+ years has evolved tremendously, both in their scale and the quality of education..</p>
                    <h5>Reach out to us </h5>
                    <p><i class="ri-mail-line d-inline"></i><a href="mailto:learn@takalkarclasses.com" className="text-light text-decoration-none">learn@takalkarclasses.com</a>
                    </p>
                    <p><a href="tel:%20+91%2012345%2067890" className="text-light text-decoration-none" target="_blank"><i class="ri-phone-line"></i>+91 1234567890</a></p>
                </div>
                <div className="box1 quickLinks">
                    <h5>quick links</h5>
                    <ul>
                        <li>
                            <NavLink className={'nav-link'} to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={'nav-link'} to={'/about'}>About us</NavLink>
                        </li>
                        <li>
                            <NavLink className={'nav-link'} to={'/courses'}>Course</NavLink>
                        </li>
                        <li>
                            <NavLink className={'nav-link'} to={'/contact'}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="box1 ">
                    <h5 className="fw-bolder text-uppercase d-block">tags</h5><br />
                    <div className="btns-outer">
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Group-97-1.png" alt="" />
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Group-98-1.png" alt="" />
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Group-99-1.png" alt="" />
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Group-95-1.png" alt="" />
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Group-96-1.png" alt="" />
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Group-94-2.png" alt="" />
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Group-100-1.png" alt="" />
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Group-101-1.png" alt="" />
                        <img src="https://takalkarclasses.com/wp-content/uploads/2023/04/Group-102-1.png" alt="" />

                    </div>

                </div>
                <div className="box1">
                    <h5 className="fw-bold ">Courses</h5>
                    <ul>
                        <li>terms and serivces</li>
                        <li>privacy policy</li>
                        <li>accesibility</li>
                        <li>help center</li>
                        <li>feedback</li>
                    </ul>
                </div>
                <div>
                    <p className="fw-bold ">SUBSCRIBE TO OUR NEWSLETTER</p>
                    <form action="abc.html" method="post">
                        <input type="email" placeholder="enter your email..."  required/>
                        <button className="btn btn-success text-uppercase d-block mt-3">submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}