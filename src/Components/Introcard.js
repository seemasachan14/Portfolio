import React from 'react'
import { TypeAnimation } from "react-type-animation";
import introCardImg from "../Resources/Homepage/namasteLogo.png";

export default function Introcard() {

   
    const greetData = [
        "Hello Dear",
        1000,
        "नमस्ते जी",
        1000,
        "ਹੈਲੋ ਜੀ",
        1000, //punjabi
        "வணக்கம் ஜி",
        1000, //tamil
        "नमस्कार जी",
        1000, //marathi
        "હેલો જી",
        1000, //gujrati
      ];
    
      //   this data is to know about me
      const rolesData = [
        "I'm a Full Stack Developer",
        1000,
        "I'm an Android Developer",
        1000,
        "I'm a React.Js Developer",
        1000,
        "I'm a Programmer",
        1000,
        "I'm a Graphic Designer",
        1000,
      ];

     
      

  return (
    
    //    card 
       <div class="card introCard my-3">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body mb-0 text-white">
              <h5 class="card-title">
                <TypeAnimation
                  sequence={greetData}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h5>
              <p class="card-text">
                I'm
                <p className="name">Seema Sachan</p>
              </p>

              <p class="card-text">
                I'm <span style={{ color: "red" }}>23</span> years old
              </p>
              <p class="roles">
                <TypeAnimation
                  sequence={rolesData}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </p>

              <p class="description">
                
                -I'm a programming enthusiast who seeks for code in every
                existing thing. Welcome to the digital version of myself ,
                you'll find everything about me in this portal. Please don't
                forget to share your feedback to me.
                <br></br>-Thank you(Seema)
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <img src={introCardImg} class="img-fluid rounded-start" alt="..." />
          </div>
        </div>
    </div>
  )
}
