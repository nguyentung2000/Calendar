import React, { useState, useEffect } from 'react';
import Calendar from '../calendar/Calendar';
import './rightSidebar.css'
const RightSidebar = () => {
    return (
        <div id='right-sidebar'>
            <div className="right-sidebar-main">
                <div className="right-sidebar-nav">
                    <div className="nav-search">
                        <svg xmlns="http://www.w3.org/2000/svg" widtd={18} height={18} fill="#c9c8ca" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                        <input type="text" placeholder='Search ...' />
                    </div>
                    <h1 className='right-sidebar-title'>Calendar</h1>
                    <div className='right-sidebar-more'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} fill="#c9c8ca" className="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                        </svg>
                    </div>
                </div>
                <Calendar />
            </div>
        </div >
    );
}

export default RightSidebar;
