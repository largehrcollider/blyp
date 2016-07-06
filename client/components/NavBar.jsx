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


const NavBar = ({ business, showSettings, showInventory, showSell }) => (
  <nav className={index.menu}>
  	<ul>
    	<li className={index.active}>
        <Link to='/'>
          <img src={blypLogo}/>
        </Link>
      </li>
      <li className={index.busName}>
      {business}
      </li>
      <li>
        {showSettings &&
          <Link to='/settings'>
            <img src={settings}/>
          </Link>
        }
      </li>
      <li>
        {showInventory &&
          <Link to='/inventory'>
            <img src={barcode}/>
          </Link>
        }
      </li>
      <li>
        {showSell &&
          <Link to='/sell'>
            <img src={cart}/>
          </Link>
        }
      </li>
      <li>
        <Link to='/'>
          <Logout/>
        </Link>
      </li>
      <li>
        <Link to='/profile'>
          <div className={index.logOut}>
            <h4>Profile</h4>
          </div>
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
