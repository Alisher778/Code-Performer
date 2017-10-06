import React, { Component } from 'react';
import avatar from '../../assets/img/avatar.png'

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {showHide: 'none'}
    
  }
  
  toggleAuthLink(){
    const val = this.state.showHide !== 'block' ? 'block' : 'none';
    this.setState({ showHide: val });
  }

  render(){
    return(
      <header>
        <nav>
          <div id="logo"><h1>Task<b>Runner</b></h1></div>
          <ul id="nav-list">
            <li>Customers</li>
            <li>Tasks</li>
            <li id="user-auth">
              <img src={avatar} alt="user-auth" onClick={this.toggleAuthLink.bind(this)}/>
              <ul id="auth-link" style={{display: this.state.showHide}}>
                <li><a href="">Login</a></li>
                <li><a href="">Sign Up</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Nav;