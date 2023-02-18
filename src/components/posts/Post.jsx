import React, { useState } from 'react'
import "./post.css"
import {Users} from "../../data";
import { MoreVert } from '@mui/icons-material'
const Post = ({post}) => {
  let photo=post.photo
const [like,setLike]=useState(post.like)
const [isLiked,setIsLiked]=useState(false)

const   handleLike=()=>{
setLike(isLiked? like-1 :like+1)
setIsLiked(!isLiked)
}
  return (
    <div className='post'>
       <div className="postwrapper">
        <div className="top">
            <div className="topleft">
                <img className='postprofileimg' 
                src={Users.filter((user)=>user.id===post.userId)[0]. profilePicture} 
                alt="picture" />
                <span className="username">
                  {Users.filter((user)=>user.id===post.userId)[0].username}
                  </span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="topright">
              <MoreVert/>
            </div>
        </div>
        <div className="center">
          <span className="posttext">
            {post.desc}
          </span>
          <img className='postimg' src={photo} alt="post" />
        </div>
        <div className="bottom">
          <div className="bottomleft">
            <img className='likeicon' src="/assets/heart.png" onClick={handleLike}alt="heart" />
            <img className='likeicon' src="/assets/like.png" onClick={handleLike} alt="like" />
            <span className="postlikecounter">{like} people liked it</span>
          </div>
          <div className="bottomright">
            <span className="postcoments">{post.comment} comments</span>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Post