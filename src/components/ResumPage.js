import React from 'react'
import { Routes, Route, Link,BrowserRouter  } from "react-router-dom";
function ResumPage() {
    return (
        <body className='mb-5'>
            <div className='container-fluid mt-5 mb-5 text-center'>
                <Link to="/" style={{textDecoration:'none'}}> <h1>Resume Builder</h1></Link>
            </div>
            <form className='container'>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Name</label>
                  <input type="email" class="form-control" id="inputName" placeholder="First name" required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Phone Number</label>
                  <input type="number" class="form-control" id="inputNumber" placeholder="Phone Number" required/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">DOB</label>
                  <input type="date" class="form-control" id="inputDOB" placeholder="First name" required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Email</label>
                  <input type="email" class="form-control" id="inputEmail" placeholder="Email" required/>
                </div>
              </div>
    
              <div class="form-group">
                <label for="inputAddress2">Objective</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your objective'></textarea>
              </div>
            </form>
            <div className='container'>
                <form>
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label for="inputCource">Examination</label>
                        <input type="text" class="form-control" id="inputCource" placeholder='Eg. B.Tech'/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputBoard">Board/University</label>
                        <input type="text" class="form-control" id="inputBoard" placeholder="Eg. SCET"/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputYear">Year</label>
                        <input type="number" class="form-control" id="inputYear" placeholder='Eg. 2019 - 2023'/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputScore">Secured</label>
                        <input type="text" class="form-control" id="inputScored" placeholder='-'/>
                      </div>
                    </div>
                    <hr className='style-two'/>
    
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label for="inputCource">Examination</label>
                        <input type="text" class="form-control" id="inputCource" placeholder='Eg. Intermediate'/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputBoard">Board/University</label>
                        <input type="text" class="form-control" id="inputBoard" placeholder="Eg. Pragati Junior College"/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputYear">Year</label>
                        <input type="number" class="form-control" id="inputYear" placeholder='Eg. 2017 - 2019'/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputScore">Secured</label>
                        <input type="text" class="form-control" id="inputScored" placeholder='6.8 GPA'/>
                      </div>
                    </div>
                    <hr className='style-two'/>
    
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label for="inputCource">Examination</label>
                        <input type="text" class="form-control" id="inputCource" placeholder='Eg. SSC'/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputBoard">Board/University</label>
                        <input type="text" class="form-control" id="inputBoard" placeholder="Eg. Dr.K.K.R's EM School"/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputYear">Year</label>
                        <input type="number" class="form-control" id="inputYear" placeholder='Eg. 2016 - 2017'/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputScore">Secured</label>
                        <input type="text" class="form-control" id="inputScored" placeholder='7.7 GPA'/>
                      </div>
                    </div>
                    <hr className='style-two'/>
    
                    <div className='btn-group btn_grp'>
                        <button type="button" class="btn btn-outline-primary">Add Qualification</button>
                    </div>
                </form>
                
                <form>
                    <div class="form-group">
                        <label for="inputAddress2">Experience</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your experience'></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="inputAddress2">Skills</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your skills'></textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Languages Known</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Languages Known'></textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Hobbies and Interests</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Hobbies and Interests'></textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Achievements</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Achievements if you have'></textarea>
                    </div>
                    <div className='btn-group btn_grp'>
                        <button type="button" class="btn btn-primary">Generate Resume</button>
                        <div style={{backgroundColor:'green',width:'10%',marginLeft:'88%',marginTop:'2%',marginBottom:'20%',borderRadius:10}}>
                             <Link to="/Previewpage"  style={{textDecoration:'none',color:'white',marginRight:'25%'}}>Preview</Link>
                        </div>
                    </div>
                </form>
            </div>
            
        </body>
    )
    
}

export default ResumPage;
