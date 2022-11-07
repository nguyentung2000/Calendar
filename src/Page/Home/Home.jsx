import React from 'react';
import LeftSidebar from '../../components/leftSidebar/LeftSidebar';
import RightSidebar from '../../components/rightSidebar/RightSidebar';
import "./home.css"
const Home = () => {
    return (
        <div className='home'>
            <LeftSidebar />
            <RightSidebar />
        </div>
    );
}

export default Home;
