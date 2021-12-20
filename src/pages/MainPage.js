/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Previewpage from '../components/Previewpage'
import ResumPage from '../components/ResumPage'
import { Routes, Route, Link,BrowserRouter  } from "react-router-dom";
import Background from '../images/background.jpg'
function MainPage() {
    return (
        <div  >
           
                <img src={Background} alt="Snow" style={{width:'100%',height:'700px'}}/>
                <h1 class="centered2">Resume Builder</h1> 
                <div class="centered"> 
                <h1>Hello Welcome To Resume Builder</h1>
                <p>
                You Can create your own Resume in a few steps, so what are you waiting for just continue to create one  

                </p>

                <div style={{backgroundColor:'green',width:'20%',marginLeft:'50%',marginTop:'5%',marginBottom:'20%',borderRadius:10}}>
              <Link to="/ResumePage"  style={{textDecoration:'none',color:'white',marginLeft:'25%' }}>Continue</Link>
            </div>
                </div>

                <div>
                    <h2 style={{textAlign:'center'}}>Created by HGP Team</h2>
                </div>
      </div>
    )
}

export default MainPage;
