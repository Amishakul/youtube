import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TheatersIcon from '@mui/icons-material/Theaters';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StorefrontIcon from '@mui/icons-material/Storefront';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`p-5 shadow-lg w-64 bg-white fixed h-full overflow-y-auto border-r flex flex-col transition-all duration-300 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-64'
      }`}
    >
      <ul className="space-y-3">
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <HomeIcon className="mr-3" /> <Link to="/">Home</Link>
        </li>
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <YouTubeIcon className="mr-3" /> Shorts
        </li>
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <SubscriptionsIcon className="mr-3" /> Subscriptions
        </li>
      </ul>

      <h1 className="font-bold pt-5 text-lg">You</h1>
      <ul className="space-y-3 pt-2">
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <HistoryIcon className="mr-3" /> History
        </li>
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <PlaylistPlayIcon className="mr-3" /> Playlists
        </li>
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <VideoLibraryIcon className="mr-3" /> Your videos
        </li>
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <WatchLaterIcon className="mr-3" /> Watch Later
        </li>
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <ThumbUpIcon className="mr-3" /> Liked videos
        </li>
      </ul>

      <h1 className="font-bold pt-5 text-lg">Explore</h1>
      <ul className="space-y-3 pt-2 pb-10">
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <WhatshotIcon className="mr-3" /> Trending
        </li>
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <StorefrontIcon className="mr-3" /> Shopping
        </li>
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <MusicNoteIcon className="mr-3" /> Music
        </li>
        <li className="hover:bg-gray-100 p-2 rounded-md transition flex items-center">
          <TheatersIcon className="mr-3" /> Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
