import React, {Component} from "react";
import './Navbar2.css'


class Navbar extends Component {
   

    render(){
        return (
            <nav className="NavbarItems">
               <div>
                 <h1 className="portfolio">My Portfolio</h1> 
                 <br></br><br></br>
                       <div className="foto"> </div>
                       <br></br>
                  <h3 className="mariano">R. Mariano</h3>
              </div>
            </nav>
        )
    }
}

export default Navbar;
