import React, { Component } from 'react';

class Nav extends Component {
  render() {
	return(
	<div>
	<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Tracker</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Trainers</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
	    <li class="active"><a href="#">My Profile</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
	</div>
	)
  }
}

export default Nav;