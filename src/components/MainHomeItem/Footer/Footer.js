import React from 'react';
import './Footer.scss'
const Footer = () => {
    return (
        <div className='footerMain' id='contact'>
            <div className='row'>
                <div className='col-md-5  mt-2 p-3'>
                   <div className='container follow'>
                        <h2 className=''><i class="zmdi zmdi-flower-alt m-2"></i>Police Bureau Of Investigation</h2>
                        <h4 className='mt-4'><i class="zmdi zmdi-pin m-2"></i>Lavel-4,B-block,Kolshiy,Chittagong</h4>
                        <h4 className='mt-3'><i class="zmdi zmdi-email m-2"></i>Official:example@gmail.com</h4>
                        <h4 className='mt-3'><i class="zmdi zmdi-phone m-2"></i>Helpline:01800000000 <span>(Available:24 hours)</span></h4>
                        
                   </div>
                </div>
               <div className='col-md-3 mt-2'>
                   <div className='follow2 p-3'>
                   <h2>Follow me</h2>
                   <h5> <a href="https://www.facebook.com/shahadat.hossen.794"><i class="zmdi zmdi-facebook-box m-2"></i>Facebook</a></h5>
                   <h5><a href=""><i class="zmdi zmdi-instagram m-2"></i>Instagram</a></h5>
                   <h5><a href=""><i class="zmdi zmdi-twitter m-2"></i>Twitter......</a></h5>

                   </div>
              
               </div>
                <div className='col-md-4  mt-2 p-4'>
                    <div className='container form-section'>
                    <form class="row g-3">
                        <h4>Quick Contact</h4>
                        <div class="col">
                           
                            <input type="email" class="form-control" id="inputEmail4" placeholder='Your Name' />
                        </div>
                        <div class="col">
                            
                            <input type="password" class="form-control" id="inputPassword4" placeholder='NID'/>
                        </div>
                        <div class="col-12">
                         
                            <input type="tel" class="form-control" id="inputAddress" placeholder="+880 Phone Number" />
                        </div>
                        <div class="col-12">
                           
                            <input type="text" class="form-control" id="inputAddress" placeholder="Your Address" />
                        </div>
                        <div class="col-12">
                           
                            <textarea class="form-control" name="" placeholder='you text here' id="inputAddress2" cols="30" rows="4"></textarea>
                        </div>

                        <div class="col-12 d-grid gap-2 d-md-flex justify-content-md-end ">
                            <button type="submit" class="btn btn-primary rounded-pill">Sign in</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;