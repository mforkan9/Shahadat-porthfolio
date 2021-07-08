import React, { useEffect } from 'react';
import { useState } from 'react';
import IonicNav from '../../IonicStyle/IonicNav/IonicNav'
import NavReact from '../../ReactStyle/NavReact/NavReact'
const Navbar = () => {
    const [size, setSize] = useState({
        x: window.innerWidth,
        y: window.innerHeight
      });
      const updateSize = () =>
        setSize({
          x: window.innerWidth,
          y: window.innerHeight
        });
      useEffect(() => (window.onresize = updateSize), []);
    return (
        <div>
      
      <div>
          {
              size.x <= 500 ? <IonicNav></IonicNav> : <NavReact></NavReact>
          }
      </div>
        </div>
    );
};

export default Navbar;