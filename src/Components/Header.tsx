import { useState } from 'react'
import Icon from '../Assets/Icon.ico'
export function Header(){

  const [display, setDisplay] = useState('0px')

  function handleDisplay() {
    if (display == '300px') {
      setDisplay('0px')
    } else if (display == '0px') {
      setDisplay('300px')
    } else {
      console.log('[ERROR] handleDisplay is not working [ERROR]')
    }
  }

  return(
    <>
    
      <header className="flex justify-between pl-5 pr-5 h-[50px] bg-red-600 ">
        <img src={Icon} alt="Icon-Logo" className='p-[5px]'/>

        <span>Isaac</span>

        <button
        onClick={handleDisplay}
        className='
          w-[35px] h-[25px] flex
          flex-col justify-between
          mt-auto mb-auto hover:shadow '
        >
          <div className='w-full h-[4px] rounded-full bg-white'/>
          <div className='w-full h-[4px] rounded-full bg-white'/>
          <div className='w-full h-[4px] rounded-full bg-white'/>
        </button>

      </header>

      <div
       style={{ width: `${display}` }}
       className='
        flex ml-auto h-[100vh]
        bg-slate-500
      '>

      </div>

    </>

  )
}