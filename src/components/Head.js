import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  

  useEffect(() => {
    // api call
    

    // make an api call after every key press but if the difference between 2 api calls is < 200, decline the api call

    const timer = setTimeout(() => getSearchSuggestions(), 200); // the api call is not make right away it is made after 200ms

    return () => {
      clearTimeout(timer);
    }; // this function is return when the component is unmounted, refreshing i.e. keystroke "ip" is pressed before the previous keystroke timeout expires. 

  }, [searchQuery]) // everytime my searchquery changes make an api call, hence in dependency array write searchquery

  // key - "i" is pressed
  // - render the component
  // - useEffect(); is called
  // start timer => make api call after 200ms

  // key - "ip" is pressed
  // if i press "ip" before 200ms timer expries of the previous keystroke, it will destory/clear the previous keystroke component.(will call useEffect return method)
  // - re-render the component
  // useEffect() is called
  // start timer => make api call after 200ms (this timer is different than the above timer)

  // setTimeout(200) - make an API call after 200ms, if the next keystroke is pressed after 200ms.

  const getSearchSuggestions = async () => {
    console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  }


  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());

  };


  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg bg-white sticky top-0 z-50 bg-opacity-100'>
      <div className='flex col-span-1'>
        <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer'  alt='menu' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII='/>

        <a href='/'>

        <img className='h-8 mx-2' alt='youtube-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'/>
        </a>
      </div>
      

      <div className='col-span-10 scroll-px-10 pl-64'>
      <div>
        <input className=' px-5 w-1/2 border p-2 border-gray-400 rounded-l-full' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />

        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'> 🔍</button>
      </div>
      {showSuggestions && (
      <div className='fixed bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border border-gray-100'>

      <ul>
        {suggestions.map((s) => (
          <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>
        ))}
        
        
      </ul>

      </div>
      )}
      </div>

      <div className='col-span-1'>
        <img className='h-8' alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
      </div>
    </div>
  )
}

export default Head
