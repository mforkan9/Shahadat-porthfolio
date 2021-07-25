import React from 'react';
import './About.scss'
import img1 from './139903038_2095742297229454_4300049306124665753_n.jpg'
import { Link } from 'react-router-dom';
import img from './icons8-police.png'
const About = () => {
    return (
        <div className='mainAbout'>
              <nav class="navbar navbar-light bg-primary">
                <div class="container-fluid">
                  <Link to='/' style={{textDecoration:'none'}}> <a class="navbar-brand" href="#" style={{color:'white',fontFamily:'fantasy',fontSize:'25px'}}>
                        <img src={img} alt="" width="35" height="30" class="d-inline-block align-text-top" />
                        Shahadat
                    </a></Link> 
                </div>
            </nav>
            <div class="container mt-5">
                <div class="row justify-content-center">
                    <div class="col-md-6">

                        <div class="card">

                            <div class="background-color rounded-pill mx-auto mt-5">
                                <img class="rounded-pill" src={img1} width="200"
                                    height="200" alt="Card image cap" />
                            </div>

                            <div class="card-body text-center">


                                <p class="fa-lg mt-5 title-text">Shahadat</p>
                                <p class="fa-2x font-weight-bold title-text">Hossen</p>


                                <p class="mt-3 position">Sub Inspector PBI</p>


                                <p><i class=" fa-sm fas fa-circle divider mt-3"></i></p>

                                <img class="img-fluid" src="https://i.ibb.co/9cyZPZH/signature-1.png" />


                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="pills-home-tab">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet euismod dui.
                                        In auctor dapibus lorem eget lobortis. Aliquam tincidunt, sem vel sagittis tempus, justo diam tempor
                                        magna, eu molestie velit arcu a ex. Suspendisse quis faucibus elit. Aliquam ex quam, dignissim eu
                                        dignissim in,</div>

                                    <div class="tab-pane fade" id="mail" role="tabpanel" aria-labelledby="pills-profile-tab">example@contact.com</div>

                                    <div class="tab-pane fade" id="page" role="tabpanel" aria-labelledby="pills-contact-tab">example-page.com</div>
                                </div>

                                <ul class="nav md-pills nav-justified pills-brown">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#about" role="tab">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#mail" role="tab">Mail</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#page" role="tab">Page</a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;