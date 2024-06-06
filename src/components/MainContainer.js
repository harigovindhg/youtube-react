import React from 'react'
import ButtonList from './ButtonList'
import VideosListContainer from './VideosListContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const isSideBarOpen = useSelector(store => store.app.isSideBarOpen);
    return (
        <div className={`flex flex-col transition-all ease-in-out duration-150 ${isSideBarOpen ? ' w-[87.5%]' : 'w-[98%]'}`}>
            <ButtonList />
            <VideosListContainer isSideBarOpen={isSideBarOpen} />
        </div>
    )
}

export default MainContainer