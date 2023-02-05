import React from 'react'
import "./post.css"
import { MoreVert } from '@mui/icons-material'
const Post = () => {
  return (
    <div className='post'>
       <div className="postwrapper">
        <div className="top">
            <div className="topleft">
                <img className='postprofileimg' src="./assets/person/1.jpeg" alt="picture" />
                <span className="username">Dan Njuguna</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="topright">
              <MoreVert/>
            </div>
        </div>
        <div className="center">
          <span className="posttext">
            Hey! It's my first post. I am very greatfull
          </span>
          <img className='postimg' src="/assets/posts/1.jpeg" alt="post" />
        </div>
        <div className="bottom">
          <div className="bottomleft">
            <img className='likeicon' src="/assets/heart.png" alt="heart" />
            <img className='likeicon' src="/assets/like.png" alt="heart" />
            <span className="postlikecounter">23 people liked it</span>
          </div>
          <div className="bottomright">
            <span className="postcoments">9 comments</span>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Post