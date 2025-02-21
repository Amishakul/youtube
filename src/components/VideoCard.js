import React from 'react';

const VideoCard = ({ info = {} }) => {
    // Log to see the structure of 'info'
    console.log(info);

    const { snippet = {}, statistics = {} } = info;
    const { channelTitle = '', title = '', thumbnails = {} } = snippet;
    const { viewCount = '0' } = statistics;

    return (
        <div className='p-3 m-2 w-72 shadow-md rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl bg-white'>
            {thumbnails.medium && (
                <img className='rounded-lg w-full h-40 object-cover' alt='thumbnail' src={thumbnails.medium.url} />
            )}
            <div className='p-2'>
                <h2 className='font-bold text-sm truncate'>{title}</h2>
                <p className='text-gray-600 text-xs'>{channelTitle}</p>
                <p className='text-gray-500 text-xs'>{viewCount} Views</p>
            </div>
        </div>
    );
};

// higher order component

export const AdVideoCard = ({ info }) =>{
    return (
        <div className='p-1 m-1 border border-red-900'>
            <VideoCard info={info}/>
        </div>
    )
}

export default VideoCard;
