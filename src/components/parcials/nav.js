import React, { Component } from 'react';
import avatar from '../../assets/img/avatar.png'

class Nav extends Component {
  render(){
    return(
      <header>
        <nav>
          <div id="logo"><h1>Task<b>Runner</b></h1></div>
          <ul id="nav-list">
            <li>Customers</li>
            <li>Tasks</li>
            <li id="user-auth">
              <img src={avatar} alt="user-auth"/>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Nav;