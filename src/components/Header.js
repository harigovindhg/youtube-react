import React, { useEffect, useState } from 'react';
import Hamburger from './common/Hamburger';
import { Link } from 'react-router-dom';
import { debouncer } from '../utils/debouncer';
import { YOUTUBE_SEARCH_SUGGEST_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import store from '../utils/appStore';
import { cacheResults } from '../utils/slices/searchSlice';

const Header = () => {
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [showSearchSuggestions, setShowSearchSuggestions] = useState('false');
    const dispatch = useDispatch();
    const searchSuggestionCache = useSelector(store => store.search);

    // Approach to debouncing
    // Approach 1 - Using classic JS
    // const debouncedSearch = debouncer(fetchSearchSuggestions, 250);

    // Approach 2 - Using useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            // check if search result for searchText is present in cache
            if (searchSuggestionCache[searchText]) {
                setSearchSuggestions(searchSuggestionCache[searchText]);
            } else {
                fetchSearchSuggestions();
            }
        }, 250);
        return () => {
            clearTimeout(timer);
        }
    }, [searchText]);

    const fetchSearchSuggestions = async () => {
        // console.log(e?.target?.value);
        const data = await fetch(`${YOUTUBE_SEARCH_SUGGEST_API}${searchText}`);
        const json = await data.json();
        // console.log(json[1]);
        const searchResultList = (json && json[1].length > 0) ? json[1] : [];
        setSearchSuggestions(searchResultList);
        // const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchText}&key=${process.env.REACT_APP_YOUTUBE_KEY}`)

        // cache to redux store
        dispatch(cacheResults({
            [searchText]: searchResultList
        }));
    }

    return (
        <div className='flex flex-col w-full fixed z-10'>
            <div className='flex py-5 px-4 items-center bg-white'>
                <div className='flex items-center w-[30%]'>
                    <Hamburger />
                    <a href={"/"}><img className='w-12 h-8 flex ml-3' alt='Youtube Home' src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png' /></a>
                </div>
                <div className='flex w-2/5'>
                    <input className='w-full h-10 rounded-l-full border-gray-400 border-solid border-2 border-r-[1px] pl-4' type="text" name="Search" placeholder='Search' id="" onKeyUp={(e) => setSearchText(e.target.value)} onFocus={() => setShowSearchSuggestions('true')} onBlur={() => setShowSearchSuggestions('false')} />
                    <button className='h-10 bg-gray-200 hover:bg-gray-300 transition-all ease-in-out duration-200 rounded-r-full border-gray-400 border-solid border-2 border-l-[1px] p-2 pr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 -0.24 28.423 28.423" id="_02_-_Search_Button" data-name="02 - Search Button">
                            <path id="Path_215" data-name="Path 215" d="M14.953,2.547A12.643,12.643,0,1,0,27.6,15.19,12.649,12.649,0,0,0,14.953,2.547Zm0,2A10.643,10.643,0,1,1,4.31,15.19,10.648,10.648,0,0,1,14.953,4.547Z" transform="translate(-2.31 -2.547)" fillRule="evenodd" />
                            <path id="Path_216" data-name="Path 216" d="M30.441,28.789l-6.276-6.276a1,1,0,1,0-1.414,1.414L29.027,30.2a1,1,0,1,0,1.414-1.414Z" transform="translate(-2.31 -2.547)" fillRule="evenodd" />
                        </svg>
                    </button>
                    {(showSearchSuggestions === 'true' && searchSuggestions.length > 0) &&
                        <div className='fixed top-[64px] w-[35%] py-3 bg-gray-100 rounded-md ml-5'>
                            {searchSuggestions.map(result => {
                                return (
                                    <div className='py-2 pl-5 hover:text-gray-300 hover:bg-gray-700 group transition-all ease-in-out duration-75'>
                                        <p className='flex flex-row'>
                                            <div className='pr-3'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='group-hover:fill-white fill-black' width="20px" height="20px" viewBox="0 -0.24 28.423 28.423" id="_02_-_Search_Button" data-name="02 - Search Button">
                                                    <path id="Path_215" data-name="Path 215" d="M14.953,2.547A12.643,12.643,0,1,0,27.6,15.19,12.649,12.649,0,0,0,14.953,2.547Zm0,2A10.643,10.643,0,1,1,4.31,15.19,10.648,10.648,0,0,1,14.953,4.547Z" transform="translate(-2.31 -2.547)" fillRule="evenodd" />
                                                    <path id="Path_216" data-name="Path 216" d="M30.441,28.789l-6.276-6.276a1,1,0,1,0-1.414,1.414L29.027,30.2a1,1,0,1,0,1.414-1.414Z" transform="translate(-2.31 -2.547)" fillRule="evenodd" />
                                                </svg>
                                            </div>
                                            {result}</p>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
                <div className='flex w-[30%] justify-end'>
                    <img className='w-10 h-10' alt='Welcome User' src='https://freesvg.org/img/abstract-user-flat-3.png' />
                </div>
            </div>
            <span className='w-full h-6 bg-gradient-to-b from-white'></span>
        </div>
    )
}

export default Header;