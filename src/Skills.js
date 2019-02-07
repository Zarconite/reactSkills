import React, { Component } from 'react';
import FormComponent from './FormComponent.js';
import OutputArrayComponent from './OutputArrayComponent.js';

class Skills extends Component {
	
   constructor(props) {
    super(props);

    this.state = {
      array: []
    }
	
    this.handleSubmitInParent = (dataFromForm) => {
      let array = this.state.array;
      array.push({
        id: 1+array.length,
        myData: dataFromForm.myData
      });
      this.setState({ array });
    }
	
	this.state.array.push({
		id: 1+this.state.array.length,
        myData: this.props.defaultSkill
      });
	this.state.array.push({
		id: 1+this.state.array.length,
        myData: this.props.defaultSkill
      });
	this.state.array.push({
		id: 1+this.state.array.length,
        myData: this.props.defaultSkill
      });
  }

  render() {
	  
	return(
	<div>
	<div id="skillsList" ref="container">
	  <OutputArrayComponent data={this.state.array} />
	  <hr/>
	  </div>
	  <FormComponent onSubmit={this.handleSubmitInParent}/>
	</div>
	)
  }
}

Skills.defaultProps = {
  defaultSkill: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus magna eget ultricies tincidunt.'
}

export default Skills;