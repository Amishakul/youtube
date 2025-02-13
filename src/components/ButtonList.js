import React from 'react'
import Button from './Button'

// const List = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "News", "Cooking", "Valentines"]

const ButtonList = () => {
  return (
    <div className='flex px-[30%]'>
      <Button name ="Gaming"/>
      <Button name ="Songs"/>
      <Button name ="Live"/>
      <Button name ="Soccer"/>
      <Button name ="Cricket"/>
      <Button name ="News"/>
      <Button name ="Cooking"/>
    </div>
  )
}

export default ButtonList
