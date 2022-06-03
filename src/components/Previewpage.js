/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route, Link,BrowserRouter ,useLocation } from "react-router-dom";
function Previewpage() {
  const location = useLocation()
  const { Name,Email,Phoneno,Objective,Dateofbirth,ssc,btech,inter} = location.state
  console.log(Name,Email,Phoneno,Objective,Dateofbirth);

  const { sscinstitutename,sscyear,sscsecured} = {...ssc};
  const { institutename,year,secured} = {...btech};
  const { interinstitutename,interyear,intersecured} = {...inter};
    return (
        <Preview2/>
    )
  
}

function Preview2() {
    return (
        <div>
            <body>
                <div className='container text-center'>
                    <h1>This is the preview of your resume</h1>
                </div>
                <div className='container mb-5 mt-5' style={{border:"2px solid black"}}>
                    <div className='row'>
                        <p className='col-3'>Name</p>
                        <p className='col-9'>: N Uma Naga Ganesh Reddy</p>
                    </div>
                    <div className='row'>
                        <p className='col-3'>Phone No.</p>
                        <p className='col-9'>: 6303050014</p>
                    </div>
                    <div className='row'>
                        <p className='col-3'>Email</p>
                        <p className='col-9'>: nunganesh46@gmail.com</p>
                    </div>
                    <div className='row'>
                        <p className='col-3'>DOB</p>
                        <p className='col-9'>: 23 - 05 - 2001</p>
                    </div>
                    <div className='row'>
                        <p className='col-3'>Objective</p>
                        <p className='col-9'>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                    </div>
                    <div className='row'>
                        <p className='col-md-4'>Education</p>
                        <div className='col text-center'>
                        <table   border="1">
                          <thead>
                            <tr>
                              <th >Examination</th>
                              <th >Board/University</th>
                              <th >Year</th>
                              <th >Scored</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td  >B.Tech</td>
                              <td>Swarnandhra College of Engineering and Technology</td>
                              <td>2019-2023</td>
                              <td>10.0</td>
                            </tr>
                            <tr>
                              <td>Intermediate</td>
                              <td> Sri chaitanya junior college </td>
                              <td>2017-2019</td>
                              <td>9.2</td>
                            </tr>
                            <tr>
                              <td>SSC</td>
                              <td>ZPPH School </td>
                              <td>2017</td>
                              <td>7.8</td>
                            </tr>
                          </tbody>
                        </table>
                        </div>
                    </div>
                    <div className='row'>
                        <p className='col-3'>Experience</p>
                        <p className='col-9'>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
                    </div>
                    <div className='row'>
                        <p className='col-3'>Skills</p>
                        <p className='col-9'>: HTML, CSS, BOOTSTRAP, JavaScript</p>
                    </div>
                    <div className='row'>
                        <p className='col-3'>Languages known</p>
                        <p className='col-9'>: Telugu, Hindi, English</p>
                    </div>
                    <div className='row'>
                        <p className='col-3'>Hobbies and Interests</p>
                        <p className='col-9'>: Listning music and browising net</p>
                    </div>
                    <div className='row'>
                        <p className='col-3'>Hobbies and Interests</p>
                        <p className='col-9'>: Listning music and browising net</p>
                    </div>
                    <div className='row'>
                        <p className='col-3'>Achievements</p>
                        <p className='col-9'>: None</p>
                    </div>
                </div>
            </body>
        </div>
    )
}





export default Previewpage;
