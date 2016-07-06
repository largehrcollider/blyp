import React from 'react';
import { Link } from 'react-router';
import Logout from '../containers/Logout.js'

import blypLogo from '../assets/images/blyplogonav.png';
import settings from '../assets/images/settings.png';
import barcode from '../assets/images/barcode.png';
import cart from '../assets/images/cart.png';
import searchIcon from '../assets/images/search_icon.png';
import material from '../assets/materialize/css/materialize.css';
import index from '../assets/styles/index.css';
import bootstrap from '../assets/styles/bootstrap.css';
import inventory from '../assets/styles/InventoryPane.css';


const NavBar = () => (
  <nav className={index.menu}>
  	<ul>
    	<li className={index.active}>
        <Link to='/'>
          <img src={blypLogo}/>
        </Link>
      </li>
			<li>
        <form className={index.search}>
					<input type="text" name="search" placeholder="search"/>
					<button type="searchicon"/>
				</form>
      </li>
      <li>
        <Link to='/settings'>
          <img src={settings}/>
        </Link>
      </li>
      <li>
        <Link to='/inventory'>
          <img src={barcode}/>
        </Link>
      </li>
      <li>
        <Link to='/sell'>
          <img src={cart}/>
        </Link>
      </li>
      <li>
        <Link to='/'>
          <Logout/>
        </Link>
      </li>
      <li>
        <Link to='/profile'>
          Profile
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
