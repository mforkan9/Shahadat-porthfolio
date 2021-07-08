import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { ContextUser } from '../../../App';
import IonicNav from '../../IonicStyle/IonicNav/IonicNav'
import NavReact from '../../ReactStyle/NavReact/NavReact'
import UseWindowSize from '../../UseWindowSize/UseWindowSize';
const Navbar = () => {
  const navSize = UseWindowSize()
  // const [size, setSize] = useState({
  //     x: window.innerWidth,
  //     y: window.innerHeight
  //   });
  // const updateSize = () =>
  //   setSize({
  //     x: window.innerWidth,
  //     y: window.innerHeight
  //   });
  // useEffect(() => (window.onresize = updateSize), []);
  return (
    <div>

      <div>
        {
              navSize.width <= 500 ? <IonicNav></IonicNav> : <NavReact></NavReact>
          }

      </div>
    </div>
  );
};

export default Navbar;