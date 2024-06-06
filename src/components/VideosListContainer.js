import React, { useEffect, useState } from 'react';
import { YOUTUBE_POPULAR_API } from '../utils/constants';
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';

const VideosListContainer = ({ isSideBarOpen }) => {
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
        fetchYTPopularVideos();
    }, []);

    const fetchYTPopularVideos = async () => {
        const data = await fetch(YOUTUBE_POPULAR_API);
        const json = await data.json();
        setVideoList(json?.items);
    }
    return (
        <div className='flex m-6 justify-evenly'>
            <div className='flex flex-row flex-wrap justify-between'>
                {videoList?.map(video => {
                    return <Link className={`${isSideBarOpen ? 'videoCardCompress' : 'videoCardFull'}`} key={video?.id} to={`/watch?v=${video.id}`}><VideoCard videoMetaData={video} /></Link>
                })}
            </div>
        </div>
    )
}

export default VideosListContainer