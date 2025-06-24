'use client'


import { useState } from "react";

export default function Selector({ setMode } : { setMode: any } ) {

  return (
        <div className='flex flex-col justify-center relative'>
            <h1 className='text-5xl flex justify-center absolute top-60 self-center bold'>FLASHCARDS</h1>
            <div className='selections flex justify-center absolute self-center top-100'>
                <button className='border rounded-md py-2 w-20 mx-5' onClick={() => setMode('cards-letters')}>ABC</button>
                <button className='border rounded-md py-2 w-20 mx-5' onClick={() => setMode('cards-numbers')}>123</button>
            </div>
            <div className='instructions text-xs self-center absolute top-120 w-[200px]'>select a flashcard type. tap anywhere on the screen to get the next card</div>
            
       </div>
  );
}
