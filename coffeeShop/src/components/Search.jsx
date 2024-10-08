import React from 'react'

export default function Search({search,setSearch}) {


  return (
    <div>
        <div className='flex flex-col gap-2 lg:flex-row justify-between items-center mt-7 w-full'>
            <h1 className='lg:ml-16 text-[#6F3F1D] font-medium text-lg mt-2'>Products</h1>  
            <input placeholder='Search ...' className='lg:mr-16 bg-[#6F3F1D] opacity-20 rounded-3xl p-2 placeholder:opacity-200 text-black '  value={search} onChange={(e)=>setSearch(e.target.value)} />
            </div>
     
    </div>
  )
}
