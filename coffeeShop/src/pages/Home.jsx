import React from "react";
import Navbar from "../components/Navbar";
import cardList from "../Cards";
import Cards from "../components/Cards";
export default function Home (){
    return(
        <div>
            <nav>
                <Navbar/>
            </nav>

            <main>
                <section>
                <div className="mx-auto overflow-hidden w-[70rem] relative rounded-3xl mt-10">
                <div className="z-50 opacity-0 opacity-100 absolute from-[#4E1504BF]  to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-40 text-white flex">
                    
                <div className="flex">
                <p className="p-14 space-y-6 text-4xl translate-y-0 pb-16 font-medium break-word">Your Everyday <span className="block text-start mt-1"> Coffee</span></p>
                
                <div className="absolute right-8 bottom-16 bg-white bg-w-[60px] rounded-full" >
                <svg width="50" height="50"  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5833 35.4167L35.4166 14.5833" stroke="#6F3F1D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5833 14.5833H35.4166V35.4167" stroke="#6F3F1D" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>    

                 <div>

                 </div>

                    </div>
            
              </div>
              <img className="object-cover rounded-2xl w-[70rem] h-[450px]" src="https://s3-alpha-sig.figma.com/img/1841/8abf/1ce49d3e0b7e22ccb9cc70e256260e87?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5PdGKD7SZVVpxgZUelnprLkFiFRCNH5H2U8E5unKXb9gN4V4BbUDfcyaqP2xBPddfmLyddlwo8Rt7ZXl42R2KO09nKDRrEpQMtWc5appgwhfDZqy~PeQvyU63Ixj162nea07DFgGaSNBn35v9M6JhgFSU5llfWSVHMvxFkh2coiwwYQFAs~l4vBRMXTxXTnWYMggi~jINQs0whBCvBXk19Pn6q6T8EAnPx7yFPW4o75jHmfORb~mF25qXunZSZl5ybt2HJ1ORyVTe5oBPzmHg4HAnjkCDcf9CV0d9wHszhhwJy5IU3LB~3Y6kH8w9OfgHYUem2bmwHhHijmCW3YBg__" alt="coffee"/>

                </div>

                </section>
             <section className="flex flex-wrap gap-5 justify-center mt-5">
             {cardList.map((card, index) => (
             <Cards key={index} title={card.title} description={card.description} image={card.image} price={card.price}/>
      ))}
             </section>

            </main>
      </div>
    )
} 
