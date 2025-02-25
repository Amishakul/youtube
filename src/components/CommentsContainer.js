import React from 'react'

const commentsData = [
  {
    name: "JohnDoe98",
    text: "Wow, this tutorial was so helpful! I’ve been trying to figure this out for days, thanks for the clear explanation.",
    replies: [
      {
        name: "TechGuru123",
        text: "Glad it helped! If you need more tutorials, feel free to check out my channel.",
        replies: [
          {
            name: "JohnDoe98",
            text: "Definitely, I’ll check it out! Thanks again!",
            replies: [
              {
                name: "TechGuru123",
                text: "You're welcome! Don’t hesitate to ask if you need anything else!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sarah_Lee_89",
    text: "Can you do a video on [specific topic]? Would love to see more content on that!",
    replies: [
      {
        name: "CreativeVibes",
        text: "I second this! I’ve been looking for content on that subject for a while.",
        replies: [
          {
            name: "Sarah_Lee_89",
            text: "I hope they do it! It would be amazing to have a breakdown on that topic.",
            replies: [
              {
                name: "CreativeVibes",
                text: "Fingers crossed! I’d love to see it too.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "ChannelHost",
        text: "Thanks for the suggestion! I’m adding it to the list for future videos.",
        replies: [],
      },
    ],
  },
  {
    name: "EmilyDavis_Vids",
    text: "The editing in this video is next level 😱",
    replies: [
      {
        name: "FilmLover101",
        text: "I know right?! The transitions and effects are so smooth.",
        replies: [
          {
            name: "EmilyDavis_Vids",
            text: "I swear, I rewinded the intro three times just to see the effects! So cool.",
            replies: [],
          },
        ],
      },
      {
        name: "DesignBySam",
        text: "It’s crazy how much editing has evolved. I need to learn some of these tricks!",
        replies: [
          {
            name: "FilmLover101",
            text: "Same! I’ve been trying to master some of these effects in my own videos.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "TechMasterX",
    text: "Anyone else here after the latest update? I’m still trying to figure out the changes.",
    replies: [
      {
        name: "GamerGirl_2023",
        text: "Same here! Still getting used to the new features. Would love a guide on how to navigate them.",
        replies: [
          {
            name: "TechMasterX",
            text: "It’s a bit confusing, right? I’ll look out for a tutorial if someone posts it.",
            replies: [
              {
                name: "GamerGirl_2023",
                text: "Please let me know if you find one! I could use some help!",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "ChannelHost",
        text: "Thanks for the feedback! I’ll be putting together a guide soon on all the new changes.",
        replies: [],
      },
    ],
  },
  {
    name: "ChrisTheBuilder",
    text: "This is exactly what I needed today! You always know how to explain things so simply.",
    replies: [
      {
        name: "DesignBySam",
        text: "I couldn’t agree more! The way you break it down makes it so much easier to understand.",
        replies: [
          {
            name: "ChrisTheBuilder",
            text: "I think I’ll be able to start my own project now thanks to this video!",
            replies: [],
          },
        ],
      },
      {
        name: "ChannelHost",
        text: "Thank you so much! I’m glad the explanation helped. Keep up the great work on your projects!",
        replies: [],
      },
    ],
  },
  {
    name: "Olivia_Garcia21",
    text: "Can anyone recommend similar videos? I’m binge-watching this channel now!",
    replies: [
      {
        name: "JordanSaysHi",
        text: "You should check out their playlist, there’s a ton of similar content!",
        replies: [
          {
            name: "Olivia_Garcia21",
            text: "Thanks! I’m going to start watching it now. Looks like a lot of great videos.",
            replies: [],
          },
        ],
      },
      {
        name: "ChannelHost",
        text: "Glad you’re enjoying the content! Feel free to explore the playlist for more tutorials.",
        replies: [],
      },
    ],
  },
];



  
  const Comment = ({data}) => {
    const {name, text, replies} = data
    return <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-4'>
    <img className='w-12 h-12' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
    
    <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
    </div>

    </div>
    

  }

  const CommentsList = ({comments}) => {
    // Disclaimer: Don't use indexes as keys
    return comments.map((comment, index) => 
      <div key ={index}>
    <Comment data={comment}/>
    <div className='pl-5 border border-l-black ml-5'>
      <CommentsList comments={comment.replies}/>
    </div>
    </div>
    )
  };

const CommentsContainer = () => {
  return (
    <div className=' p-2 px-20 py-6'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
