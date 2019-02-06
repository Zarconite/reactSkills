import React, { Component } from 'react';
import SkillsCode from './SkillsCode.js';

class Skills extends Component {
	constructor(props) {
        super(props);
        this.state = { skills: ['skill-0'] };
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
	  <input type="text" name="skillInput" /> <button type="button" onClick={ () => this.appendInput() }>Add</button>
	  </div>
	</div>
	)
  }
}

Skills.defaultProps = {
  defaultSkill: '- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus magna eget ultricies tincidunt.'
}

appendInput() { var newSkill = `skills-${this.state.skills.length}`;
        this.setState(prevState => ({ skills: prevState.skills.concat([newSkill]) }));
    }
export default Skills;
//style="width: 700px;"