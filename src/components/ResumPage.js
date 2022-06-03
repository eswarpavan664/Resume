/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { Routes, Route, Link,BrowserRouter  } from "react-router-dom";
import Previewpage from './Previewpage';
function ResumPage() {

  const [Name,setName] = useState(" ");
  const [Phoneno,setPhoneno] = useState(" ");
  const [Dateofbirth,setDateofbirth] = useState(" ");
  const [Email,setEmail] = useState(" ");
  const [ Objective,setObjective] = useState(" ");


  const [ssc,setssc]=useState({examinationname:"10th",sscinstitutename:"",sscyear:"",sscsecured:""});
  const [intermediate,setintermediate]=useState({examinationname:"Intermediate",interinstitutename:"",interyear:"",intersecured:""});
  const [btech,setbtech]=useState({examinationname:"B.Tech",institutename:"",year:"",secured:""});
    
 console.log(btech.institutename)


 const changeHandler = e =>{
  setbtech({...btech,[e.target.name]:e.target.value});
}

const changeHandler2 = e =>{
   setintermediate({...intermediate,[e.target.name]:e.target.value});
}

const changeHandler3 = e =>{
   setssc({...ssc,[e.target.name]:e.target.value});
}
const {institutename,year,secured}={...btech}
const {interinstitutename,interyear,intersecured}={...intermediate}
const {sscinstitutename,sscyear,sscsecured}={...ssc}


 const [Experience,setExperience] = useState("");
 const [Projects,setProjects] = useState("");
 const [Achievement,setAchievement] = useState("");
 const [Hobbies,setHobbies] = useState("");

  const [Skills,setSkills]=useState("");
  const [ProgrammingLan,setProgrammingLan] = useState("");
  const [Languages,setLanguages] =useState("");

  const [Address,setAddress] = useState("");

  const [Certification,setCertification] = useState("");

  return (
        <body className='mb-5'>
            <div className='container-fluid mt-5 mb-5 text-center'>
                <Link to="/" style={{textDecoration:'none'}}> <h1>Resume Builder</h1></Link>
            </div>
            <form className='container'>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Name</label>
                  <input type="email" class="form-control" id="inputName" placeholder="Name" value={Name} onChange={e => setName(e.target.value)} required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Phone Number</label>
                  <input type="number" class="form-control" id="inputNumber" placeholder="Phone Number" value={Phoneno} onChange={e => setPhoneno(e.target.value)}  required/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">DOB</label>
                  <input type="date" class="form-control" id="inputDOB" placeholder="First name" value={Dateofbirth} onChange={e => setDateofbirth(e.target.value)}  required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Email</label>
                  <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={Email} onChange={e => setEmail(e.target.value)}  required/>
                </div>
              </div>
    
              <div class="form-group">
                <label for="inputAddress2">Objective</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your objective' value={Objective} onChange={e => setObjective(e.target.value)} ></textarea>
              </div>
            </form>
            <div className='container'>
                <form>
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label for="inputCource">Examination</label>
                        <input type="text" class="form-control" id="inputCource" placeholder='B.Tech'/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputBoard">Board/University</label>
                        <input type="text" class="form-control" id="inputBoard" name="institutename" placeholder="SCET" value={institutename} onChange={changeHandler}/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputYear">Year</label>
                        <input type="text" class="form-control" id="inputYear" placeholder='Eg. 2019 - 2023' name="year"  value={year} onChange={changeHandler}/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputScore">Secured</label>
                        <input type="text" class="form-control" id="inputScored" placeholder='-' name="secured"  value={secured} onChange={changeHandler}/>
                      </div>
                    </div>
                    <hr className='style-two'/>
    
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label for="inputCource">Examination</label>
                        <input type="text" class="form-control" id="inputCource" placeholder='Intermediate'/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputBoard">Board/University</label>
                        <input type="text" class="form-control" id="inputBoard" placeholder="Eg. Pragati Junior College" name="interinstitutename" value={interinstitutename} onChange={changeHandler2}/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputYear">Year</label>
                        <input type="text" class="form-control" id="inputYear" placeholder='Eg. 2017 - 2019' name="interyear"  value={interyear} onChange={changeHandler2}/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputScore">Secured</label>
                        <input type="text" class="form-control" id="inputScored" placeholder='6.8 GPA' name="intersecured"  value={intersecured} onChange={changeHandler2}/>
                      </div>
                    </div>
                    <hr className='style-two'/>
    
                    <div class="form-row">
                      <div class="form-group col-md-3">
                        <label for="inputCource">Examination</label>
                        <input type="text" class="form-control" id="inputCource" placeholder='SSC'/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputBoard">Board/University</label>
                        <input type="text" class="form-control" id="inputBoard" placeholder="Eg. Dr.K.K.R's EM School" name="sscinstitutename" value={sscinstitutename} onChange={changeHandler3}/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputYear">Year</label>
                        <input type="text" class="form-control" id="inputYear" placeholder='Eg. 2016 - 2017' name="sscyear"  value={sscyear} onChange={changeHandler3}/>
                      </div>
                      <div class="form-group col-md-3">
                        <label for="inputScore">Secured</label>
                        <input type="text" class="form-control" id="inputScored" placeholder='7.7 GPA'  name="sscsecured"  value={sscsecured} onChange={changeHandler3}/>
                      </div>
                    </div>
                    <hr className='style-two'/>
    
                    
                </form>
                
             
                    <div class="form-group">
                        <label for="inputAddress2">Experience</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your experience' value={Experience} onChange={(e)=>setExperience(e.target.value)}></textarea>
                    </div>

                    <div class="form-group">
                        <label for="inputAddress2">Projects</label>
                        <br></br>
                        <label>     enter Porject title and discription and seperate with (",") in the format (ProjectName1-Discription.... ,ProjectName2-Discription...)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your experience' value={Projects} onChange={(e)=> setProjects(e.target.value)}></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="inputAddress2">Skills</label>
                        <br></br>
                        <label> enter Skills separate with (",") format (android,ios,web...)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Your skills' value={Skills} onChange={(e)=> setSkills(e.target.value)} ></textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Programming Languages</label>
                        <br></br>
                        <label> enter Languages separate with (",") format (Java,Python...)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Languages Known' value={ProgrammingLan} onChange={(e)=>  setProgrammingLan(e.target.value)}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Languages Known</label>
                        <br></br>
                        <label> enter Languages separate with (",") format (telugu,english...)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Languages Known' value={Languages} onChange={(e)=> setLanguages(e.target.value)}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Hobbies and Interests</label>
                        <br></br>
                        <label> enter Hobbies separate with (",") format (Musics,cricket...)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Hobbies and Interests' value={Hobbies} onChange={(e)=> setHobbies(e.target.value)}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="inputAddress2">Achievements</label>
                        <br></br>
                        <label> enter Achievements separate with (",") format (Achievement1,Achievement2...)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Achievements if you have' value={Achievement} onChange={(e)=> setAchievement(e.target.value)}></textarea>
                    </div>

                    <div class="form-group">
                        <label for="inputAddress2">Certification</label>
                        <br></br>
                        <label> enter Certification separate with (",") format (Certification1,Certification2....)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Certification' value={Certification} onChange={(e)=>  setCertification(e.target.value)}></textarea>
                    </div>


                    <div class="form-group">
                        <label for="inputAddress2">Address</label>
                        <br></br>
                        <label> enter Address separate with (",") format (City,Land Mark,State,Postel Code)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Achievements if you have' value={Address} onChange={(e)=> setAddress(e.target.value)}></textarea>
                    </div>

                    <div className='btn-group btn_grp'>
                         
                        <div  >
                             <Link to="/FinalScreen"
                             state={{
                                 Name: Name,
                                 Phoneno:Phoneno,
                                 Dateofbirth:Dateofbirth,
                                 Objective:Objective ,
                                 Email:Email,
                                 ssc:ssc,
                                 inter:intermediate,
                                 btech:btech,
                                 Experience:Experience,
                                 Projects:Projects,
                                 ProgrammingLan:ProgrammingLan,
                                 Languages:Languages,
                                 Hobbies:Hobbies,
                                 Skills:Skills,
                                 Achievement:Achievement,
                                 Address:Address,
                                 Certification:Certification
                                 }}
                             
                               ><button type="button" class="btn btn-warning">Preview</button></Link>
                        </div>
                    </div>
                 
            </div>
            
        </body>
    )
    
}

export default ResumPage;
