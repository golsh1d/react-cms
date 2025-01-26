import React from 'react'
import "./TopBar.css"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function TopBar() {
  return (
    <div className="topbar">
        <div className="topbar-wrapper">
            <div className="topbar-leftside">
                <span className="topbar-logo">Dashboard</span>
            </div>

            <div className="topbar-rightside">
                <div className="topbar-icon-wrapper">
                    <NotificationsNoneOutlinedIcon/>
                    <span className="topbar-badge">2</span>
                </div>
                <div className="topbar-icon-wrapper">
                    <LanguageOutlinedIcon/>
                    <span className="topbar-badge">2</span>
                </div>
                <div className="topbar-icon-wrapper">
                    <SettingsOutlinedIcon/>
                </div>
                <div className="topbar-img-wrapper">
                    <img src="/Img/topbar/admin.jpg" alt="admin" />
                </div>
            </div>
        </div>
    </div>
  )
}