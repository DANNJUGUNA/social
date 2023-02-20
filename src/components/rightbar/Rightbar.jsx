import React from 'react'
import { Users } from '../../data'
import "./rightbar.css"
import Online from"../online/Online"
const Rightbar = ({profile}) => {

  const HomeRightbar=()=>{
    return(
      <>
      <div className="birthdaycontainer">
            <img className='birthdayimage' src="/assets/gift.png" alt="image" />
            <span className='birthdaytext'><b>John Doe</b> and <b> 4 others friends</b> have a birthday today</span>
          </div>
          <img src="/assets/ad.png" alt="" className="rightbaradvert" />
          <h4 className="rightbartitle">Online friends</h4>
          <ul className="rightbarfriendslist">
           {
            Users.map((user)=>(
              <Online key={user.id} user={user}/>
            ))
           }
         
          </ul>
      </>
    )
  }
  const ProfileRightBar=()=>{
    return(
      <>
      <h4 className='rightbartitle'>User Information</h4>
      <div className="rightbarinfo">
        <div className="rightbarinfoitem">
          <span className='rightbarinfokey'> City:</span>
          <span className='rightbarinfovalue'> Nairobi</span>
        </div>
        <div className="rightbarinfoitem">
          <span className='rightbarinfokey'> Occupation:</span>
          <span className='rightbarinfovalue'> Software Engineer</span>
        </div>
        <div className="rightbarinfoitem">
          <span className='rightbarinfokey'> Relationship:</span>
          <span className='rightbarinfovalue'> Maried</span>
        </div>
      </div>
      <h4 className='rightbartitle'>User Friends</h4>
      <div className="rightbarfriends">
        <div className="rightbarfriend">
          <img 
          src="assets/person/9.jpeg" 
          alt="" 
          className="rightbarfriendimage"
           />
           <span className="rightbarfriendname">Gary Duty</span>
        </div>
        <div className="rightbarfriend">
          <img 
          src="assets/person/5.jpeg" 
          alt="" 
          className="rightbarfriendimage"
           />
           <span className="rightbarfriendname">Thomas Holden</span>
        </div>
        <div className="rightbarfriend">
          <img 
          src="assets/person/3.jpeg" 
          alt="" 
          className="rightbarfriendimage"
           />
           <span className="rightbarfriendname">Josphine Kelly</span>
        </div>
        <div className="rightbarfriend">
          <img 
          src="assets/person/4.jpeg" 
          alt="" 
          className="rightbarfriendimage"
           />
           <span className="rightbarfriendname">Joy Dansel</span>
        </div>
      </div>
      </>
    )

    
  }
  return (
    <div className='rightbar'>
        <div className="rightbarwrapper">
          {profile ? <ProfileRightBar/> : <HomeRightbar/>}
        </div>
    </div>
  )
}

export default Rightbar