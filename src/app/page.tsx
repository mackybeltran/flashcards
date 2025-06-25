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
    <div className='relative'>
      <div className='content flex justify-center h-screen ' >
        
               {(() => {

        switch (mode) {
          case 'selector':

            return <Selector setMode={ setMode }/>
          
          case 'cards-numbers':

            return <Cards cardMode={ 'numbers' } setMode={ setMode }/>
          
          case 'cards-letters':

            return <Cards cardMode={ 'letters' } setMode={ setMode }/>

          case 'cards-shapes':

            return <Cards cardMode={ 'shapes' } setMode={ setMode }/> 
            
          case 'cards-colours':

            return <Cards cardMode={ 'colours' } setMode={ setMode }/> 
      
          default:
            return <Selector setMode={ setMode }/>
        }
      })()}

      </div>
    </div>
  );
}
