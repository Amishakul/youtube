import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
    useEffect(() => {
        const i = setInterval(() => {
            // Api polling
            console.log("API Polling");
        }, 2000);

        return () => clearInterval(i);
    }, []);


  return (
    <div className='ml-4 w-full h-[500px] p-2 border border-black bg-slate-100 rounded-lg'>
      <ChatMessage name="Amisha Kulkarni" message="This is namaste react live chat! 🙏"/>
      <ChatMessage name="Amisha Kulkarni" message="This is namaste react live chat! 🙏"/>
      <ChatMessage name="Amisha Kulkarni" message="This is namaste react live chat! 🙏"/>
      <ChatMessage name="Amisha Kulkarni" message="This is namaste react live chat! 🙏"/>
      <ChatMessage name="Amisha Kulkarni" message="This is namaste react live chat! 🙏"/>
    </div>
  )
}

export default LiveChat
