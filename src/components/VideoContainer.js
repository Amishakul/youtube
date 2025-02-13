import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access store
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen); // Get sidebar state

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
    };

    return (
        <div
            className={`p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300 ${
                isMenuOpen ? 'ml-64' : 'ml-0 lg:grid-cols-5'
            }`}
        >
            {videos.map((video) => (
                <Link key={video.id} to={'/watch?v=' + video.id}>
                    <VideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
