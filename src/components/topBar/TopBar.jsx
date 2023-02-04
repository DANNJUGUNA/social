import React from "react";
import "./topbar.css"
import { Search,Person,Chat,Notifications } from "@mui/icons-material";
const TopBar = () => {
  return (
    <div className="topbarContainer">
        <div className="topbar-left">
            <span className="logo">DS SOCIAL</span>
        </div>
        <div className="topbar-center">
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input type="text" placeholder="search for friends,post,video"
                 className="searchInput" />
            </div>
        </div>
        <div className="topbar-right">
            <div className="topbarLinks">
                <span className="topbarLink">HomaPage</span>
                <span className="topbarLink">TimeLine</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src="/assets/person/1.jpeg" alt="profile" className="topbarImage" />
        </div>
    </div>
  )
}

export default TopBar