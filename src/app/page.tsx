'use client'


import { useState } from "react";
import Cards from './_components/cards';
import Selector from './_components/selector';

interface SelectorProps {
  size: number
}

export default function Home() {

 
  const [mode, setMode] = useState('selector')
 
  return (
    <div>
      <div className='content flex justify-center h-screen ' >
        
               {(() => {

        switch (mode) {
          case 'selector':

            return <Selector setMode={ setMode }/>
          
          case 'cards-numbers':

            return <Cards cardMode={ 'numbers' }/>
          
          case 'cards-letters':

            return <Cards cardMode={ 'letters' }/>
      
          default:
            return <Selector setMode={ setMode }/>
        }
      })()}

      </div>
      <div className='next'></div>
    </div>
  );
}
