import React from 'react'
import { Routes, Route, Link,BrowserRouter  } from "react-router-dom";
function Previewpage() {
    return (
        <div>
            <body>
                <div className='container text-center'>
                    <h1>This is the preview of your resume</h1>
                </div>
                <div className='container' style={{borderWidth:5,borderColor:'black',borderStyle:'solid ',height:'100%',width:'100%'}}>
                    <pre id='resume'><p>Name                                       : Nallamilli Uma Naga Ganesh Reddy</p>
                                     <p>Date of Birth (DOB)                        : 23rd May 2001</p>
                                     <p>Phone Number                               : 6303050014</p>
                                     <p>Email                                      : nunganesh46@gmail.com</p>
                                     <p>Academic Qualifications:</p>
                                     <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                              <th scope="col">Examination</th>
                                              <th scope="col">Board/University</th>
                                              <th scope="col">Year</th>
                                              <th scope="col">Secured</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                              <td>B.Tech</td>
                                              <td>Swarnandhra College of Engineering and Technology</td>
                                              <td>2019-2023</td>
                                              <td> - </td>
                                            </tr>
                                            <tr>
                                              <td>Intermediat</td>
                                              <td>Pragati Junior COllege</td>
                                              <td>2017-2019</td>
                                              <td>6.8 GPA</td>
                                            </tr>
                                            <tr>
                                              <td>SSC</td>
                                              <td>Dr.K.K.R's Goutham EM School</td>
                                              <td>2016-2017</td>
                                              <td>7.7 GPA</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>Experience                                : None</p>
                                    <p>Skills                                    : Full Stack web development and coming to programming C, Java and Python</p>
                                    <p>Languages Known                           : Telugu, Hindi, English</p>
                                    <p>Hobbies and Interests                     : Listining Music and Browising internet</p>
                                    <p>Achivements                               : None</p>
                    </pre>
                </div>

            </body>
            <div style={{backgroundColor:'green',width:'20%',marginLeft:'50%',marginTop:'5%',marginBottom:'20%',borderRadius:10}}>
              <Link to="/ResumePage"  style={{textDecoration:'none',color:'white',marginLeft:'12%' }}>Go To Edit Page</Link>
            </div>

        </div>
    )
  
}

export default Previewpage;
