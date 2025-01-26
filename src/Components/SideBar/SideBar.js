import React from 'react'
import "./SideBar.css"
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-wrapper">
            <div className="sidebar-menu">
                <div className="sidebar-title">Dashboard</div>
                <ul className="sidebar-list">
                    <Link to="/">
                    <li className="sidebar-list-item active">
                        <LineStyleOutlinedIcon className='sidebar-icon'/>
                        Home
                    </li>
                    </Link>
                    <li className="sidebar-list-item">
                        <TimelineOutlinedIcon className='sidebar-icon'/>
                        Analytics
                    </li>
                    <li className="sidebar-list-item">
                        <TrendingUpOutlinedIcon className='sidebar-icon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-title">Quick Menu</div>
                <ul className="sidebar-list">
                    <Link to="./users">
                    <li className="sidebar-list-item">
                        <PermIdentityOutlinedIcon className='sidebar-icon'/>
                        Users
                    </li>
                    </Link>
                    <li className="sidebar-list-item">
                        <PermIdentityOutlinedIcon className='sidebar-icon'/>
                        New User
                    </li>
                    <Link to="./products">
                    <li className="sidebar-list-item">
                        <StorefrontOutlinedIcon className='sidebar-icon'/>
                        Products
                    </li>
                    </Link>
                    <li className="sidebar-list-item">
                        <AttachMoneyOutlinedIcon className='sidebar-icon'/>
                        Transactions
                    </li>
                    <li className="sidebar-list-item">
                        <BarChartOutlinedIcon className='sidebar-icon'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-title">Notifications</div>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <EmailOutlinedIcon className='sidebar-icon'/>
                        Mail
                    </li>
                    <li className="sidebar-list-item">
                        <DynamicFeedOutlinedIcon className='sidebar-icon'/>
                        Feedback
                    </li>
                    <li className="sidebar-list-item">
                        <ChatBubbleOutlineOutlinedIcon className='sidebar-icon'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebar-menu">
                <div className="sidebar-title">Staff</div>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <ManageAccountsOutlinedIcon className='sidebar-icon'/>
                        Manage
                    </li>
                    <li className="sidebar-list-item">
                        <TimelineOutlinedIcon className='sidebar-icon'/>
                        Analytics
                    </li>
                    <li className="sidebar-list-item">
                        <ReportGmailerrorredOutlinedIcon className='sidebar-icon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}