import React from 'react'
import { useEffect,useState } from 'react';
export default function ScrollUp() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > window.innerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    
  return (
    <div className="fixed bottom-4 right-4 z-50">
        {isVisible && (
            <button
                onClick={scrollToTop}
                className="rounded-full bg-white border-[#D65A00] border-2 p-1 hover:bg-[#8E3C00] w-[50px] h-[50px]">
<svg fill="#D65A00" height="27px" width="39px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve" stroke="#D65A00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M480.086,490L245,339.229L9.914,490L245,0L480.086,490z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>

</button>
        )}
    </div>

  )
}
