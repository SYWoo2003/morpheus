import React from 'react';
import styled from 'styled-components';

import logo from '../assets/logo.png';
import topimg from '../assets/top.gif';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Top = () => {

    const Logoimg = styled.img`
        position:fixed;
        left:2%;
        top:3%;
        width:60px;
        z-index:1;
    `

    const Imgarea = styled.div`
        width:100%;
        height:auto;
        padding-top:20px;
        background-color:#202020;
        text-align:center;
    `

    const Topimg = styled.img`
        -webkit-user-drag:none;
    `

    const Whitebox = styled.div`
        width:100%;
        height:800px;
        background-color:white;
    `

    const Parallaximg = () => {
        return (
            <Parallax className="custom-class" y={[-10, -5]}  >
                <Imgarea>
                    <Topimg src={topimg} alt='' width='80%' />
                </Imgarea>
            </Parallax>
        )
    }

    return (
        <>
            <Logoimg src={logo} alt='' />
            <ParallaxProvider>
                <Parallaximg />
                <Parallax className="custom-class" y={[30, -40]} >
                    <Whitebox />
                </Parallax>
            </ParallaxProvider>
        </>
    )
}
export default Top;