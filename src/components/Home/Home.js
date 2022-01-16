import React, {Component} from "react";
// import MR2 from '../../assets/img/MR2.jpg'
import HomeItems from './HomeItems'
import './home.css'

// function ich(data) {
//     return user.firstName + ' ' + user.lastName;
//   }

  const data = {
    firstName: 'Mariano',
    lastName: 'Ryser',
    age: 30,
    profession: "Web Developer",
  };

class Home extends Component {

    
    render(){
        return (
            <div className="box-my-description">

               <div className="description">
               <h3>Hi! my name is {data.firstName + " " + data.lastName},
                <br></br><br></br> I am {data.age} years old,<br></br><br></br>
                 and by profession,<br></br><br></br> {data.profession}. <br></br> </h3>
               </div>
               
               <div className="foto">
                 
               </div>
            </div>
            
        )
    }
}

export default Home;
