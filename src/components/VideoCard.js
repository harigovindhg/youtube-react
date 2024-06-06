import React from 'react';
import { getApproxViews } from '../utils/getApproxViews';
import { getRelativeDate } from '../utils/getRelativeDate';

const VideoCard = ({ videoMetaData }) => {
    const { snippet, statistics } = videoMetaData;
    const relativeDate = getRelativeDate(snippet?.publishedAt);
    const approxViews = getApproxViews(statistics?.viewCount);
    return (
        <div className={`p-2 m-2 transition-all ease-in-out duration-150 hover:bg-gray-300 rounded-2xl cursor-pointer flex flex-col`}>
            <img className='w-full h-full pb-1 rounded-lg' src={snippet?.thumbnails?.medium?.url} alt="" />
            <div className='flex flex-col justify-between'>
                <div className='flex flex-col'>
                    <p className='max-w-[320px] text-ellipsis font-bold'>{snippet?.title}</p>
                    <p>{snippet?.channelTitle}</p>
                </div>
                <p>{`${approxViews} views • ${relativeDate}`}</p>
            </div>
        </div>
    )
}

export default VideoCard