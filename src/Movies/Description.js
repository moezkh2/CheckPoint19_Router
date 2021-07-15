/** component that show the details of the movie, recieve title from {match} and {movies} from props  */
const Description = ({ match, movies }) => {
    const movieDetails=()=>{
        return movies.find(el => { return `:${el.title}` === match.params.name })
    }
    return (
        <div align="center">
            <h1 style={{ color: "#ffcc66", fontSize: "100px", fontWeight: "bold", margin: "50px" }}>{movieDetails(match.params.name).title}</h1>
            <iframe width="853" height="480" src={movieDetails(match.params.name).trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3 style={{ color: "white", margin: "50px" }}>{movieDetails(match.params.name).description}</h3>
        </div>
    );
}
export default Description;

