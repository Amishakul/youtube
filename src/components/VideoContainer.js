import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector to access store
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard, {AdVideoCard} from './VideoCard';
import { Link, useSearchParams } from 'react-router-dom';

import { SEARCH_RESULT_API } from '../utils/constants';

const VideoContainer = ({ selectedCategory}) => {
    const [videos, setVideos] = useState([]);
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen); // Get sidebar state


    const [searchParams] = useSearchParams(); // 🔹 to get query param
  const query = searchParams.get("search_query"); // 🔹 e.g., iphone

    // useEffect(() => {
    //     getVideos();
    // }, []);

    useEffect(() => {
    if (query) {
      getSearchResults(query);
    } else if (selectedCategory && selectedCategory !== "All") {
      getCategoryVideos(selectedCategory);
    } else {
      getVideos();
    }
  }, [query, selectedCategory]);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
    };


    // 🔹 Fetch search results when a query exists
  const getSearchResults = async (searchQuery) => {
    try {
      const data = await fetch(SEARCH_RESULT_API + searchQuery);
      const json = await data.json();
      console.log("Search results:", json.items);
      setVideos(json.items);
    } catch (err) {
      console.error("Error fetching search results:", err);
    }
  };


  const getCategoryVideos = async (category) => {
    try {
      const res = await fetch(SEARCH_RESULT_API + category);
      const json = await res.json();
      setVideos(json.items || []);
    } catch (err) {
      console.error("Error fetching category videos:", err);
    }
  };

    return (
        <div
            className={`p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300 ${
                isMenuOpen ? 'ml-64' : 'ml-0 lg:grid-cols-5'
            }`}
        >
            {/* {videos[0] && <AdVideoCard info={videos[0]} />} */}

            {/* {videos.map((video) => (
                <Link key={video.id} to={'/watch?v=' + video.id}>
                    <VideoCard info={video} />
                </Link>
            ))} */}

        {videos &&
        videos.map((video) => (
          <Link
            key={video.id.videoId || video.id} // 🔹 search results use video.id.videoId
            to={`/watch?v=${video.id.videoId || video.id}`}
          >
            <VideoCard info={video} />
          </Link>
        ))}

        </div>
    );
};

export default VideoContainer;
