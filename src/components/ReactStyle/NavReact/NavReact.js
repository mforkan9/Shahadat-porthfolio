import React, { useEffect, useState } from 'react';
import './NavReact.scss'
const NavReact = () => {
    
    const [scrolled, setScrolled] = useState()

    useEffect(() => {
        const handleScroll = _ => {
            if (window.pageYOffset > 1) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return _ => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return (
        <nav class="navbar navbar-light  navbar-expand-md" 
        style={
            scrolled ?
                {
                    backgroundColor: '#4ADEDE',
                    transition:'backgroundColor 2.sc',
                    position: 'fixed',
                    top: 0,
                    width: '100%'
                }
                :
                {
                    backgroundColor: '#5260ff'
                }
        }
        >
            <div class="container-fluid">
                <a href="#" class="navbar-brand">NAVBAR</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav container-fluid">
                    <li class="nav-item">
                        <a href="#" class="nav-link" style={{color:'white'}}>HOME</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">TICKETS</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default NavReact;