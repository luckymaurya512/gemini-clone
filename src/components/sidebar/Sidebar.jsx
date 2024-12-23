import React, { useState } from "react";
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { useContext } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {

    const {onSent, prevPrompt, setRecentPrompt, newChat}=useContext(Context)

    const [extended, setExtended]=useState(false)

    const loadPrompt = async (prompt) => {

        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className="sidebar">
            <div className="top">
                <img className="menu" onClick={()=>setExtended(prev=>!prev)} src = {assets.menu_icon} alt="menuicon" />
                <div onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="plusicon"/>
                    {extended?<p>New Chat</p>:null}
                </div>
                {extended?<div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompt.map((item, index)=>{
                        return(
                    <div onClick={()=>loadPrompt(item)} className="recent-entry" key={index}>
                        <img src={assets.message_icon} alt="messageicon"/>
                        <p>{item.slice(0,18)}...</p>
                    </div>
                        )
                    })}
                </div>:null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="questionicon"/>
                    {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="questionicon"/>
                    {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="questionicon"/>
                    {extended?<p>Setting</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;