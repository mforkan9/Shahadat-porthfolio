import React from 'react';
import Particles from 'react-particles-js';
import particlesConfig from './Particles.config';
import './Particle.scss'

const Particle = () => {
    return (
        <div >
           <Particles id='particles-js' params={particlesConfig}/>
        </div>
    );
};

export default Particle;