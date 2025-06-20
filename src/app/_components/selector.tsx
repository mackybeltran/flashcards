'use client'


import { useState } from "react";

export default function Selector({ setMode } : { setMode: any } ) {

  return (
        <div>
            <div className='text-6xl'>FLASHCARDS</div>
            <div className='selections flex justify-center items-center'>
                <div onClick={() => setMode('cards-letters')}>ABC</div>
                <div onClick={() => setMode('cards-numbers')}>123</div>
            </div>
            <div className='instructions'>select a flashcard type. tap anywhere on the screen to get the next card</div>
            
       </div>
  );
}
