// import React from 'react'

// const Button = ({name}) => {
//   return (
//     <div>
//       <button className='px-5 m-2 py-2 bg-gray-200 rounded-lg hover:bg-slate-300'>{name}</button>
//     </div>
//   )
// }

// export default Button

import React from 'react';

const Button = ({ name, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={'px-5 m-2 py-2 bg-gray-200 rounded-lg hover:bg-slate-300'}
      
    >
      {name}
    </button>
  );
};

export default Button;

