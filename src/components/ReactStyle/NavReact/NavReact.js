import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavReact.scss'
import img2 from './icons8-police.png'
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
                    backgroundColor: '#00008B',
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
            
                <a href="#" class="navbar-brand" style={{color:'white',fontFamily:'fantasy',fontSize:'35px'}}>
                     <img style={{ height: '40px', width: '50px' }} src={img2} alt="" />
                     Shahadat
                     </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav container-fluid">
                <li class="nav-item">
                       <Link to='/dashboard'  style={{textDecoration:'none'}}> <a href="#" class="nav-link" style={{color:'white'}}>DASHBOARD</a> </Link>
                    </li>
                    <li class="nav-item">
                     <a href="#reactHeader" class="nav-link" style={{color:'white'}}>HOME</a>
                    </li>
                    <li class="nav-item">
                      <Link to='/about' style={{textDecoration:'none'}}> <a href="#" class="nav-link" style={{color:'white'}}>ABOUT</a></Link>
                    </li>
                    <li class="nav-item">
                       <Link to='/login'> <a href="#" class="nav-link"> <button className='login-btn'>LOGIN</button> </a> </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default NavReact;