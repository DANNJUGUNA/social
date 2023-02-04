import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TopBar from '../../components/topBar/TopBar'
import "./home.css"
const Home = () => {
  return (
    <>
    <TopBar/>
    <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
    </>
  )
}

export default Home