import React, { useEffect, useState } from 'react';
import Particle from '../../ParticlesBackground/Particle'
import './HeaderReact.scss'


const HeaderReact = () => {
    const [loadImage, setLoadImage] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/showProfileImage')
            .then(res => res.json())
            .then(imgUrl => setLoadImage(imgUrl))
    }, [])
    return (
        <div id='reactHeader'>
            <div id='welcome'>
                <div id="carouselExampleFade" class="carousel slide carousel-fade area-carousel" data-bs-ride="carousel">
                    <div class="carousel-inner" >
                        {
                            loadImage.map((url,i) => {
                                return <div class={i === 0 ? "carousel-item active" : "carousel-item"} key={i}>
                                    <img src={url.img} class="d-block w-100" alt="..." />
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
            <Particle></Particle>
        </div>
    );
};

export default HeaderReact;