import React from 'react';
import './AboutMain.scss'
import image1 from './173431603_2169636989839984_6113434369001084240_n.jpg'
const AboutSection = () => {
    return (
        <div className='container AboutMain'>
            <h1 className='text-center'>About me</h1>
            <div className='row container aboutInner' >
                <div className='col-md-6 image-section'>
                    <img src={image1} alt="" />
                </div>
                <div className='col-md-6 info-section'>
                    <div>
                    <h1>Hey! <span>i am</span></h1>
                    <h2>Shahadat Hossen <span>..SI</span></h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ea nam alias velit quaerat quasi minus, iste unde voluptates corporis beatae necessitatibus ducimus mollitia eius? Alias cumque non repudiandae accusamus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum totam maiores ipsum consectetur! Vitae repellendus quas at cupiditate distinctio, reprehenderit vero asperiores nemo voluptatum ratione nostrum ipsa natus. Culpa, animi!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;