import React from 'react'
import Post from '../posts/Post'
import Share from '../share/Share'
import "./feed.css"
const Feed = () => {
  return (
    <div className='feed'>
        <div className="feedwrapper">
          <Share/>
          <Post/>
          <Post/>
          <Post/>
        </div>
    </div>
  )
}

export default Feed