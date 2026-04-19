import React, { useEffect, useRef, useState } from 'react'

// whenever my component re-renders for y, x also refreshes and value of x starts to increment from 0 again. Whenever the component re-renders, new memory space is created, all the variables are new. 

// Difference between normal js variable and state variable

const Demo2 = () => {

    let x = 0;
// const x = 10; -> will not change the value of x

    const ref = useRef(0);
    // console.log(ref); -> it will give an object with current value: 0;

    console.log("Rendering....")

    const [y, setY] = useState(0);

    const i = useRef(null); // use useref

    // let i = {
    //     current: null,
    // } // not using useref

    useEffect(() => {
        i.current = setInterval(() => {
            // console.log("Amisha Kulkarni", Math.random());
        }, 1000);

       // return() => clearInterval(i.current);
    }, []);


  return (
    <div className='m-4 p-2 bg-slate-50 border border-black h-96 w-96'>
      <div>
      <button className='bg-green-100 px-2 m-4 ' onClick={() => {
        x = x + 1;
        console.log("x=", x); // the value of x increases but it does not re-renders the page
      }}>Increase x</button>

        <span className='font-bold text-xl'>Let = {x}</span>
        
      </div>

      <div>
      <button className='bg-green-100 px-2 m-4 ' onClick={() => {
        setY(y + 1);
        
      }}>Increase y</button>

        <span className='font-bold text-xl'>State = {y}</span>
        
      </div>

      <div>
      <button className='bg-green-100 px-2 m-4 ' onClick={() => {
        ref.current = ref.current + 1;
        console.log("Ref: ", ref.current );
        
      }}>Increase ref</button>

        <span className='font-bold text-xl'>Ref = {ref.current}</span>
        
      </div>
      
      <button className='bg-red-900 p-4 m-4 text-white font-bold rounded-lg ' onClick={() => {clearInterval(i.current)}}>Stop Printing</button>
      
    </div>

    
  )
}

export default Demo2
