import React from "react";
import Navbar from "../components/Navbar";
import cardList from "../Cards";
import Cards from "../components/Cards";
import Search from "../components/Search";
import { useState,useEffect } from "react";
import ScrollUp from "../components/ScrollUp";

export default function Home (){
const [search,setSearch]=useState("");

useEffect(()=>{
    const debounceTimer =setTimeout(()=>{
        console.log(`Searching For: ${search}`);
    },[500])
    return()=>{
        clearTimeout(debounceTimer);
    }
},[search])

const filteredCards = cardList.filter((card) => card.title.toLowerCase().includes(search.toLocaleLowerCase()))


    return(
        <div>
            <nav>
                <Navbar/>
            </nav>

            <main>
                <ScrollUp/>
                <section>
                <div className="mx-auto lg:w-[70rem] w-full overflow-hidden relative rounded-3xl mt-10">
                <div className="z-50 opacity-0 w-full lg:w-[70rem] overflow-hidden opacity-100 absolute from-[#4E1504BF] to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-40 text-white flex">
                    
                <div className="lg:flex">
                <p className="p-5 lg:p-14 space-y-6 md:text-4xl translate-y-0 pb-16 font-medium md:break-word">Your Everyday <span className="block text-start mt-1"> Coffee</span></p>
                <div className="absolute bottom-14 right-10 md:right-8  md:bottom-16 bg-white md:bg-w-[60px] rounded-full" >
                <svg width="50" height="50"  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5833 35.4167L35.4166 14.5833" stroke="#6F3F1D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5833 14.5833H35.4166V35.4167" stroke="#6F3F1D" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

</div>    

                 <div>

                 </div>

                    </div>
            
              </div>
              <img className="object-cover rounded-2xl w-[70rem] h-[450px]" src="https://s3-alpha-sig.figma.com/img/1841/8abf/1ce49d3e0b7e22ccb9cc70e256260e87?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5PdGKD7SZVVpxgZUelnprLkFiFRCNH5H2U8E5unKXb9gN4V4BbUDfcyaqP2xBPddfmLyddlwo8Rt7ZXl42R2KO09nKDRrEpQMtWc5appgwhfDZqy~PeQvyU63Ixj162nea07DFgGaSNBn35v9M6JhgFSU5llfWSVHMvxFkh2coiwwYQFAs~l4vBRMXTxXTnWYMggi~jINQs0whBCvBXk19Pn6q6T8EAnPx7yFPW4o75jHmfORb~mF25qXunZSZl5ybt2HJ1ORyVTe5oBPzmHg4HAnjkCDcf9CV0d9wHszhhwJy5IU3LB~3Y6kH8w9OfgHYUem2bmwHhHijmCW3YBg__" alt="coffee"/>

                </div>

                </section>

<section>
    <Search search={search} setSearch={setSearch} />
</section>

 <section className="flex flex-wrap gap-5 justify-center mt-5">
 {filteredCards.map((card, index) => (
<Cards key={index} title={card.title} description={card.description} image={card.image} price={card.price}/>
      ))}
             </section>

            </main>
      </div>
    )
} 
