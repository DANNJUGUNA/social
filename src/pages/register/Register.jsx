import React from 'react'
import"./register.css"
const Register = () => {
  return (
    <div className='login'>
        <div className="loginwrapper">
            <div className="loginleft">
               <h3 className="loginlogo">DS SOCIAL</h3>
               <span className="logindescription">
                Get connected with friends a cross the world through DS SOCIAL
               </span>
            </div>
            <div className="loginright">
                 <div className="loginbox">
                    <input type="text" placeholder='Username' className="logininput" />
                    <input type="email" placeholder='Email' className="logininput" />
                    <input type="password" placeholder='Password' className="logininput" />
                    <input type="password" placeholder='Password' className="logininput" />
                    <button className="loginbutton">Sign Up</button>
                    <button className="loginregister">Log Into Account</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Register