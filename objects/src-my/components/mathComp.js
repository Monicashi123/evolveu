
import React from 'react';
import math from './math.js';

class MathComp extends React.Component {
	constructor(){
		super();
		this.state={

			myinput1:'',
		    myinput2:'',
		    result:''
		}
   
	}

	settingState = (event) => {
		const { name, value } = event.target
		this.setState({[name]: value})
	}
		

    onAdd = () => {
      
         this.setState(
         {
           result:math.sum(parseInt(this.state.myinput1), parseInt(this.state.myinput2))
         })

    }


    onMins = () => {
      
         this.setState(
         {
           result:math.min(parseInt(this.state.myinput1), parseInt(this.state.myinput2))
         })

    }
    
    onMult = () => {
      
         this.setState(
         {
           result:math.multi(parseInt(this.state.myinput1), parseInt(this.state.myinput2))
         })

    }

    onDivi = () => {
      
         this.setState(
         {
           result:math.div(parseInt(this.state.myinput1), parseInt(this.state.myinput2))
         })

    }
	
	render() {

	return (
	<div>
					<h1> Hello World from MathComp </h1>
	<input type="Number" value = {this.state.myinput1} name ='myinput1' onChange={this.settingState}/><br/>
	<input type="Number" value = {this.state.myinput2} name ='myinput2' onChange={this.settingState}/><br/>		
	<button onClick={this.onAdd} >+</button>
	<button onClick={this.onMins} >-</button>
	<button onClick={this.onMult} >*</button>
	<button onClick={this.onDivi} >/</button>
		<h3> Result is: {this.state.result}</h3>
	</div>
	)
		
	}
}

export default MathComp;




