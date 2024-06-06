import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isSideBarOpen = useSelector(store => store.app.isSideBarOpen);
    return (
        <div className={`flex flex-col px-4 border-r-gray-200 border-solid border-r-2 transition-all ease-in-out duration-250 ${isSideBarOpen ? 'left-0 w-[12.5%] opacity-100' : 'left-[-400px] w-0 opacity-0'}`}>
            {isSideBarOpen &&
                <>
                    <ul className='pb-2 w-full'>
                        <Link to={'/'}><li className='w-full p-2 hover:bg-gray-200 rounded-md'>Home</li></Link>
                        <li className='w-full p-2 hover:bg-gray-200 rounded-md'>Shorts</li>
                        <li className='w-full p-2 hover:bg-gray-200 rounded-md'>Subscriptions</li>
                    </ul>
                    <hr />
                    <h2 className='pt-2 pl-2 font-bold'>{'You >'}</h2>
                    <ul className='pb-2 w-full'>
                        <li className='w-full p-2 hover:bg-gray-200 rounded-md'>Your Channel</li>
                        <li className='w-full p-2 hover:bg-gray-200 rounded-md'>History</li>
                        <li className='w-full p-2 hover:bg-gray-200 rounded-md'>Playlists</li>
                        <li className='w-full p-2 hover:bg-gray-200 rounded-md'>Watch Later</li>
                    </ul>
                </>
            }
        </div>
    )
}

export default Sidebar