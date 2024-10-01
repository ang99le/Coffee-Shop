import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import cardsList from '../Cards';
import Cards from './Cards';

export default function DetailsPage() {
const location=useLocation();
const {card} =location.state;

  return (
    <div>
      <nav><Navbar/></nav>

      <main>

<section>
    <div className='flex mt-20 justify-start ml-24 gap-6'>
    <img className='w-[300px] h-[300px] rounded-3xl object-cover' src={card.image} alt='coffee'/>
    
    <div className='w-[500px]'>
    <h1 className='text-start text-6xl text-[#6F3F1D] font-bold break-words w-[200px]'>{card.title}</h1>
    <p className=' text-start text-justify text-[#6F3F1D] mt-4 word-break w-[270px]'>{card.description}</p>
    
    <div className='flex mt-7 gap-28'>
    <h1 className='text-[#D65A00] text-3xl font-bold'>{card.price}</h1>
    <button className='bg-[#D65A00] p-2 rounded-3xl text-white w-[90px] h-[40px] hover:bg-[#8E3C00]'>download</button>

    </div>
  
    </div>

</div>
</section>



<section className='ml-24 mt-24'>
<h1 className='text-[#6F3F1D] text-6xl font-bold break-words w-[300px] text-start mt-12'>You May Like</h1>
<div className='flex gap-5 mt-5'>
{cardsList.slice(0,3).map((MayLike,index)=>(
    <Cards key={index} title={MayLike.title} description={MayLike.description} image={MayLike.image} price={MayLike.price} />
))}

</div>


</section>

      </main>
    </div>
  )
}
