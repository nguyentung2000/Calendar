import React, { useState } from 'react';
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
                <div className="right-sidebar-content">
                    <div className="content-header">
                        <div className="header-button-date">
                            <button className='button-week'>Week</button>
                            <button className='button-month'>Month</button>
                        </div>
                        <div className="header-button-time">
                            <button className='header-button-before'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
                                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                </svg>
                            </button>
                            <span className='header-button-time-title'>October</span>
                            <button className='header-button-after'>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                </svg>
                            </button>
                        </div>
                        <div className="header-button-3">
                            <button className='header-button-weekend'>Weekends</button>
                            <button className='header-button-add-task'>Add task</button>
                        </div>
                    </div>
                    <div className="content-main">
                        <table className='content-main-table'>
                            <tr>
                                <th className='day'>Monday</th>
                                <th className='day'>Tuesday</th >
                                <th className='day'>Wednesday</th >
                                <th className='day'>Thusday</th >
                                <th className='day right-day'>Friday</th >
                            </tr>
                            <tr>
                                <td className='day'>31</td >
                                <td className='day'>1</td >
                                <td className='day'>2</td >
                                <td className='day'>3</td >
                                <td className='day right-day'>4</td >
                            </tr>
                            <tr>
                                <td className='day'>7</td >
                                <td className='day'>8</td >
                                <td className='day'>9</td >
                                <td className='day'>10</td >
                                <td className='day right-day'>11</td >
                            </tr>
                            <tr>
                                <td className='day'>14</td >
                                <td className='day'>15</td >
                                <td className='day'>16</td >
                                <td className='day'>17</td >
                                <td className='day right-day'>18</td >
                            </tr>
                            <tr>
                                <td className='day'>21</td >
                                <td className='day'>22</td >
                                <td className='day'>23</td >
                                <td className='day'>24</td >
                                <td className='day right-day'>25</td >
                            </tr>
                            <tr>
                                <td className='day bottom-day'>28</td >
                                <td className='day bottom-day'>29</td >
                                <td className='day bottom-day'>30</td >
                                <td className='day bottom-day'>1</td >
                                <td className='day bottom-day right-day'>2</td >
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RightSidebar;
