import React,{useState,useEffect} from 'react'

import { Player, Controls } from '@lottiefiles/react-lottie-player';

import {useNavigate} from "react-router-dom";

import Lodi from '../images/106996-ellipes.json'
 

function Loading() {

    let navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigate('MainPage');
        }, 9000);
        return () => clearTimeout(timer);
      }, []);

  return (
    <>
    
               <div style={{marginTop:'10%'}}>


               <Player
                    autoplay
                    loop
                    src={Lodi}
                    style={{ height: '300px', width: '300px' }}
                >
                   
                </Player>

                <h1 style={{textAlign:'center'}}>Loading...</h1>
               </div>


    </>
  )
}

export default Loading;