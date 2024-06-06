import React, { useState } from 'react'
import Button from './common/Button'

const ButtonList = () => {
    const [scrollLeft, setScrollLeft] = useState('rightStart');
    const list = ['All', 'Music', 'Sports', 'Gaming', 'Live', 'Shorts', 'Subscribed', 'India', 'Cooking', 'Beauty', 'Music', 'Sports', 'Gaming', 'Live', 'Shorts', 'Subscribed', 'India', 'Cooking', 'Beauty', 'Music', 'Sports', 'Gaming', 'Live', 'Shorts', 'Subscribed', 'India', 'Cooking', 'Beauty']
    const handleScroll = (direction) => {
        const collection = document.querySelector('#collection');
        if (direction === 'left') {
            collection.scrollRight += 300;
            collection.scrollLeft -= 300;
        }
        if (direction === 'right') {
            collection.scrollLeft += 300;
            collection.scrollRight -= 300;
        }

    }
    return (
        <div className='flex flex-row align-middle'>
            <div className='flex bg-gradient-to-r mx-2 justify-center from-white'>
                <button className='px-3 hover:bg-gray-200 rounded-full' onClick={() => handleScroll('left')}>{`◀`}</button>
            </div>
            <div id='collection' className='flex flex-row overflow-x-hidden snap-x snap-mandatory scroll-smooth'>
                {
                    list.map((label, index) => {
                        return <Button key={index} label={label} />
                    })
                }
            </div>
            <div className='flex bg-gradient-to-l mx-2 justify-center from-white'>
                <button className='px-3 hover:bg-gray-200 rounded-full' onClick={() => handleScroll('right')}>{`▶`}</button>
            </div>
        </div>
    )
}

export default ButtonList