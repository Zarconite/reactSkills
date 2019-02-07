import React, { Component } from 'react';

class Nav extends Component {
  render() {
	return(
	<div>
	<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#Tracker">Tracker</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li><a href="#Dashboard">Dashboard</a></li>
        <li><a href="#Trainers">Trainers</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
	    <li className="active"><a href="#Profile">My Profile</a></li>
        <li><a href="#Login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
	</div>
	)
  }
}

export default Nav;