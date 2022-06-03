import React,{useState} from 'react'
import { Routes, Route, Link,BrowserRouter ,useLocation } from "react-router-dom";
import ReactToPdf from 'react-to-pdf'
function FinalScreen() {

    const ref = React.createRef();
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [18,18]
    };
    

    const location = useLocation()
    const { 
        Name,Email,Phoneno,Objective,Dateofbirth,ssc,btech,inter,Experience,
        Projects,
        ProgrammingLan,
        Languages,
        Hobbies,
        Skills,
        Achievement,Address,Certification} = location.state

    console.log(Name,Email,Phoneno,Objective,Dateofbirth);
  
    const { sscinstitutename,sscyear,sscsecured} = {...ssc};
    const { institutename,year,secured} = {...btech};
    const { interinstitutename,interyear,intersecured} = {...inter};

    const address = Address.split(',');

    const certificates = Certification.split(',');

   const skills = Skills.split(',');

   const achievement = Achievement.split(',');

const hobbies = Hobbies.split(',');
const languages = Languages.split(',');
const programmingLan = ProgrammingLan.split(',');

const experience = Experience.split(',');
 var projects = Projects.split(',');
 
 

    console.log(projects[0].split('-')[0]);

    const Print=()=>{
        setTemp(1);
        
        window.print()
    }

const [Temp,setTemp] =useState(0);
  return (
    <div>
    <div  ref={ref}> 
    
   
     

<div class="resume" id="resume">
<div class="container mb-5">
    <div class="row border border-dark">
        <div class="col-md-4 border border-right-dark">
            <h1 class="text-center">{Name}</h1>
            <h6 class="text-center">{Email}</h6>
            <h6 class="text-center">{Phoneno}</h6>
            <h3>Address</h3>
            <p>{address[0]}</p>
            <p>{address[1]}</p>
            <p>{address[2]}</p>
            <p>{address[3]}</p>
        <br></br>

            <div>

                <h2>Programming Languages</h2>
                <ul> 
                {programmingLan.map((item, index) => (
                   <li key={index}>{item}</li>
                ))}
                </ul>
            </div>
            <br></br>
            <div>

                <h2>Languages</h2>
                <ul> 
                {languages.map((item, index) => (
                   <li key={index}>{item}</li>
                ))}
                </ul>
            </div>

        </div>
        <div class="col-md-8">
            <h1>Objective</h1>
            <p>{Objective}</p>
            <br></br>
            <h1>Education</h1>
            <div class="row">
                <div class="col-3"><h6>B.Tech</h6></div>
                <div class="col-3"><h6>{institutename}</h6></div>
                <div class="col-2"><h6>{year}</h6></div>
                <div class="col-4"><h6>{secured}</h6></div>
                <div class="col-3">Intermediate</div>
                <div class="col-3">{interinstitutename}</div>
                <div class="col-2">{interyear}</div>
                <div class="col-4">{intersecured}</div>
                <div class="col-3">SSC</div>
                <div class="col-3">{sscinstitutename}</div>
                <div class="col-2">{sscyear}</div>
                <div class="col-4">{sscsecured}</div>
             
                
            </div>
             <br></br>
            <h1>Certification</h1>
            {certificates.map((item, index) => (
                   <p key={index}>{item}</p>
                ))}
           <br></br>
            
            <h1>Skills</h1>
            <ul>
            {skills.map((item, index) => (
                   <li key={index}>{item}</li>
                ))}
                 
             
            </ul><br></br>
            <h1>Achivements</h1>
            {achievement.map((item, index) => (
                   <p key={index}>{item}</p>
                ))}
                 
            <br></br>
            <h1>Projects</h1>
            { projects.map((item, index) => (
                <div key={index}> 
                    <h2>{item.split('-')[0]}</h2>
                    <p>{item.split('-')[1]}</p>
                    </div>
                ))}
                
            <br></br>

            <h1>Experience</h1>
            <ul>
            {experience.map((item, index) => (
                   <li key={index}>{item}</li>
                ))}
                 
             
            </ul>
            <br></br>

            <h1>Hobbies</h1>
            <ul>
            { hobbies.map((item, index) => (
                   <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    </div>
</div>

</div>
   
    
    
    </div>

    <div>
    <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
            {({toPdf}) => (
                 <button type="button" class="btn btn-warning  mx-auto d-block" onClick={toPdf}>Generate pdf</button>
            )}
        </ReactToPdf>
    </div>
    </div>
  )
}

export default FinalScreen;