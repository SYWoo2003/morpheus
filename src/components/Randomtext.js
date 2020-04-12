import React from 'react';
import styled from 'styled-components';

import topimg from '../assets/top.gif';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Randomtext = () => {


    const Imgarea = styled.div`
    width:100%;
    height:auto;
    padding-top:30px;
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
  box-shadow: 0px  0px 70px #ffffff80;
    `

    const Parallaxtest = () => {
        return (
            <>
                <Parallax className="custom-class" y={[-10, -5]}  >
                    <Imgarea>
                        <Topimg src={topimg} alt='' width='80%' />
                    </Imgarea>
                </Parallax>
            </>
        )
    }

    return (
        <div>
            <ParallaxProvider>

                <Parallaxtest />

                <Parallax className="custom-class" y={[30, -40]} >
                    <Whitebox />
                </Parallax>
            </ParallaxProvider>
        </div >
    )
}
export default Randomtext;