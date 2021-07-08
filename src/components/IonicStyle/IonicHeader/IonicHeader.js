import React from 'react';
import './IonicHeader.scss'
import IonicParticle from '../../ParticlesBackground/IonicParticle';
import img5 from './148439171_2114940881976262_1560862841496528816_n.jpg'
import img2 from './186995073_2196077137195969_5085942638847459588_n.jpg'
import img3 from './187107627_2206915889445427_2616306469245378578_n.jpg'
import img4 from './188581948_2196077103862639_217622504390990653_n.jpg'
import img1 from './26166979_1144762432327450_6137438847681820863_n.jpg'
import img6 from './89965401_1796884277115259_6907937141603434496_n.jpg'
const IonicHeader = () => {
    return (
        <div> <div id='Ionicwelcome'>
        <div id="carouselExampleFade" class="carousel slide carousel-fade Ionicarea-carousel" data-bs-ride="carousel">
            <div class="carousel-inner" >
                <div class="carousel-item active">
                    <img  src={img1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img  src={img2} class="d-block  w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img4} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img5} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img6} class="d-block w-100" alt="..." />
                </div>
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