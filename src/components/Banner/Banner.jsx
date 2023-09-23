import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import './Banner.css';


function Banner() {

  const [Movie,setMovie]=useState()
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then ((Response)=>{
  console.log(Response.data.results[0]);
  
  const movies=Response.data.results
   const random= Math.floor(Math.random() * movies.length);
  const Select=movies[random];
  setMovie(Select)
  
 })
  }, [])
  // component mount only run , using empty array, mount time working 
  return (
    <div 
    style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path:""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='titles'>{Movie ? Movie.title:''}</h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>

        </div>
        <h1 className='discription'>{Movie ? Movie.overview:""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
