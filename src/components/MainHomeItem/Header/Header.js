import React, { useContext, useEffect, useState } from 'react';
import IonicHeader from '../../IonicStyle/IonicHeader/IonicHeader';
import HeaderReact from '../../ReactStyle/HeaderReact/HeaderReact';
import UseWindowSize from '../../UseWindowSize/UseWindowSize';
const Header = () => {
    const size = UseWindowSize();
    // const [HeaderSize, setHeaderSize] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight
    //   });
    //   const updateSize = () =>
    //     setHeaderSize({
    //       width: window.innerWidth,
    //       height: window.innerHeight
    //     });
    //   useEffect(() => (window.onresize = updateSize), []);
    return (
        <div>
            <div>
                {
                    size.width <= 500 ? <IonicHeader></IonicHeader> : <HeaderReact></HeaderReact>
                }
            </div>
        </div>
    );
};

export default Header;