// import React from 'react'
// import Button from './Button'

// // const List = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "News", "Cooking", "Valentines"]

// const ButtonList = () => {
//   return (
//     <div className='flex px-96'>
//       <Button name ="Gaming"/>
//       <Button name ="Songs"/>
//       <Button name ="Live"/>
//       <Button name ="Soccer"/>
//       <Button name ="Cricket"/>
//       <Button name ="News"/>
//       <Button name ="Cooking"/>
//     </div>
//   )
// }

// export default ButtonList


import React from 'react';
import Button from './Button';

const categories = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "News",
  "Cooking",
];

const ButtonList = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex px-96">
      {categories.map((name) => (
        <Button
          key={name}
          name={name}
          isActive={selectedCategory === name}
          onClick={() => setSelectedCategory(name)}
        />
      ))}
    </div>
  );
};

export default ButtonList;
