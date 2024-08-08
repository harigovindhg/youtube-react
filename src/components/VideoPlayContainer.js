import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../utils/slices/appSlice';
import { useSearchParams } from 'react-router-dom';
import { getRelativeDate } from '../utils/getRelativeDate';
import { getApproxViews } from '../utils/getApproxViews';
import thumbs from './assets/thumbs';
import { YOUTUBE_COMMENTS_API, YOUTUBE_SINGLE_VIDEO_DETAILS_API } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import commentsList from '../mock/commentList.json'
import LiveChat from './LiveChat';

const VideoPlayContainer = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [videoData, setVideoData] = useState({});
    const [videoComments, setVideoComments] = useState([]);
    const videoId = searchParams.get('v');
    useEffect(() => {
        dispatch(closeSideBar());
        fetchVideoDetails();
        fetchCommentList();
    }, []);

    const fetchVideoDetails = async () => {
        const data = await fetch(`${YOUTUBE_SINGLE_VIDEO_DETAILS_API}${videoId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`);
        const json = await data.json();
        // console.log(json);
        setVideoData(json?.items[0]);
    }
    const fetchCommentList = async () => {
        // const data = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?key=${process.env.REACT_APP_YOUTUBE_KEY}&textFormat=plainText&part=snippet&videoId=kffacxfA7G4&maxResults=50`);
        // const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`);
        const data = await fetch(`${YOUTUBE_COMMENTS_API}${videoId}&key=${process.env.REACT_APP_YOUTUBE_KEY}`);
        const json = await data.json();
        // console.log(json);
        setVideoComments(json?.items);
    }
    const { snippet, statistics } = videoData;
    const relativeDate = getRelativeDate(snippet?.publishedAt);
    const approxViews = getApproxViews(statistics?.viewCount);
    const approxLikes = getApproxViews(statistics?.likeCount);
    // const doc = new DOMParser().parseFromString(snippet?.description, "text/xml");
    // console.log(doc);
    return (
        <div className='flex flex-col mx-6 w-full'>
            <div className='flex w-full'>
                <iframe
                    width="1240"
                    height="698"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                <LiveChat />
            </div>
            <div className='mt-2 py-2 flex flex-row w-[69%]'>
                <div className='w-1/2'>
                    <h2 className='font-bold text-2xl'>
                        {snippet?.title}
                    </h2>
                    <p className='font-bold text-xl'>
                        {snippet?.channelTitle}
                    </p>
                    <div className='flex flex-row'>
                        <h4 className='text-lg'>
                            {`${approxViews} views • ${relativeDate}`}
                        </h4>
                    </div>
                </div>
                <div className='w-1/2 flex items-end justify-end'>
                    <div className=' flex flex-row items-center'>
                        <button className='p-2 rounded-full hover:bg-gray-200 transition-all ease-in duration-150'>
                            {thumbs()}
                        </button>
                        <p className='px-2'>{approxLikes}</p>
                        <button className='p-2 rotate-180 rounded-full hover:bg-gray-200 transition-all ease-in duration-150'>
                            {thumbs()}
                        </button>
                    </div>
                </div>
            </div>
            <hr className='w-[69%]' />
            <div className='w-[69%]'>
                <div>
                    <p className='font-bold text-lg mt-2'>Comments</p>
                    <CommentsContainer commentsList={videoComments} />
                </div>
            </div>
        </div>
    )
}

export default VideoPlayContainer