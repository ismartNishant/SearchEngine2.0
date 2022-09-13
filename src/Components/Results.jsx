import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ReactPlayer from 'react-player'

import { useResultContext } from '../contexts/ResultContextProvider'
import Loading from './Loading'

const Results = () => {
    const { results, isloading, getResults, searchTerm } = useResultContext();
    const location = useLocation(); //images //news //video

    useEffect(() => {
        if (searchTerm) {
            if (location.pathname === "/video") {
                getResults(`/search/q=${searchTerm} video`);
            } else {
                getResults(`${location.pathname}/q=${searchTerm}&num=40`)
            }
        }

    }, [searchTerm, location.pathname,])

    if (isloading) return <Loading />
    console.log(location.pathname);

    switch (location.pathname) {
        case "/search":
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm: px-56'>
                    {results?.map(({ link, title }, index) => (
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
        case "/image":
            return (
                <div className='flex flex-wrap justify-center items-center'>
                    {results?.map(({ image, link: { href, title } }, index) => (
                        <a className='sm:p-3 p-2' href={href} key={index} target="_blank" rel='noreferrer' >
                            <img src={image?.src} alt={title} loading="lazy" />
                            <p className='w-36 break-words text-sm mt-2'>
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            );
        case "/news":
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-56 items-center'>
                    {results?.map(({ links, id, source, title }) => (
                        <div className='md:w-2/5 w-full' key={id}>
                            <a href={links?.[0].href} target="_blank" rel='noreferrer'>
                                <p className='text-lg  dark:text-blue-300 text-blue-700 hover:underline'>
                                    {title}
                                </p>
                                <div className='hover:underline'>
                                    <a href={source?.href} target='_blank' rel='noreferrer'> </a>
                                    {source?.href}
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            );
        case "/video":
            return (
                <div className='flex flex-wrap'>
                     
                    {results.map((video, index) => (
                       
                        <div key={index} className="p-2">
                            <ReactPlayer url={video.additional_links?.[0].href}  controls width="335px" height="200px"/>
                        </div>
                    ))}

                </div>
            )
        default:
            return "ERROR";
    }
}

export default Results