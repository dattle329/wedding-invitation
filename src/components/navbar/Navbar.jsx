import React, { useState } from "react";
import "./Navbar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Navbar() {
  const scrollToTop = (e) => {
    e.preventDefault(); // Ngăn không cho thẻ a thực hiện hành vi mặc định
    window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn mượt mà lên đầu trang
  };

  const scrollToCouple = (e) => {
    e.preventDefault(); // Ngăn không cho thẻ a thực hiện hành vi mặc định
    window.scrollTo({ top: 800, behavior: "smooth" }); // Cuộn mượt mà lên đầu trang
  };

  return (
    <div className="container">
      <div className="navbar-container">
        <a href="#" onClick={scrollToTop}>
          <h1>
            <span>D</span>
            <FavoriteIcon />
            <span>L</span>
          </h1>
        </a>
        <ul>
          <li>
            <a href="#img-intro" onClick={scrollToCouple}>Cặp đôi</a>
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
