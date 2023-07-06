import React from 'react'
import spinner from '../assets/svg/spinner.svg';

const Spinner = () => {
  return (
    <div className='bg-black opacity-50 flex justify-center items-center fixed z-50 left-0 right-0 bottom-0 top-0'>
      <div>
        <img src={spinner} alt="Loading.."/>
      </div>
    </div>
  )
}

export default Spinner
