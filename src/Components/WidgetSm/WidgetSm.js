import React from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState } from "react";

export default function WidgetSm() {
  const [newUsers] = useState([
    { id: 1, userName: "Golshid Ebrahimi", role: "Web Developer", img : "./Img/topbar/admin.jpg"},
    { id: 2, userName: "Hamidreza Booslik", role: "Hacker", img : "./Img/widgetsm/hacker.jpg" },
  ]);

  return (
    <div className="widgetsm">
      <div className="widgetsm-title">New Join Members</div>

      <ul className="widgetsm-list">
        {newUsers.map((newUser) => (
          <li key={newUser.id} className="widgetsm-list-item">
            <img src={newUser.img} className="widgetsm-img" alt="" />
            <div className="widgetsm-user-detail">
              <span className="widgetsm-user-name">{newUser.userName}</span>
              <span className="widgetsm-user-role">{newUser.role}</span>
            </div>
            <button className="widgetsm-btn">
              <VisibilityIcon className="widgetsm-btn-icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}