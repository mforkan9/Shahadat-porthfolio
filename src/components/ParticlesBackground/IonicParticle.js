import React from 'react';
import Particles from 'react-particles-js';
import './IonicParticle.scss'
import particlesConfig from './Particles.config';

const IonicParticle = () => {
    return (
        <div>
            <Particles id='Ionicparticles-js' params={particlesConfig}></Particles>
        </div>
    );
};

export default IonicParticle;