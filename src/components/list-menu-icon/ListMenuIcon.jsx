import './ListMenuIcon.css'
import React, { useEffect, useRef, useState } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CloseIcon from "@mui/icons-material/Close";

export default function ListMenuIcon() {
  const [isVolumnUp, setIsVolumnUp] = useState(false);
  const audioRef = useRef(null); // Sử dụng useRef để truy cập phần tử audio

  // Khi component load lần đầu, tự động phát nhạc
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const toggleVolume = () => {
    setIsVolumnUp(!isVolumnUp);

    // Kiểm tra và điều khiển việc phát/tắt nhạc
    if (audioRef.current) {
      if (isVolumnUp) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };
  return (
    <div className="list-menu-icon">

      <audio ref={audioRef} src="./src/assets/baby-song.mp3" loop /> {/* Đặt file nhạc của bạn vào đây */}

      <div className="music-icon">
        <ul>
          <li>
            <VolumeUpIcon
              style={{ display: isVolumnUp ? "block" : "none" }}
              onClick={toggleVolume}
            />
            <VolumeOffIcon
              style={{ display: isVolumnUp ? "none" : "block" }}
              onClick={toggleVolume}
            />
          </li>
        </ul>
      </div>
      <div className="wedding-function-icon">
        <ul>
          <li>
            <span className="icon-label">Gửi lời chúc</span>
            <MarkEmailReadIcon />
          </li>
          <li>
            <span className="icon-label">Xác nhận tham dự</span>
            <PersonAddIcon />
          </li>
          <li>
            <span className="icon-label">Mừng cưới</span>
            <AttachMoneyIcon />
          </li>
          <li>
            <CloseIcon />
          </li>
        </ul>
      </div>
    </div>
  )
}