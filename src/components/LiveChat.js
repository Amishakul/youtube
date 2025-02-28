import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import { useState } from 'react';

const LiveChat = () => {

  const [LiveMessage, setLiveMessage] = useState();

  const ChatMessages = useSelector((store) => store.chat.messages);

  const dispatch = useDispatch();
    useEffect(() => {
        const i = setInterval(() => {
            // Api polling
            console.log("API Polling");

            dispatch(addMessage({
              name: generateRandomName(),
              message: makeRandomMessage(20) + " 🚀 "
            }))
        }, 1500);

        return () => clearInterval(i);
    }, []);


  return (
    <>
    <div className='ml-4 w-full h-[500px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
    <div>
      {ChatMessages.map((c, i) => (
        <ChatMessage key={i}
        name={c.name}
        message={c.message}
      
      />))}
      </div>
    </div>
    <form
        className='w-full p-4 border-2 border-gray-300 rounded-lg flex items-center space-x-2 mt-4 ml-4' // Removed ml-2, added mt-4 for spacing
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On Form Submit", LiveMessage);
          dispatch(addMessage({
            name: "amisha kulkarni",
            message: LiveMessage,
          }));
          setLiveMessage("");
        }}
      >
        <input
          className='px-4 py-2 w-full max-w-md border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800'
          type='text'
          value={LiveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300'
        >
          Send
        </button>
      </form>

    </>
  )
}

export default LiveChat
