import MovieCard from "./MovieCard";
const Filter=(props)=>{
    const titleFilte=(el)=> {
        if(props.titleSer!==undefined && props.titleSer !==''){
            return el.title.toLowerCase().includes(props.titleSer.toLowerCase())
        }else{return true}
    }
    const ratingFilter=(el)=>{
        if(props.ratingSer){
            return el.rating>=props.ratingSer
        }else{return true}
    }
    
    
    return(
        <div className="cardList">
            {props.movies.filter(el=>{return titleFilte(el) && ratingFilter(el) }).map(ele=>{return <MovieCard title={ele.title} text={ele.description} posterURL={ele.posterURL} rating={ele.rating} removeMovie={props.removeMovie} btnRemove={props.btnRemove}></MovieCard>})}
        </div>
    );
}
export default Filter;
