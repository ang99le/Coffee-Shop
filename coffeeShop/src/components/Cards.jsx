import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import FavBtn from './FavBtn';

export default function Cards(props) {
  const navigate = useNavigate();
  const [favCoffee, setFavCoffee] = useState([]);

  const handleOnClick = () => {
    navigate(`/DetailsPage`, { state: { card: props } });
  };

  useEffect(() => {
    const favCards = JSON.parse(localStorage.getItem('favCoffee')) || [];
    setFavCoffee(favCards);
  }, []);

  const handelFavorites = (Coffee) => {
    let Favorites = [...favCoffee];
    if (Favorites.includes(Coffee)) {
      Favorites = Favorites.filter(fav => fav !== Coffee);
    } else {
      Favorites.push(Coffee);
    }
    localStorage.setItem("favCoffee", JSON.stringify(Favorites));
    setFavCoffee(Favorites); 
  };

  return (
    <div>
      <div className='absolute bg-[#6F3F1D] opacity-20 w-[355px] p-3 rounded-3xl h-[420px] cursor-pointer hover:scale-105 hover:transition-transform hover:shadow-xl ease-out duration-300' onClick={handleOnClick} ></div>
      <div className='w-[355px] p-3 rounded-3xl h-[420px] z-50'>
        <img className='h-[200px] rounded-3xl object-cover w-full' src={props.image} alt='coffee type' />
        <h2 className='font-bold ml-3 text-2xl text-start mt-2 text-[#6F3F1D] break-words w-[150px]'> {props.title}</h2>
        <p className='text-start ml-3 text-justify text-[#6F3F1D]'>{props.description}</p>
        <div className='flex gap-28 mt-2'>
          <p className='font-bold text-2xl ml-3 text-start mt-2 text-[#6F3F1D]'>{props.price}</p>

          <div className='flex gap-2 ml-6 z-50 mt-2'>
            <Button />
            <FavBtn Coffee={props.title} favCoffee={favCoffee} Favorited={handelFavorites} />
          </div>
        </div>
      </div>
    </div>
  );
}
