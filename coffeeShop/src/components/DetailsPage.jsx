import React from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import cardsList from '../Cards';
import Cards from './Cards';
import coffeebeans from '../assets/coffeebeans.webp';


export default function DetailsPage() {
const location=useLocation();
const {card} =location.state;

  return (
    <div>
      <nav><Navbar/></nav>

      <main>

<section>
    <div className='flex flex-col justify-center mt-10 lg:flex-row lg:mt-20 lg:justify-start lg:ml-24 gap-6'>
    <img className='w-full lg:w-[300px] lg:h-[300px] rounded-3xl object-cover' src={card.image} alt='coffee'/>
    
    <div className='lg:w-[500px]'>
    <h1 className='lg:text-start text-3xl lg:text-6xl text-[#6F3F1D] font-bold break-words w-[350px]'>{card.title}</h1>
    <p className='text-center lg:text-start text-[#6F3F1D] mt-7 word-break lg:w-[270px]'>{card.description}</p>
    
    <div className='flex justify-center lg:justify-start mt-8 lg:mt-14 gap-20 lg:gap-28'>
    <h1 className='text-[#D65A00] text-3xl font-bold'>{card.price}</h1>
    <button className='bg-[#D65A00] p-2 rounded-3xl text-white w-[90px] h-[40px] hover:bg-[#8E3C00]'>download</button>

    </div>
    <img src={coffeebeans} className='hidden lg:block -mt-80 ml-64 w-[550px] h-[580px] absolute z-20 animate-move-vertical' alt='wondering-cat'/>

    </div>


</div>

</section>



<section className='lg:ml-24 mt-24'>
<h1 className='text-[#6F3F1D] text-3xl lg:text-6xl font-bold break-words w-[250px] text-start mt-12'>You May Like</h1>
<div className='flex flex-wrap gap-5 mt-5 justify-center lg:-ml-9'>
{cardsList.slice(0,3).map((MayLike,index)=>(
    <Cards key={index} title={MayLike.title} description={MayLike.description} image={MayLike.image} price={MayLike.price} />
))}

</div>


</section>

      </main>
    </div>
  )
}
