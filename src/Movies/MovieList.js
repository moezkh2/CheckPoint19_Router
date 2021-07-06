import MovieCard from "./MovieCard";
import React from "react";
const MovieList=(props)=>{
    return(
        <div className="cardList">
            {props.movies.map(el=>{return <MovieCard title={el.title} text={el.description} posterURL={el.posterURL} rating={el.rating} removeMovie={props.removeMovie} btnRemove={props.btnRemove}></MovieCard>})}
        </div>
    );
}
export default MovieList; 