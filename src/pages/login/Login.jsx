import React from 'react'
import"./login.css"
const Login = () => {
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
                    <input type="email" placeholder='Email' className="logininput" />
                    <input type="password" placeholder='Password' className="logininput" />
                    <button className="loginbutton">Log In</button>
                    <span className="loginforgot">Forgot password?</span>
                    <button className="loginregister">Create New Account</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Login