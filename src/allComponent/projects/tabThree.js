import React from "react";

import projectReactOne from "../images/reactProjetOne.jpg"
import projectReactTwo from "../images/ReactProjectTwo.jpg"
import projectReactThree from "../images/Capture d'écran 7 135257.png"


function TabThree(){
    return(
        <div className="tabThree">
            <a href="https://portfolio-react-medaymen007.vercel.app/" target="_blank">
            <div className="image">
            <img src={projectReactOne} alt="" />
            </div>
            </a>
            <a href="https://portfolio-react-medaymen007.vercel.app/" target="_blank">
            <div className="image">
            <img src={projectReactTwo} alt="" />     
            </div>
            </a>
            <a href="https://dj-ritschi.vercel.app/" target="_blank">
            <div className="image">
            <img src={projectReactThree} alt="" />     
            </div>
            </a>
        </div>
    )
}
export default TabThree
