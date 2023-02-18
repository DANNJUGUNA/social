import React from 'react'
import "./rightbar.css"
const Rightbar = () => {
  return (
    <div className='rightbar'>
        <div className="rightbarwrapper">
          <div className="birthdaycontainer">
            <img className='birthdayimage' src="/assets/gift.png" alt="image" />
            <span className='birthdaytext'><b>John Doe</b> and <b> 4 others friends</b> have a birthday today</span>
          </div>
          <img src="/assets/ad.png" alt="" className="rightbaradvert" />
          <h4 className="rightbartitle">Online friends</h4>
          <ul className="rightbarfriendslist">
            <li className="rightbarfriend">
              <div className="rightbarprofileimagecontainer">
                <img src="./assets/person/2.jpeg" alt="" className="rightbarprofileimage" />
                <span className="rightbaronlinebadge"></span>
              </div>
              <span className="rightbarusername">John Doe</span>
            </li>
            <li className="rightbarfriend">
              <div className="rightbarprofileimagecontainer">
                <img src="./assets/person/3.jpeg" alt="" className="rightbarprofileimage" />
                <span className="rightbaronlinebadge"></span>
              </div>
              <span className="rightbarusername">Josphine Kelly</span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Rightbar