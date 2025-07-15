'use client'
// renamed this file to uppercase to fix the error

export default function Selector({ setMode, setSound, sound, setPicture } : { setMode: (str: string) => void, setSound: (bool: boolean) => void, sound: boolean, setPicture: (bool: boolean) => void, picture: boolean }) {


    const handleClick = (bool: boolean) => {
        setMode('cards-nouns')
        setPicture(bool)
    }

  return (
        <div className='flex flex-col justify-center relative'>
            <h1 className='text-5xl flex justify-center absolute top-60 self-center bold'>FLASHCARDS</h1>
            <div className='selections flex justify-center absolute self-center top-100'>
                <button className='my-btn' onClick={() => setMode('cards-letters')} aria-label='Show letter flashcards'>ABC</button>
                <button className='my-btn' onClick={() => setMode('cards-numbers')} aria-label='Show number flashcards'>123</button>
            </div>
            <div className='selections flex justify-center absolute self-center top-115'>
                <button className='my-btn' onClick={() => setMode('cards-shapes')} aria-label='Show shape flashcards'>⬤⬛🖤</button>
                <button className='my-btn' onClick={() => setMode('cards-colours')} aria-label='Show colour flashcards'>🔴🔵🟡</button>
            </div>
            <div className='selections flex justify-center absolute self-center top-130'>
                <button className='my-btn' onClick={() => handleClick(true)} aria-label='Show noun flashcards with pictures'>🍎🏀🐱</button>
                <button className='my-btn' onClick={() => handleClick(false)} aria-label='Show noun flashcards without pictures'>apple,ball</button>
            </div>
            <div className='instructions text-xs self-center absolute top-155 w-[200px]'>
                select a flashcard type. tap anywhere on the screen to get the next card. tap icon below to turn sound off/on
            </div>
            <div className='text-xs self-center absolute top-175 cursor-pointer' aria-label='Toggle sound'>
                { sound ? (<div onClick={() => setSound(false)}>🔈</div>) : (<div onClick={() => setSound(true)}>🔇 </div>) }
            </div>
            
            
       </div>
  );
}
