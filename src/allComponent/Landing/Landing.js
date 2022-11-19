import React from "react";
import "./Landing.css"
import imageAdmin from "../images/20210912_020718-PhotoRoom-PhotoRoom.png"
import imageCercel from "../images/cercel-PhotoRoom.png"
import imageRomb from "../images/rombow-PhotoRoom.png"
import imageBlue from "../images/bluePointure-PhotoRoom.png"
import Typed from "react-typed"
function Landing(){
    return(
            <div className="landing">
            <div className="text">
                <div className="topLine">
                    <p>Hello</p>
                </div>
                <div className="title">
                    <h1>I'm <span className="multiText"> 
                    <Typed
          strings={[
            "Developer",
            "Coder",
            "Front-end Dev",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
        </span> </h1>
                </div>
                <div className="paragraphe">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae cum eius facere, iure natus optio ea labore quae consequatur consectetur, deleniti tempore possimus at eveniet cumque, ut in. Incidunt, quia.</p>
                </div>
                <div className="btn">
                    <button>Download CV</button>
                </div>
            </div>
            <div className="image">
                <div className="me">
                    <img src={imageAdmin} alt="" />
                </div>
                <div className="blue">
                <img src={imageBlue} alt="" />
                </div>
                <div className="cercel">
                    <img src={imageCercel} alt="" />
                </div>
                <div className="rombow">
                    <img src={imageRomb} alt="" />
                </div>
            </div>
           
         </div>
      
         
    )
}
export default Landing