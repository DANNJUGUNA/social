import React from 'react'
import "./sidebar.css"
import { RssFeed,Chat,PlayCircleFilledOutlined,Event,School,Bookmark,HelpOutline,WorkOutline ,Group} 
from '@mui/icons-material'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                  <RssFeed className='sidebarIcon'/>
                  <span className="sidebarlisttex">Feed</span>
                </li>
                <li className="sidebarListItem">
                  <Chat className='sidebarIcon'/>
                  <span className="sidebarlisttex">Chats</span>
                </li>
                <li className="sidebarListItem">
                  < PlayCircleFilledOutlined className='sidebarIcon'/>
                  <span className="sidebarlisttex">Video</span>
                </li>
                <li className="sidebarListItem">
                  < Group className='sidebarIcon'/>
                  <span className="sidebarlisttex">Groups</span>
                </li>
                <li className="sidebarListItem">
                  < Bookmark className='sidebarIcon'/>
                  <span className="sidebarlisttex">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                  < HelpOutline className='sidebarIcon'/>
                  <span className="sidebarlisttex">Questions</span>
                </li>
                <li className="sidebarListItem">
                  < WorkOutline className='sidebarIcon'/>
                  <span className="sidebarlisttex">Jobs</span>
                </li>
                <li className="sidebarListItem">
                  < Event className='sidebarIcon'/>
                  <span className="sidebarlisttex">Events</span>
                </li>
                <li className="sidebarListItem">
                  < School className='sidebarIcon'/>
                  <span className="sidebarlisttex">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className='sidebarhr'/>
            <ul className="sidebarFriendsList">
                <li className="sidebarFriend">
                    <img className='sidebarFriendImage' src="/assets/person/2.jpeg" alt="name" />
                    <span className="sidebarFriendName">John Doe</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImage' src="/assets/person/3.jpeg" alt="name" />
                    <span className="sidebarFriendName">Josphine Kelly</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImage' src="/assets/person/4.jpeg" alt="name" />
                    <span className="sidebarFriendName">Joy Dansel</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImage' src="/assets/person/7.jpeg" alt="name" />
                    <span className="sidebarFriendName">Hime Hime</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImage' src="/assets/person/6.jpeg" alt="name" />
                    <span className="sidebarFriendName">James Gordon</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImage' src="/assets/person/8.jpeg" alt="name" />
                    <span className="sidebarFriendName">Jane Hime</span>
                </li>
                <li className="sidebarFriend">
                    <img className='sidebarFriendImage' src="/assets/person/10.jpeg" alt="name" />
                    <span className="sidebarFriendName">Hellen Josphine</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar