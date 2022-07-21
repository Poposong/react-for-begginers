import React, { useEffect, useState } from 'react'
import Movie from '../components/Movie';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    // 방법1) async wait 사용
    const getMovies = async() => {
      const response  = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
      const json = await response.json();
      setMovies(json.data.movies);
      setLoading(false);
    };
    useEffect(
      () => {getMovies()}, []
    );
    console.log(movies);
   
    // map함수( value : any, index : number); 를 가진다.
    return (
     <div>
      {loading ? <h1>Loading...</h1> : 
          <div>{movies.map( m => <Movie key={m.id} id={m.id} title={m.title} coverImg={m.medium_cover_image} summary = {m.summary} genres = {m.genres}/>)}</div>
      }
  
     </div>
    );
}


export default Home;