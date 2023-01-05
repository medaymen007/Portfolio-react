import React from "react";

import projectReactOne from "../images/reactProjetOne.jpg"
import projectReactTwo from "../images/ReactProjectTwo.jpg"


function TabThree(){
    return(
        <div className="tabThree">
            <div className="image">
            <img src={projectReactOne} alt="" />
            </div>
            <div className="image">
            <img src={projectReactTwo} alt="" />     
            </div>
        </div>
    )
}
export default TabThree