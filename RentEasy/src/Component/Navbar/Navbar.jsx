import React, { useContext, useState } from 'react';
import { Housecontext } from '../Context/Housecontext';
import './Navbar.css';
import logo from "../../assets/Rentlogo.png";
import cart from '../../assets/carticon.png';
import usericon from '../../assets/usericon.png'
import { Link } from 'react-router-dom';

function Navbar() {
  const { gettotlaitemincart } = useContext(Housecontext);
  const [model, setModel] = useState(false);
  const [username, setUsername] = useState(''); 
  const [submitted, setSubmitted] = useState(false);
  const [number , setNumber] = useState('')


  const validateForm = () => {
    let valid = true;
    if (username.trim() === ''|| Number(username)) {
        alert('username is reqired')
      valid = false;
    }
    if (!/^\d{10}$/.test(number)) {
      alert("Phone number must be 10 number")
      valid = false;
    }
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm()){
      setSubmitted(true);
      setModel(false);
    };
    }

  return (
    <>
      <div className='navbar'>
        <div className="navbar_left">
          <Link className="link" to="/">
            <img src={logo} alt="logo" className='logo' />
          </Link>
          <Link className='link name' to='/'>RENTEASY</Link>
        </div>
        <div className="navbar_right">
          <div className='Login_signup'>
              <p onClick={() => setModel(true)} className='auth'>
                {submitted ?
                (
                  <div className='user_img'>
                    <img src={usericon} alt="usericon" className='usericon' />
                    {username}
                  </div>
                ): 'Log in'}
              </p>
          </div>
          <div className='carticon'>
            <Link to="/cart">
              <img src={cart} alt="cart" className='cart' />
            </Link>
            <div className='nav_cart_count'>{gettotlaitemincart()}</div>
          </div>
        </div>
      </div>

      {model && (
        <div className="pop_up_model">
          <form onSubmit={handleSubmit}>
            <div className='loginform'>
              <label htmlFor="username" className='userlabel'>Username:</label><br />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              /> <br/><br />
              <label htmlFor="Number" className='userlabel'>Phone Number:</label><br />
              <input 
              type="number" 
              id="Number"
              value={number}
              onChange={(e) =>setNumber(e.target.value) }
              required
              />
                <button type="submit" className='btnlog'>Log In</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Navbar;


