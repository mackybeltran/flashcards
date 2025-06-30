'use client'


export default function Selector({ setMode, setSound, sound } : { setMode: (str: string) => void, setSound: (bool: boolean) => void, sound: boolean }) {

  return (
        <div className='flex flex-col justify-center relative'>
            <h1 className='text-5xl flex justify-center absolute top-60 self-center bold'>FLASHCARDS</h1>
            <div className='selections flex justify-center absolute self-center top-100'>
                <button className='my-btn' onClick={() => setMode('cards-letters')}>ABC</button>
                <button className='my-btn' onClick={() => setMode('cards-numbers')}>123</button>
            </div>
            <div className='selections flex justify-center absolute self-center top-115'>
                <button className='my-btn' onClick={() => setMode('cards-shapes')}>⬤⬛🖤</button>
                <button className='my-btn' onClick={() => setMode('cards-colours')}>🔴🔵🟡</button>
            </div>
            <div className='instructions text-xs self-center absolute top-140 w-[200px]'>
                select a flashcard type. tap anywhere on the screen to get the next card. tap icon below to turn sound off/on
            </div>
            <div className='text-xs self-center absolute top-160 cursor-pointer'>
                { sound ? (<div onClick={() => setSound(false)}>🔈</div>) : (<div onClick={() => setSound(true)}>🔇</div>) }
            </div>
            
            
       </div>
  );
}
