import React, { Component } from 'react';
import Skills from './Skills.js';

class Header extends Component {
  render() {
	return(
	<div>
    <div className="col-sm-9 text-left"> 
		<h1>{ this.props.name }</h1>
		<h2>{ this.props.role }</h2>
		<h3>Skills:</h3>
		<hr/>
		<Skills/>
	</div>
	<div className="col-sm-1 text-left"> 
		<img src="https://i.imgur.com/ZFyKDnc.png"/>
	</div>
	</div>
	)
  }
}

Header.defaultProps = {
  name: 'Joe Bloggs',
  role: 'Trainer'
}

export default Header;

/*

*/