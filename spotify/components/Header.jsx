//import React from 'react';
import { Link } from "react-router-dom";
import logoSpotify from "../src/assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="" />
      </Link>
      <Link className="header__link" to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  )
}

export default Header
