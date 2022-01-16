import React, {Component} from "react";

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
               <h3>Hi! my name is {data.firstName + " " + data.lastName}, <br></br><br></br> I am {data.age} years old,<br></br><br></br> and by profession,<br></br><br></br> {data.profession}.</h3>
            </div>
        )
    }
}

export default Home;
