import React from 'react';
import './leftSidebar.css'
const LeftSidebar = () => {
    return (
        <div id='left-sidebar'>
            <div className="left-sidebar-main">
                <h1 className='left-sidebar-title'>TASK MANAGER</h1>
                <div className='infomation'>
                    <img className='info-main-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGJZtxl6CTQm8yrSH6XYm8XZpVd6l3xp4iqA&usqp=CAU' alt="photo" />
                    <h4 className='info-name'>Nguyen Thanh Tung</h4>
                    <p className='info-email'>Tung@gmail.com</p>
                </div>
                <div className='crossbar'>
                    <hr height="2px" color='#5b7be3' align="center" width="70%" />
                </div>
                <div className='info-icon'>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#637fe4" className="bi bi-gear" viewBox="0 0 16 16">
                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                    </button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#637fe4" className="bi bi-envelope-open" viewBox="0 0 16 16">
                        <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                    </svg>
                    </button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="#637fe4" className="bi bi-bell" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                    </button>
                </div>
                <div className='info-task'>
                    <div className='info-completed-task' >
                        <div className='info-task-num'>10
                        </div>
                        <span>Completed tasks</span></div>
                    <div className='info-todo-task'>
                        <div className="info-task-num">20</div>
                        <span>To do tasks</span>
                    </div>
                    <div className="info-all-completed">
                        <div className='info-task-num'>69</div>
                        <span>All completed</span>
                    </div>
                </div>
                <div className='crossbar1'>
                    <hr height="2px" color='#a19c9c' align="center" width="100%" />
                </div>
                <div className="info-project">
                    <h1 className='info-project-title'>PROJECT</h1>
                    <ul>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="red" className="bi bi-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        </svg>

                            <span> Marketing</span></li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="blue" className="bi bi-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            </svg><span>  Design</span></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="green" className="bi bi-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        </svg>
                            <span>  Developement</span></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="yellow" className="bi bi-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        </svg>
                            <span>  Finance</span></li>
                    </ul>
                </div>
                <div className='crossbar1'>
                    <hr height="2px" color='#a19c9c' align="center" width="100%" />
                </div>
                <div className="info-team">
                    <h3 className='info-team-title'>TEAMS</h3>
                    <img className='info-team-img' src="https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg" alt="photo" /> <img className='info-team-img' src="https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg" alt="photo" /> <img className='info-team-img' src="https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg" alt="photo" />
                </div>
            </div>
        </div>
    );
}

export default LeftSidebar;
