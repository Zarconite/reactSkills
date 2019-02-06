import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      header: "Header from props",
      content: "Content from props"
    }
  }
  render() {
    return (
      <div>
        <Header headerProp={ this.state.header } />
        <Content contentProp={ this.state.content } />
      </div>
      );
  }
}
class Header extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.headerProp }</h1></div>
      );
  }
}

class Content extends Component {
  render() {
    return (
      <div>
        <p>
          { this.props.contentProp }
        </p>
      </div>
      );
  }
}
export default App;




/*import React, { Component } from 'react';
import helloWorld from './HelloWorldState.js';

class App extends Component {
	constructor(){
		super();
		this.state = {
			contentState: "Hello World again!"
		}
	}
	
  render() {
    return (
      <div>
        <p>
		  { this.state.contentState }
		  <helloWorld helloProp={ this.state.contentState } />
			<br/>
          { this.props.contentProp }
        </p>
      </div>
      );
  }
}
App.defaultProps = {
  contentProp: 'Hello World!'
}
export default App;*/























//import logo from './logo.svg';
//import './App.css';
/*
 helloWorld() {
	return(
	<p>Hello World!</p>
	)
  }
	
	render(){
	return(
		<div>
		{this.helloWorld()}
		</div>
	)
	
  }
  */


    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );*/