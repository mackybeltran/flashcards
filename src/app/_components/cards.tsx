'use client'


import { useState } from "react";

export default function Cards({ cardMode, setMode } : { cardMode: string, setMode: any }) {

    

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const shapes = ['■', '▮', '▲', '◆', '●', '❤', '★', '⬮']
  const colours = ['red', 'yellow', 'orange', 'green', 'blue', 'purple', 'black', 'white', 'pink']
  const arraySelect = (cardMode: string) => {
        
        if (cardMode === 'numbers'){
            return numbers
        } if (cardMode === 'letters'){
            return letters
        } if (cardMode === 'shapes'){
            return shapes
         } if (cardMode === 'colours'){
            return colours
        } else {
            return numbers
        }
    }

  const nextElement = (array: string[]) => {
    // code to select a random element in the array with no repeats
    const filteredArray = array.filter((ele) => 
      ele !== display
   )

    return filteredArray[Math.floor(Math.random() * filteredArray.length)]

  }

  const [display, setDisplay] = useState(arraySelect(cardMode)[1])
//   const [mode, setMode] = useState(numbers)

  
  return (
        <div className='h-screen w-screen flex flex-col justify-center items-center relative' onClick={() => setDisplay(nextElement((arraySelect(cardMode))))}>
            { cardMode === 'colours' ? 
            (<div style={{backgroundColor: display}} className='h-screen w-screen'></div>) : 
            (<div className='text-[350px] self-center'>{display}</div>) }
            <button className='top-10 my-btn absolute' onClick={() => setMode('selector')}>BACK</button>
        </div>

  );
}
