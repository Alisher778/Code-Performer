import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import avatar from '../../assets/img/avatar.png';

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
          <div id="logo"><Link to="/"><h1>Code<b>Performer</b></h1></Link></div>
          <ul id="nav-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/code">Test Code</Link></li>
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