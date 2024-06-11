'use client';
import React from "react";
import '../styles/header.css'

import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";


const Header = () => {
    
    const onHamburgerClickHandler= (event)=>{
        // dispatch(toggleSideBar())
    }

    return <div className="header-container">
        <div>
            <img className="icon hamburger-icon" alt='hamburger icon' 
            src={'https://cdn3.iconfinder.com/data/icons/budicon-chroma-ui/24/hamburger-ui-512.png'}
            onClick={onHamburgerClickHandler}
             />
        </div>
        <div className = {"header-tile"}>{"Scentral Park Slot Booking"}</div>
        <div className = "profile-container">
            <IoMdNotificationsOutline className="icon notification-icon" alt='notifocation icon' onClick={onHamburgerClickHandler} />
            <CgProfile className="icon search-icon" alt='youtube icon' onClick={onHamburgerClickHandler}/>
        </div>
    </div>
}

export default Header