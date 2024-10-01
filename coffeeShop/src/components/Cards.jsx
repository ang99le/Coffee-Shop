import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cards(props) {
const navigate=useNavigate();

const handleOnClick= () => {
navigate(`/DetailsPage`,{state:{card:props}})
}



  return (
    <div onClick={handleOnClick}>
    
        <div className='absolute bg-[#6F3F1D] opacity-20 w-[355px] p-3 rounded-3xl h-[420px]'></div>
        <div className=' w-[355px] p-3 rounded-3xl h-[420px] z-50'>
       <img className='h-[200px] rounded-3xl object-cover w-full' src={props.image} alt='coffee type'/>
        <h2 className='font-bold ml-3 text-2xl text-start mt-2 text-[#6F3F1D] break-words w-[150px]'> {props.title}</h2>
        <p className='text-start ml-3 text-justify text-[#6F3F1D]'>{props.description}</p>
      <div className='flex gap-28 mt-2'>
      <p className='font-bold text-2xl ml-3 text-start mt-2 text-[#6F3F1D]'>{props.price}</p>
     
      <div className='flex gap-2 ml-6 z-50 mt-2'>
      <a href="https://www.figma.com/design/wtttfRaChShXjfXY9m7RHY/Coffee-Maker-V2?node-id=21-356&t=fSEa54Oq8kH0hoy3-0" download="figma">

      <button className='bg-[#D65A00] p-2 rounded-3xl text-white w-[90px] h-[40px] hover:bg-[#8E3C00]'>download</button>
      </a>
      <button><svg className='w-[40px] hover:opacity-70 -mt-2' width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.2" cx="28.5" cy="28.5" r="28.5" fill="#6F3F1D"/>
<path d="M36.84 21.61C36.3292 21.099 35.7228 20.6936 35.0554 20.4171C34.3879 20.1405 33.6725 19.9982 32.95 19.9982C32.2275 19.9982 31.5121 20.1405 30.8446 20.4171C30.1772 20.6936 29.5708 21.099 29.06 21.61L28 22.67L26.94 21.61C25.9083 20.5783 24.509 19.9987 23.05 19.9987C21.591 19.9987 20.1917 20.5783 19.16 21.61C18.1283 22.6417 17.5487 24.041 17.5487 25.5C17.5487 26.959 18.1283 28.3583 19.16 29.39L20.22 30.45L28 38.23L35.78 30.45L36.84 29.39C37.351 28.8792 37.7563 28.2728 38.0329 27.6053C38.3095 26.9379 38.4518 26.2225 38.4518 25.5C38.4518 24.7775 38.3095 24.0621 38.0329 23.3946C37.7563 22.7272 37.351 22.1208 36.84 21.61Z" stroke="#6F3F1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
      </div>
    
      </div>
     
       </div>
       
        
       
    </div>
  )
}
