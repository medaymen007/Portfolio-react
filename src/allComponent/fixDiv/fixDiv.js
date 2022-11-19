import React from "react";
import "./fixDiv.css"

function FixBar(){
    return(
        <div className='fixBar'>

          <div className="linkedin">
            <a href=""><i class="fa-brands fa-linkedin"> <div className="space"></div> <p>Linkedin</p></i></a>  
          </div>

          <div className="Email">
            <a href=""><i class="fa-solid fa-envelope"> <div className="space"></div> <p>E-mail</p></i></a>  
          </div>

          <div className="github">
            <a href=""><i class="fa-brands fa-github"> <div className="space"></div> <p>Github</p> </i></a> 
          </div>

      </div>
    )
}

export default FixBar