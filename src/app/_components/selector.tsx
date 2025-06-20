'use client'


import { useState } from "react";

export default function Selector({ setMode } : { setMode: any } ) {

  return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl flex justify-center absolute top-50 bold'>FLASHCARDS</h1>
            <div className='selections flex justify-evenly items-center mb-20'>
                <button className='border rounded-md py-2 w-20 mx-5' onClick={() => setMode('cards-letters')}>ABC</button>
                <button className='border rounded-md py-2 w-20 mx-5' onClick={() => setMode('cards-numbers')}>123</button>
            </div>
            <div className='instructions text-xs'>select a flashcard type. tap anywhere on the screen to get the next card</div>
            
       </div>
  );
}
