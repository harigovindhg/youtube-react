import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { pushToChatList } from '../utils/slices/chatSlice';
import store from '../utils/appStore';
import { generateRandomName } from '../utils/helper';

const LiveChat = () => {
    const dispatch = useDispatch();
    const chatData = useSelector(store => store.chat.chatList);
    const inputChatMessage = useRef(null);
    useEffect(() => {
        const apiPoller = setInterval(() => {
            fetchLatestMessageList();
        }, 500);

        return () => { clearInterval(apiPoller) };
    }, []);

    const fetchLatestMessageList = () => {
        dispatch(pushToChatList({
            name: generateRandomName(),
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.🤣🔥"
        }));
    }

    const handleSubmitChatMessage = () => {
        const messageValue = inputChatMessage?.current?.value;
        if (messageValue !== '') {
            dispatch(pushToChatList({
                name: 'Hari Govind',
                message: messageValue
            }));
            inputChatMessage.current.value = '';
        }
    }

    return (
        <div className='w-1/3 ml-2 flex flex-col border border-solid border-gray-500 rounded-md bg-gray-200 max-h-[698px] overflow-hidden'>
            <div className='w-full h-10 bg-gray-300 px-4 flex border-b border-b-gray-500 items-center justify-between'>
                <h2 className='font-bold text-lg'>Live Chat</h2>
                <span className='w-2 h-2 bg-red-600 rounded-full animate-pulse' />
            </div>
            <div id='chatMessagesContainer' className='px-4 pt-3 h-full overflow-auto flex flex-col-reverse'>
                {chatData?.map(chatMessage => {
                    return <ChatMessage name={chatMessage?.name} message={chatMessage?.message} />
                })}
            </div>
            <form className='w-full h-16 bg-gray-300 flex border-t border-t-gray-500 items-center justify-between' onSubmit={(e) => {
                e.preventDefault();
                handleSubmitChatMessage();
            }}>
                <input ref={inputChatMessage} className='w-5/6 p-2 h-full' placeholder='Type your message here...' />
                <button className='w-1/6 bg-gray-200 hover:bg-gray-300 h-full transition-colors duration-100 ease-in-out'>Submit</button>
            </form>
        </div>
    )
}

export default LiveChat