import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
    const { results, isloading, getResults, searchTerm } = useResultContext();
    const location = useLocation(); //images //news //videos

    useEffect(() => {
        getResults('/search/q=JavaScript Mastery&num=40')
    }, [])

    if (isloading) return <Loading />
    console.log(location.pathname);

    switch (location.pathname) {
        case "/search":
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm: px-56'>
                    {results?.results?.map(({ link, title }, index) => (
                        <div className='md:w-2/5 w-full' key={index}>
                            <a href={link} target="_blank" rel='noreferrer'>
                                <p className='text-sm'>
                                    {link.length > 30 ? link.substring(0, 30) : link}
                                </p>
                                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                     {title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case "/images":
            return "SEARCH";
        case "/news":
            return "SEARCH";
        case "/videos":
            return "SEARCH";
        default:
            return "ERROR";
    }
}

export default Results