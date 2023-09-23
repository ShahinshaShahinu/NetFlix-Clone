import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
import './RowPost.css';
function RowPost(props) {

  const [Movie,setMovies]=useState([])
  const [urlId,seturlId]=useState('')

   useEffect(()=>{
    axios.get(props.url).then((Response)=>{
      console.log(Response.data);
      setMovies(Response.data.results)
    }).catch(()=>{
      alert('NeTWork Error')
    })
   },[])

   const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
    console.log(id);  
        
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((Response)=>{

   console.log(Response.data.results);
  

    if(Response.data.results.length!==0){
  
      seturlId(Response.data.results[0])
    }else{
      console.log('Array empty ;');
    }
    })
  }

  return (

    
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          Movie.map((obj)=>
            <img  onClick={()=>handleMovie(obj.id)}   className={props.isSmall ? 'smallPoster' :'poster'}src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />

          )
        }

      </div>
     {  urlId && <Youtube opts={opts} videoId={urlId.key}/> } 
    </div>
  )
}

export default RowPost
