import React from 'react'



class InputComponent extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {value: 'Some Text'};
  
	  this.handleChange = this.handleChange.bind(this);
	}
  
	handleChange(event) {
	  this.setState({value: event.target.value});
	}
  
  
	render() {
	  return (

		<input type="text" value={this.state.value} onChange={this.handleChange} spellCheck="false"/>

	  );
	}
  }

export default InputComponent;