import React from 'react';
import "./share.css";
import { PermMedia,Label,Room,EmojiEmotions } from '@mui/icons-material';
const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareprofilepicture' src="./assets/person/1.jpeg" alt="" />
                <input 
                 placeholder='what do you want to share' 
                 className='shareinput'
                />
            </div>
            <hr className='hr'/>
            <div className="shareBottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <PermMedia htmlColor='tomato' className='icon'/>
                        <span className='optionText'>Photo or Video</span>
                    </div>
                    <div className="shareoption">
                        <Label htmlColor='blue' className='icon'/>
                        <span className='optionText'>Tag</span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotions htmlColor='goldenrod' className='icon'/>
                        <span className='optionText'>Feelings</span>
                    </div>
                    <div className="shareoption">
                        <Room htmlColor='green'  className='icon'/>
                        <span className='optionText'>Location</span>
                    </div>
                    
                </div>
                <button className="post">Post</button>
            </div>
        </div>
    </div>
  )
}

export default Share