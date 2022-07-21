import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function Detail() {
    //console.log("happy");
    const {id} = useParams()
    console.log({id});

    const [movie,SetMovie] = useState([]);

    const getMovie = async() =>{
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        console.log(json);
        
        SetMovie(currentArray => [json.data.movie.title,json.data.movie.medium_cover_image,json.data.movie.year,json.data.movie.genres, ...currentArray]);
    }

    useEffect(()=>{getMovie()},[]);
  return (
    <div>
        <h2>{movie[0]}</h2>
        <img src={movie[1]} />
        <p>{movie[2]}</p>
        <p>{movie[3]} </p>
        {/* 각 배열을 <ul> - <li> 로 분리하는 방법 */}
    </div>
  );
}

