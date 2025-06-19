'use client'


import { useState } from "react";

export default function Home() {

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  
  const nextElement = (array: Array<string>) => {
  
    const filteredArray = array.filter((ele) => 
      ele !== display
   )

    return filteredArray[Math.floor(Math.random() * filteredArray.length)]

  }

  const [display, setDisplay] = useState('1')
  const [mode, setMode] = useState(numbers)
  return (
    <div>
      <div className='content flex justify-center items-center h-screen' >
        <div className='text-[280px]' onClick={() => setDisplay(nextElement(mode))}>{display}</div>
      </div>
      <div className='next'></div>
    </div>
  );
}
