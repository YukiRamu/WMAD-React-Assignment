//import
import React from 'react';
import "./People.css"

// class component
class People extends React.Component {
  state = {
    name: "Yuki Matsubara",
    age: 29,
    address: "146 East 37th Ave, Vancouver BC",
    nameArray: [
      "Tom",
      "Bob",
      "Mary",
      "Kelly",
      "Steve",
      "Lindsey",
      "Sarah",
      "Carlos",
      "Liz",
      "Beth"
    ]
  };
  render() {
    return (
      <div className="People">
        <ul>
          <li>My name is <span>{this.state.name}</span></li>
          <li>I am {this.state.age} old.</li>
          <li>I live in {this.state.address}</li>
        </ul>
        <button
          className="clickMeBtn"
          onClick={() => {
            this.changeName(this.state.nameArray);
          }}
        >
          Click me!
        </button>
      </div>
    );
  }

  //method
  changeName(nameArray) {
    let counter = 0;
    let timer = setInterval(() => {
      counter++;
      console.log(counter);

      this.setState({ name: nameArray[counter - 1] });

      if (counter === nameArray.length) {
        console.log("I am here. Clearning the timer!");
        clearInterval(timer);
        return;
      }
    }, 1000);
  }
};

//export
export default People;
