
import './App.css';
import React, { Component } from 'react'
import icone from "./icone.png";
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      imageSrc:'logo',
      fullName : "AHMED Ahlem", 
      bio : "I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.",  
      profession: "I’m a web devoloper", 
      showHideProfile: false,
      timer: 0
    };
  }
    hideComponent() {
      // if (this.state.showHideProfile== true){this.setState({timer:0})}
      {this.setState({timer: 0})}
      this.setState({ showHideProfile: !this.state.showHideProfile
      });
}
componentDidMount(){
  this.myInterval = setInterval(()=>{
    this.setState({timer: this.state.timer +1}) 
  },1000)
}
// componentWillUnmount() {
//   clearInterval(this.myInterval) 
//   console.log(clearInterval)
// }
  render() {
    return (
      <div className="App">
        {this.state.showHideProfile?
        <div className="container">
        <img src={icone} alt="profile-picture" width={100}/>
        <h1>{this.state.fullName}</h1>
        <h5>{this.state.bio}</h5>
        <h4>{this.state.imgSrc}</h4>
        <h4>{this.state.profession}</h4>
         </div>
         :null
        }
        <button onClick={() =>{this.hideComponent()} }>
       show Profile 
     </button>
     <h4>{this.state.showHideProfile ? this.state.timer:[]}</h4>
     </div>
    )}}