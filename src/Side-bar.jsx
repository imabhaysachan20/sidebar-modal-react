import React from 'react'
import logo from "../src/logo.svg"
import {FaXbox} from "react-icons/fa"
import { links,social } from './data' 
import {useGlobalContext} from "../context";
const Sidebar = () => {
  const {isSidebarOpen,closeSideBar} =  useGlobalContext();
  return (
    <div className={isSidebarOpen?'sidebar show-sidebar':'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="" />
        <button onClick={closeSideBar} className='cross'><FaXbox/></button>
      </div>
<ul>
  {links.map((link)=>{
    const {id,url,text,icon} = link;
    return <li key={id}>
      <a href={url}>{icon} {text}</a>
    </li>
  })}
</ul>

<div className="social-links">
  {social.map((soc)=>{
    const {id,url,icon} = soc;
    return <a key = {id} href={url}>{icon}</a>
  })} 
</div>
  </div>
  )
}

export default Sidebar
