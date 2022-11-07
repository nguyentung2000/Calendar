import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Login from '../Page/Login/Login';
import Logined from './Logined';
import PrivateRouter from './PrivateRouter';
const CalendarRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PrivateRouter><Home /></PrivateRouter>} />
                <Route path='/Login' element={<Logined><Login /></Logined>} />
            </Routes>
        </BrowserRouter>
    );
}

export default CalendarRouter;
