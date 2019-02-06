 import React, { Component } from 'react';
 import Nav from './Nav.js';
 import ThinColumn from './ThinColumn.js';
 import Header from './Header.js';
 import SkillsCode from './SkillsCode.js';

class App extends Component {
	render(){
		return(
		<div>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"/>
		<Nav/>
		<ThinColumn/>
		<Header/>
		<ThinColumn/>
		</div>
		)
	}
	componentDidMount(){
		const script = document.createElement("script");
		script.src = SkillsCode;
		script.async = true;

        document.body.appendChild(script);
	}
}


export default App;
























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