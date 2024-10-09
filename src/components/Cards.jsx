import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Cards(props) {
  const navigate = useNavigate();
  const [favCoffee, setFavCoffee] = useState(false); // Default to unfavorite (outlined heart)

  const handleOnClick = () => {
    navigate(`/DetailsPage`, { state: { card: props } });
  };

  useEffect(() => {
    const favLikes = localStorage.getItem("favStatus");
    if (favLikes) {
      setFavCoffee(JSON.parse(favLikes));
    }
  }, []);

  const handleFavorites = () => {
    const newfavStatus = !favCoffee;
    setFavCoffee(newfavStatus);
    localStorage.setItem("favStatus", JSON.stringify(newfavStatus));
  };

  return (
    <div>
      <div
        className='absolute bg-[#6F3F1D] opacity-20 w-[355px] p-3 rounded-3xl h-[420px] cursor-pointer hover:scale-105 hover:transition-transform hover:shadow-xl ease-out duration-300'
        onClick={handleOnClick}
      ></div>
      <div className='w-[355px] p-3 rounded-3xl h-[420px] z-50'>
        <img
          className='h-[200px] rounded-3xl object-cover w-full'
          src={props.image}
          alt='coffee type'
        />
        <h2 className='font-bold ml-3 text-2xl text-start mt-2 text-[#6F3F1D] break-words w-[150px]'>
          {props.title}
        </h2>
        <p className='text-start ml-3 text-justify text-[#6F3F1D]'>{props.description}</p>
        <div className='flex gap-28 mt-2'>
          <p className='font-bold text-2xl ml-3 text-start mt-2 text-[#6F3F1D]'>{props.price}</p>
          <div className='flex gap-2 ml-6 z-50 mt-2'>
            <Button />
          
            <button onClick={handleFavorites}>
              {favCoffee ? (
                <svg className='w-[40px] -mt-2' width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.2" cx="28.5" cy="28.5" r="28.5" fill="#D65A00" />
                  <path d="M36.84 21.61C36.3292 21.099 35.7228 20.6936 35.0554 20.4171C34.3879 20.1405 33.6725 19.9982 32.95 19.9982C32.2275 19.9982 31.5121 20.1405 30.8446 20.4171C30.1772 20.6936 29.5708 21.099 29.06 21.61L28 22.67L26.94 21.61C25.9083 20.5783 24.509 19.9987 23.05 19.9987C21.591 19.9987 20.1917 20.5783 19.16 21.61C18.1283 22.6417 17.5487 24.041 17.5487 25.5C17.5487 26.959 18.1283 28.3583 19.16 29.39L20.22 30.45L28 38.23L35.78 30.45L36.84 29.39C37.351 28.8792 37.7563 28.2728 38.0329 27.6053C38.3095 26.9379 38.4518 26.2225 38.4518 25.5C38.4518 24.7775 38.3095 24.0621 38.0329 23.3946C37.7563 22.7272 37.351 22.1208 36.84 21.61Z" stroke="#D65A00" fill='#D65A00' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className='w-[40px] -mt-2 hover:bg-[#D65A00] hover:opacity-20 hover:rounded-full hover:w-[40px] hover:h-[40px] hover:fill-[#D65A00]' width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.2" cx="28.5" cy="28.5" r="28.5" fill="#D65A00" />
                  <path d="M36.84 21.61C36.3292 21.099 35.7228 20.6936 35.0554 20.4171C34.3879 20.1405 33.6725 19.9982 32.95 19.9982C32.2275 19.9982 31.5121 20.1405 30.8446 20.4171C30.1772 20.6936 29.5708 21.099 29.06 21.61L28 22.67L26.94 21.61C25.9083 20.5783 24.509 19.9987 23.05 19.9987C21.591 19.9987 20.1917 20.5783 19.16 21.61C18.1283 22.6417 17.5487 24.041 17.5487 25.5C17.5487 26.959 18.1283 28.3583 19.16 29.39L20.22 30.45L28 38.23L35.78 30.45L36.84 29.39C37.351 28.8792 37.7563 28.2728 38.0329 27.6053C38.3095 26.9379 38.4518 26.2225 38.4518 25.5C38.4518 24.7775 38.3095 24.0621 38.0329 23.3946C37.7563 22.7272 37.351 22.1208 36.84 21.61Z" stroke="#6F3F1D" opacity='0.5' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
