import React from 'react';
import './Header.css'
import amazonLogo from '../images/1000px-Amazon_logo.svg.png';
import { Link } from 'react-router-dom';

const Header = ({user}) => {
  return (
    <div className='header'>
      <div className='header_top'>
        <div className='header_top_left'>
          <div className='nav_logo'>
            <Link to='/'>
              <img src={amazonLogo} alt="" loading='lazy' />
            </Link>
          </div>
          <div className='nav_location'>
            <span>Deliver to</span>
            <span>Indonesia</span>
          </div>
        </div>
        <div className='header_top_middle'>
          <select name="category" id="category">
            <option value="Makanan">Makanan ringan</option>
            <option value="Pakaian">Pakaian</option>
            <option value="Perabot">Perabot</option>
          </select>
          <input type="text" />
          <button>Go</button>
        </div>
        <div className='header_top_right'>
          <div className='country'>
            <select name="country" id="country">
              <option value="Indonesia">Indonesia</option>
              <option value="USA">USA</option>
              <option value="Ingrris">Ingrris</option>
            </select>
          </div>
          <div className='signin'>
            <a href='http://localhost:8000/auth/google'>
              <span>{`Hello, ${!user ? 'Sign In' : user?.username}`}</span>
              {!user && <span>Account & Lists</span>}
            </a>
          </div>
          <div className='order'>
            <span>Returns</span>
            <span>& Orders</span>
          </div>
          <div className='cart'>Cart</div>
        </div>
      </div>
      <div className='header_bottom'>
        <div className='all'>All</div>
        <div className='bottom_menu'>
          <Link to='/todays-deal'>Todays Deals</Link>
          <Link to='/customer-service'>Costumer Service</Link>
          <Link to='/customer-service'>Gift Cards</Link>
          <Link to='/customer-service'>Registry</Link>
          <Link to='/customer-service'>Sell</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
