import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex w-full items-center py-4'>
            <img className='rounded-full mr-2 w-[6%]' src="https://yt3.ggpht.com/ytc/AIdro_lE-2v4pt1Am5Vt4Pedf4xjFjaVCExlg_cJVl7OY2xcwvV1BhXRzUSHIHLwFa5dONFuTw=s48-c-k-c0x00ffffff-no-rj" alt="" />
            <h2 className='text-neutral-600 pr-2'>{name}</h2>
            <p className='font-bold'>{message}</p>
        </div>
    )
}

export default ChatMessage