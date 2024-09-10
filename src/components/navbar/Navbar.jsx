import React, { useState } from "react";
import "./Navbar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Navbar() {

  return (
    <div className="container">
      <div className="navbar-container">
        <h1>
          <span>D</span>
          <FavoriteIcon />
          <span>L</span>
        </h1>
        <ul>
          <li>
            <a href="#img-intro">Cặp đôi</a>
          </li>
          <li>
            <a href="#gallery">Ảnh cưới</a>
          </li>
          <li>
            <a href="#wedding-location">Thực đơn</a>
          </li>
          <li>
            <a href="#send-money">Gửi tiền cho chúng tui</a>
          </li>
        </ul>
      </div>
    
    </div>
  );
}
