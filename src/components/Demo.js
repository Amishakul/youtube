import React, { useMemo, useState } from 'react';
import { findPrime } from '../utils/helper';

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Rendering....");

  // Heavy operation -> every time state changes, heavy operation will happen

  // const prime = findPrime(text); -> this will frezze the screen, no memoization of calculated value

  const prime = useMemo(() => findPrime(text), [text]);

  // const v = 10; // wanted to change the value of v i.e. v = 11 but i do not want to re-render -> useRef hook example

  // useMemo will memoize the result of this function, this function is calculating a prime no. Only the change the value stored by memoization technique if the text changes (i.e. value entered or number entered in the textbox/inputbox changes)

  // console.log("Calculate the prime no of: ", text)
    

  

  return (
    <div className={'m-4 p-4 w-96 h-96 border border-black' + (isDarkTheme && ' bg-gray-900 text-white')}>

      <div>
          <button className='m-10 p-2 bg-green-200' onClick={() => setIsDarkTheme(!isDarkTheme)}>Toggle</button>
      </div>
      <div>
        <input
          className='border border-black w-72 m-7 px-2 text-black'
          type='number'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className='m-7 px-20'>nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
