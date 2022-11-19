import React from "react";
import "./navBar.css"
function Navbar(){
    return(
        <div className="navBar" >
            <div className="container">
            <div className="logo">AYMEN</div>
          <div className="links">
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Skills</a>
                <a href="">Blog</a>
          </div>

          <div className="icons">
            <div className="linkedin">
               <a href=""><i class="fa-brands fa-linkedin"></i></a>  
           </div>
            <div className="Email">
               <a href=""><i class="fa-solid fa-envelope"></i></a>  
            </div>

            <div className="github">
             <a href=""><i class="fa-brands fa-github"></i></a>  
            </div>
            
          </div>
         </div>
        </div>
    )
}

export default Navbar