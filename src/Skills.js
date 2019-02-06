import React, { Component } from 'react';
import SkillsCode from './SkillsCode.js';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  render() {
	return(
	<div>
	<div id="skillsList" ref="container">
	  <p>{this.props.defaultSkill}</p>
	  <p>{this.props.defaultSkill}</p>
	  <p>{this.props.defaultSkill}</p>
	  <hr/>
	  <h5>Add a new skill:</h5>
	  <input type="text" name="skillInput" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/> <button type="button" onClick={ appendDiv(this.state.inputValue) }>Add</button>
	  </div>
	</div>
	)
  }
}

Skills.defaultProps = {
  defaultSkill: '- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus magna eget ultricies tincidunt.'
}

function updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

function appendDiv(inputTxt){
	return(
	React.createElement(
  'p',
  {className: 'test'},
	  {inputTxt}
))
}

export default Skills;
