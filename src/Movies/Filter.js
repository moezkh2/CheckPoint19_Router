import MovieCard from "./MovieCard";
const Filter = (props) => {
    /*function used to filter movies by title */
    const titleFilter = (el) => {
        if (props.titleSer !== undefined && props.titleSer !== '') {
            return el.title.toLowerCase().includes(props.titleSer.toLowerCase())
        } else { return true }
    }
     /*function used to filter movies by rating */
    const ratingFilter = (el) => {
        if (props.ratingSer) {
            return el.rating >= props.ratingSer
        } else { return true }
    }


    return (
        <div className="cardList">
            {/* combination of the two filters,rating and title*/}
            {props.movies.filter(el => { return titleFilter(el) && ratingFilter(el) }).map((ele,index) => { return <MovieCard key={index} title={ele.title} text={ele.description} posterURL={ele.posterURL} rating={ele.rating} removeMovie={props.removeMovie} btnRemove={props.btnRemove}></MovieCard> })}
        </div>
    );
}
export default Filter;
