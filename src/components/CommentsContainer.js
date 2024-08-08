import React from 'react';
import thumbs from './assets/thumbs';
import { getRelativeDate } from '../utils/getRelativeDate';
import { getApproxViews } from '../utils/getApproxViews';

const CommentsContainer = ({ commentsList }) => {
    const Comment = ({ snippet }) => {
        return <div className='w-full px-2 pt-2'>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center'>
                    <div className='w-[2.5%] hidden xl:block'>
                        <img className='w-full h-full rounded-full mr-2' src={snippet?.authorProfileImageUrl} alt={`${snippet?.authorDisplayName}'s Profile`} />
                    </div>
                    <div className='flex flex-col xl:ml-3 w-[96%]'>
                        <div className='flex flex-row items-center'>
                            <a className='no-underline text-black' href={snippet?.authorChannelUrl}>
                                <p className='text-md font-bold'>{`${snippet?.authorDisplayName} • ${getRelativeDate(snippet?.publishedAt)}`}</p>
                            </a>
                        </div>
                        <p className='text-md'>
                            {snippet?.textOriginal}
                        </p>
                    </div>
                </div>
                <div className='mb-1 xl:ml-[2.5%] flex flex-row items-center'>
                    <button className='p-2 rounded-full hover:bg-gray-200 transition-all ease-in duration-150'>
                        {thumbs()}
                    </button>
                    <p className='mx-2'>
                        {getApproxViews(snippet?.likeCount)}
                    </p>
                    <button className='p-2 rotate-180 rounded-full hover:bg-gray-200 transition-all ease-in duration-150'>
                        {thumbs()}
                    </button>
                </div>
            </div>
            <hr />
        </div>
    }
    const CommentsList = ({ commentsList }) => {
        return commentsList?.map((comment, index) => {
            const commentDef = comment?.snippet?.topLevelComment?.snippet ? comment?.snippet?.topLevelComment?.snippet : comment?.snippet;
            return (<div key={`${comment?.id}_${index}`}>
                <Comment snippet={commentDef} />
                {comment?.replies?.comments &&
                    <div className='ml-[2.5%] pl-[1%] border-2 border-t-0 border-r-0 border-b-0 border-l-gray-400'>
                        <CommentsList commentsList={comment?.replies?.comments} />
                    </div>
                }
            </div>)
        })
    }

    return (
        <CommentsList commentsList={commentsList} />
    );
}

export default CommentsContainer