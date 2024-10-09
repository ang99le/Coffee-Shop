import React from 'react'
import giphy from '../assets/giphy.gif';

const Loader = () => {
  return (
    <div>
   <img  className="mx-auto mt-40 w-[250px]" src={giphy} alt='loader'/>
    </div>
  )
}

export default Loader
