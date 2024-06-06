import React from 'react'

const Button = ({ label }) => {
    return (
        <button className='p-2 px-5 snap-center bg-gray-200 rounded-md mr-3 hover:bg-gray-300 transition-colors ease-in-out duration-500'>{label}</button>
    )
}

export default Button