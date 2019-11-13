import React from 'react';
import {Link} from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
 return (
  <div className="header-wrapper">
    <ul>
      <li>
        <Link to="/">Posts</Link>
      </li>
      <li>
        <Link to="/create-post">Create post</Link>
      </li>
    </ul>
  </div>
 )
};

export default Header;