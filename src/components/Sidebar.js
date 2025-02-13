import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  return (
    <div
      className={`p-5 shadow-lg w-64 bg-white fixed h-full overflow-y-auto border-r flex flex-col transition-all duration-300 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-64'
      }`}
    >
      <ul className='space-y-3'>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'><Link to='/'>🏠 Home</Link></li>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>▶ Shorts</li>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>📺 Subscriptions</li>
      </ul>

      <h1 className='font-bold pt-5 text-lg'>You</h1>
      <ul className='space-y-3 pt-2'>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>📜 History</li>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>🎵 Playlists</li>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>📹 Your videos</li>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>⏳ Watch Later</li>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>👍 Liked videos</li>
      </ul>

      <h1 className='font-bold pt-5 text-lg'>Explore</h1>
      <ul className='space-y-3 pt-2 pb-10'>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>🔥 Trending</li>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>🛍️ Shopping</li>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>🎵 Music</li>
        <li className='hover:bg-gray-100 p-2 rounded-md transition'>🎬 Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
