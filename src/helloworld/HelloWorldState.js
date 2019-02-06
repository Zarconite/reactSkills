import React, { Component } from 'react';

class HelloWorldState extends Component {
  render() {
	return(
	<p>{ this.props.helloProp }</p>
	)
  }
}

export default HelloWorldState;