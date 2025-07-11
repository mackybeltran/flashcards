'use client'


import { useState } from "react";
import Cards from './_components/Cards';
import Selector from './_components/Selector';



export default function Home() {

 
  const [mode, setMode] = useState('selector')
  const [sound, setSound] = useState(true)
 
  return (
    
    <div className='relative'>
      <div className='content flex justify-center h-screen ' >
        
               {(() => {

        switch (mode) {
          case 'selector':

            return <Selector setMode={ setMode } setSound={ setSound } sound = { sound }/>
          
          case 'cards-numbers':

            return <Cards cardMode={ 'numbers' } setMode={ setMode } sound={ sound }/>
          
          case 'cards-letters':

            return <Cards cardMode={ 'letters' } setMode={ setMode } sound={ sound }/>

          case 'cards-shapes':

            return <Cards cardMode={ 'shapes' } setMode={ setMode } sound={ sound }/> 
            
          case 'cards-colours':

            return <Cards cardMode={ 'colours' } setMode={ setMode }sound={ sound }/> 
      
          default:
            return <Selector setMode={ setMode } setSound={ setSound } sound = { sound }/>
        }
      })()}

      </div>
    </div>
  );
}
