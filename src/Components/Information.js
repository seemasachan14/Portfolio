import React, { useState } from "react";
import "../CSS/Information.css";
import { workData, educationData, skillsData, projectsData } from "../Data";
import submitDone from '../Resources/Homepage/Contacts/submitDone.gif';
import sendingMailPng from '../Resources/Homepage/Contacts/sendingMailPng.gif';


export default function Information() {

  // this is the host name for sending emails 
  const host = 'https://dsa-helper-backend.onrender.com';



  const [isSubmit,setIsSubmit]=useState(false);
  const [sendingMail,setSendingMail] = useState(false);

  const [sendingData,setSendingData]=useState({email:"",feedback:""});

  const [gotError,setGotError]=useState(false);

  const enteringData =(e)=>{
    setSendingData({...sendingData,[e.target.name]:e.target.value});
  }


  const sendMail=async ()=>{

    // creating message 

    const subject="Feedback Related to Portfolio";
    const htmlText=`<div style="background-color: rgb(193, 193, 193);">
    <div style="text-align: center; background-color: rgb(232, 232, 232);">
    <h4><strong>${sendingData.email}</strong> sent you his valuable feedback</h4>
    <hr>
  </div>
  <p>Feedback : ${sendingData.feedback}</p>
</div>
    `
   
    if(sendingData.email==="" || sendingData.feedback===""){
      setGotError(true);
      return;
    }


// sending mail 
setSendingMail(true);
    const response = await fetch(`${host}/api/sendMail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:"seemasachan14@gmail.com",subject,htmlText}),
    });
    const json=await response.json();
    console.log(json);

    if(json.success){
      setIsSubmit(true);
    }

    setSendingMail(false);


  }

  
  return (
    <div className="container mainInfoContainer">
      {/* skills  */}
      <h2 className="heading text-center">
        First Let's Have A Look Into My Skills
      </h2>
      <p className="quote text-center">
        Skills are the currency of the future; invest wisely.{" "}
        <i>- Robin Sharma</i>
      </p>

      <div className="row skillRow">
        {skillsData.map((element) => {
          return <img className="col-md-1" src={element.image} alt=".." />;
        })}
      </div>
      {/* Education */}

      <h2 className="heading text-center">Education</h2>
      <p className="quote text-center">
        Education is the most powerful weapon which you can use to change the
        world. <i>- Nelson Mandela</i>
      </p>

      <div className="educationContainer">
        {educationData.map((element) => {
          return (
            <div class="card text-center">
              <img src={element.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title  m-0">{element.qualification}</h5>
                <p class="card-text  m-0">{element.tenure}</p>
                <p class="card-text  m-0">
                  <strong>{element.college}</strong>
                </p>
                <p class="card-text  m-0">
                  Score : <strong>{element.marks}%</strong>
                </p>
                <p class="card-text  m-0">{element.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* work */}

      <h2 className="heading text-center">Work</h2>
      <p className="quote text-center">
        The only person you are destined to become is the person you decide to
        be. <i>- Ralph Waldo Emerson</i>
      </p>

      <div className="workContainer row">
        {workData.map((element, index) => {
          return (
            <div class="card col-md-5 mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={element.image}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">
                      {element.position} |{" "}
                      <small style={{ color: "red" }}>
                        {element.organization}
                      </small>
                    </h5>
                    <p class="card-text">{element.description}</p>
                    <p class="card-text">
                      <small class="text-body-secondary">
                        {element.tenure}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Projects */}

      <h2 className="heading text-center">Projects</h2>
      <p className="quote text-center">
        The best way to predict the future is to create it.
        <i>- Peter Drucker</i>
      </p>

      <div className="projectsContainer">
        {/* here comes the data of projects  */}

        {projectsData.map((element, index) => {
          return (
            <div class="card mb-2">
              <div class="card-body">
                <h5 class="card-title">{element.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  -<i>{element.genre}</i>
                </h6>
                <h6 class="card-subtitle mb-2 ">
                  <strong>
                    <u>Technologies used</u>-
                  </strong>
                  {element.technologyUsed}
                </h6>
                <p class="card-text">{element.description}</p>
                <a
                  href={element.link}
                  target="_blank"
                  rel="noreferrer"
                  class="card-link"
                >
                  Link
                </a>
                <a
                  href={element.screenShots}
                  target="_blank"
                  rel="noreferrer"
                  class="card-link"
                >
                  Screen Shots
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Contact  */}
      <h2 className="heading text-center">Contact Me</h2>
      <p className="quote text-center">
        The universe is a pretty big place. If it's just us, seems like an awful
        waste of space
        <i>- Carl Sagan</i>
      </p>

      <div className="contactContainer">
        {!isSubmit && <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title text-center">Enter Details to Contact me</h5>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  style={{border:gotError && sendingData.email===""?"2px solid red":""}}
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Please Enter your email"
                  name="email"
                  value={sendingData.email}
                  onChange={enteringData}
                />
                {(gotError && sendingData.email==="")&& <p className="card-text" style={{color:'red'}}>Please Enter Your email</p>}
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Feedback/Suggestion
                </label>
                <textarea
                style={{border:gotError && sendingData.feedback===""?"2px solid red":""}}
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your feedback can improve my version so please don't forget to commit one"
                  name="feedback"
                  value={sendingData.feedback}
                  onChange={enteringData}
                ></textarea>
                {(gotError && sendingData.feedback==="")&&<p className="card-text" style={{color:'red'}}>Please give me your precious feedback</p>}
              </div>
             { (sendingMail)? 
             <div className="sendingMail text-center">
             <img src={sendingMailPng} alt=".."/>
             </div>:
              <div className="text-center">
                <button className="btn btn-secondary" onClick={sendMail}>Submit</button>
              </div>}

          </div>

        </div>}

       { isSubmit && <div className="text-center">
        <img className="submitImage" src={submitDone} alt=".."/>
        <h1>Thank You For Contacting</h1>
        <h4>I'll surely connect with you in few hours</h4>
        </div>}
      </div>
    </div>
  );
}
