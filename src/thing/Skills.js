import React, { Component } from 'react';

class Skills extends Component {
  render() {
	return(
	<div>
	<div id="skillsList">
	  <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus magna eget ultricies tincidunt.</p>
	  <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus magna eget ultricies tincidunt.</p>
	  <p>- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus magna eget ultricies tincidunt.</p>
	  <hr/>
	  <h5>Add a new skill:</h5>
	  <input type="text" name="skillInput" style="width: 700px;"/> <button type="button">Add</button>
	  </div>
	</div>
	)
  }
}

export default Skills;
