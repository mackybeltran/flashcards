'use client'


import { useState } from "react";

export default function Cards({ cardMode } : { cardMode: string }) {

    

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  
  const arraySelect = (cardMode: string) => {
        
        if (cardMode === 'numbers'){
            return numbers
        } if (cardMode === 'letters'){
            return letters
        }
        else {
            return []
        }
    }

  const nextElement = (array: string[]) => {
  
    const filteredArray = array.filter((ele) => 
      ele !== display
   )

    return filteredArray[Math.floor(Math.random() * filteredArray.length)]

  }

  const [display, setDisplay] = useState(arraySelect(cardMode)[1])
//   const [mode, setMode] = useState(numbers)
  return (

        <div onClick={() => setDisplay(nextElement((arraySelect(cardMode))))}>{display}</div>
  );
}
