import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { auth } from "../../firebase/firebase.utilis";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({currentUser}) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link> 
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>Sign Out</div>
        :
        <Link className="option" to="/signIn">
        SIGN IN
      </Link>
      }
    
    </div>
  </div>
);
export default Header;
