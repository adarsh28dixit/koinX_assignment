import React from "react";
import "./Navbar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { SearchIcon, BurgerIcon, CryptoIcon } from "../../SVG/svg";

export const Navbar = () => {
  return (
    <>
    
      <div className="container">
        <div className="crypto-tracker-navbar">
          <div className="crypto-tracker-logo">
            <div>
              <CryptoIcon />
            </div>
          </div>
          <div className="burger-log">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <div className="burger-icon">
              <BurgerIcon />
            </div>
          </div>
        </div>

        <div className="crypto-tracker-navbar-sm">
          <div className="burger-log">
            <div className="burger-icon">
              <BurgerIcon />
            </div>
          </div>
          <div className="crypto-tracker-logo">
            <div>
              <CryptoIcon />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
