import React from 'react'
import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/rightbar";

export default function profile() {
    return (
      <div>
      <Topbar />
      <div className="profile">

      <Sidebar />
      <div className="profileRight">
          <div className = "profileRightTop"> 
          <div className = "profileCover"> 
<img className= "profileCoverImg" src = "assets/post/3.jpeg"  alt=" "></img>
<img className= "profileUserImg"  src = "assets/person/5.jpeg"  alt=" "></img>
          </div>
          <div className = "profileInfo"> 
          <h4 className= "profileInfoName">Nandita</h4>
          <span className= "profileInfoDesc">Hello friends chai p lo</span>
          </div>
          </div>
          <div className = "profileRightBottom"> 
      <Feed/>
      <Rightbar profile/>
      </div>
      </div>
        </div>
        </div> 
       
    );
}

