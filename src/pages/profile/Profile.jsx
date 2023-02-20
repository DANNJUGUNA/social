import React from 'react'
import "./profile.css"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TopBar from '../../components/topBar/TopBar'
const Profile=()=> {
  return (
    <>
        <TopBar/>
     <div className="profile">
          <Sidebar/>
         <div className="profileRight">
             <div className="profileRighttop">
                <div className="profilecover">

                  <img 
                  className='profilecoverimage' 
                  src="assets/posts/10.jpeg" 
                  alt="" 
                  />

                  <img 
                  className='profileuserimage' 
                  src="assets/person/1.jpeg" 
                  alt="" 
                  /> 

                </div>
                 <div className="profileinfo">
                    <h4 className='profileinfoname'>Dan Njuguna</h4>
                    <span className='profileinfodescription'>Hello my great friends!!</span>
                 </div>
             </div>
             <div className="profileRightbottom">
                <Feed/>
                 <Rightbar profile/>
             </div>
          </div>
     </div>
    </>
  )
}

export default Profile