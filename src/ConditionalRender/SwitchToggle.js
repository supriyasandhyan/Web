import React, { useState } from 'react'

const SwitchToggle = () => {
  const [Switch_Toggle,setSwitch_Toggle] = useState("toggle");
  const [onoff,setOnOff] = useState('OFF')
  const [Mode, setMode] = useState('OFF')

  const toggleBtn = () => {
    if(Switch_Toggle === 'toggle'){
      setSwitch_Toggle('toggles')
      setOnOff('ON')
      setMode('ON')
    }else{
      setSwitch_Toggle('toggle')
      setOnOff('OFF')
      setMode('OFF')

    }
  }
  return (
    <div className={Switch_Toggle}>
      <div className='gold'>
       <h3> Switch Input Field will Display ON on the Screen when the toggle is ON and Show OFF otherwise.</h3>
        <button className='toggle_btn' onClick={toggleBtn}>{onoff}</button>
        <div className="Mode"><h3>{Mode}</h3></div>
      </div>
      
    </div>
  )
}

export default SwitchToggle














// import React, { Component } from 'react';

// class SwitchToggle extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       isToggleOn: false
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick = () => {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render(){
//     return(
//       <div className="switchtoggle">
//         <h1> Conditional Rendering </h1>
//         <p> Switch will display ON when toggle is ON and show OFF otherwise. </p>
//       <div className="toggler">
//         <button  onClick={this.handleClick}>
//           { this.state.isToggleOn ? "ON" : "OFF"}
//         </button>
//       </div>
//       </div>
//     );
//   }
// }

// export default SwitchToggle;