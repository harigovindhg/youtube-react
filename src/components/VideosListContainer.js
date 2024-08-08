import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { YOUTUBE_POPULAR_API } from '../utils/constants';
import VideoCard, { HigherOrderVideoCard } from './VideoCard';

const VideosListContainer = ({ isSideBarOpen }) => {
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        fetchYTPopularVideos();
        window.addEventListener('scrollend', handleFetchNextData)
    }, []);

    const handleFetchNextData = (e) => {
        const currPageHeight = document.getElementsByClassName('videoListContainer')[0].clientHeight;
        console.log(currPageHeight);
    }

    const fetchYTPopularVideos = async () => {
        const data = await fetch(YOUTUBE_POPULAR_API);
        const json = await data.json();
        setVideoList(json?.items);
    }
    return (
        <div className='flex m-6 justify-evenly videoListContainer'>
            <div className='flex flex-row flex-wrap justify-between'>
                {videoList[0] && <Link className={`${isSideBarOpen ? 'videoCardCompress' : 'videoCardFull'}`} key={videoList[0]?.id} to={`/watch?v=${videoList[0].id}`}><HigherOrderVideoCard videoMetaData={videoList[0]} /></Link>}
                {videoList?.map((video, index) => {
                    while (index !== 0) {
                        return <Link className={`${isSideBarOpen ? 'videoCardCompress' : 'videoCardFull'}`} key={video?.id} to={`/watch?v=${video.id}`}><VideoCard videoMetaData={video} /></Link>
                    }
                    return null;
                })}
            </div>
        </div >
    )
}

export default VideosListContainer