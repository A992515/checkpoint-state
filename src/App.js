
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
      showHideProfile: false,
      counter: 0
    };
  }
  
  componentDidMount(){
      this.myInterval = setInterval(()=>{
        this.setState({counter: this.state.counter +1}) 
      },1000)
    }
    componentWillUnmount() {
      clearInterval(this.myInterval);
    }
    hideComponent() {
      this.setState({ showHideProfile: !this.state.showHideProfile
      });
      this.setState({counter: this.state.counter +1});
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
       show Profile 
     </button>
     <h4>{this.state.counter}</h4>
     </div>
    )
  }
}