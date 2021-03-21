
import './App.css';
import React, { Component } from 'react'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      imageSrc:'logo',
      fullName : "AHMED Ahlem", 
      bio : "I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.",  
      profession: "I’m a web devoloper", 
      showHideProfile: false
    };
  }
  hideComponent() {
        this.setState({ showHideProfile: !this.state.showHideProfile,
        imageSrc:'https://cdn3.vectorstock.com/i/1000x1000/01/77/businesswoman-character-avatar-icon-vector-12800177.jpg'});
  }

  render() {
    return (
      <div className="App">
        {
          this.state.showHideProfile?
          <div>
        <h1>{this.state.fullName}</h1>
        <h5>{this.state.bio}</h5>
        <h4>{this.state.imgSrc}</h4>
        <h4>{this.state.profession}</h4>
         </div>
         :null
        }
        <button onClick={() => this.hideComponent()}>
       Click 
     </button>
     </div>
    )
  }
}