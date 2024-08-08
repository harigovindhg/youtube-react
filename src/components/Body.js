import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div className='flex top-28 relative'>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Body;