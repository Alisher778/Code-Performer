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
      <header id="header">
        
        <nav className="navbar navbar-expand-lg navbar-light bg-none">
        <Link className="navbar-brand" id="logo" to="/"><h1>Code<b>Performer</b></h1></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ml-auto" id="nav-list">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/code-performance">Test Code</Link></li>
            <li id="user-auth">
              <img src={avatar} alt="user-auth" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
    );
  }
};

export default Nav;