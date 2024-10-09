import React from "react";
import { Link } from "react-router-dom";

export default function Navbar (){
    return(
        <div className="grid justify-center lg:grid-cols-6 gap-6 lg:ml-24 items-center">
            <div className="lg:col-span-4 ... "> 
            <svg width="211" height="47" viewBox="0 0 211 47" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M135.811 40.5944C135.811 21.4885 120.323 6.00003 101.217 6.00003C82.1109 6.00003 66.6225 21.4885 66.6225 40.5944" stroke="#D65A00" strokeWidth="12" strokeLinecap="round" />
  <path d="M60.3626 5.99999L23.1324 5.99999C13.6705 5.99999 6 13.6705 6 23.1324C6 32.5944 13.6705 40.2649 23.1325 40.2649L45.5364 40.2649" stroke="#D65A00" strokeWidth="12" strokeLinecap="round" />
  <path d="M205 40.5944C205 21.4885 189.512 6.00003 170.406 6.00003C151.3 6.00003 135.811 21.4885 135.811 40.5944" stroke="#D65A00" strokeWidth="12" strokeLinecap="round" />
</svg>


            </div>
            <ul className="flex gap-8 text-[#6F3F1D] font-bold">
                <li className="hover:underline "><Link to="/Home"> Store</Link></li>
                <li  className="hover:underline "><Link to="/Favorite">Favorite</Link></li>
                <li  className="hover:underline "><Link to="/Blog"> Blog</Link></li>
                <li  className="hover:underline "><Link to="/About">About</Link></li>
            </ul>
        </div>
    )
} 