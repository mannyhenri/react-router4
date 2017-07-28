import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="navbar-fixed">
      <nav className="teal lighten-2">
        <div className="nav-wrapper">
          <div className="brand-logo center">{props.name}'s Notepad</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/page2">Page 2</Link></li>
            <li><Link to="/page3">Page 3</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
