import './ListMenuIcon.css'
import React, { useState } from "react";

import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CloseIcon from "@mui/icons-material/Close";

export default function ListMenuIcon(){
    const [isVolumnUp, setIsVolumnUp] = useState(true);

  const toggleVolume = () => {
    setIsVolumnUp(!isVolumnUp);
  };
    return(
        <div className="list-menu-icon">
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