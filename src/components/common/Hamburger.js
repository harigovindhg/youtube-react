import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../../utils/slices/appSlice';

const Hamburger = () => {
    const dispatch = useDispatch();

    const toggleSideBarMenu = (event) => {
        if (event === 'click' || event.type === 'click') {
            dispatch(toggleSideBar());
        }
    }

    return (
        <div className='p-3 rounded-full hover:bg-slate-200 transition-all ease-in-out duration-200 cursor-pointer' onClick={(e) => toggleSideBarMenu(e)}>
            <svg viewBox="111.557 189.861 200 142.018" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <rect x="111.557" y="252.575" width="200" height="15" style={{ fill: 'rgb(0,0,0)' }} rx="8.295" ry="8.295" />
                <rect x="111.557" y="315.289" width="200" height="15" style={{ fill: 'rgb(0,0,0)' }} rx="8.295" ry="8.295" />
                <rect x="111.557" y="189.861" width="200" height="15" style={{ fill: 'rgb(0,0,0)' }} rx="8.295" ry="8.295" />
            </svg>
        </div>
    )
}

export default Hamburger