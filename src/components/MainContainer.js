import React, {useState} from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")


  return (
    <div className=''>
      <ButtonList 
      
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      />
      <VideoContainer
      
       selectedCategory={selectedCategory}/>
    </div>
  )
}

export default MainContainer
