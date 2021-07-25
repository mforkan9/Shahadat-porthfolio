import React, { useEffect, useState } from 'react';
import './IonicHeader.scss'
import IonicParticle from '../../ParticlesBackground/IonicParticle';

const IonicHeader = () => {
    const [ionicLoader, setIonicLoader] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/showProfileImage')
            .then(res => res.json())
            .then(imgUrl => setIonicLoader(imgUrl))
    }, [])
    return (
        <div> 
            <div id='Ionicwelcome'>
            <div id="carouselExampleFade" class="carousel slide carousel-fade Ionicarea-carousel" data-bs-ride="carousel">
                <div class="carousel-inner" >
                    {
                        ionicLoader.map((ionUrl, i) => {
                            return <div class={i === 0 ? "carousel-item active" : "carousel-item"} key={i}>
                                <img src={ionUrl.img} class="d-block w-100" alt="..." />
                            </div>
                        })
                    }

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
            <IonicParticle></IonicParticle>
        </div>
    );
};

export default IonicHeader;