import { Button, Nav, Navbar, Form, FormControl } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import FormMovies from './FormMovies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Filter';
import StarRatingComponent from 'react-star-rating-component';
const Home = (props) => {
  /** state used to store the title to search  */
  const [search, setSearch] = useState();
  /** state used by the search button */
  const [btnSearch, setbtnSearch] = useState(false);
  /** state used by the remove button */
  const [btnRemove, setbtnRemove] = useState('none');
  /** state used by useEffect hook to rerender  */
  const [show, setShow] = useState();
  /** state used to store the rating value to search with it */
  const [starSer, setStarSer] = useState(1);
  const hendelStarSer = (nextValue, prevValue, name) => { setStarSer(nextValue); }
/** function that is used to add the new movie */
  const addMovie = (newMovie) => {
    if (props.movies.find(el => el.title === newMovie.title)) {
      alert("the movie is exist in the list")
    } else if (newMovie.title === "" || newMovie.descriptione === "" || newMovie.posterURLe === "" || newMovie.trailer==="" || newMovie.rating === 0) {
      alert("Please fill in all the required fields")
    } else {
      props.setMovies(props.movies.concat(newMovie))
      alert("movie has added to the list");
    }

  }
  /** function that handles the remove button */
  const removeMovie = (reMovie) => {
    props.setMovies(props.movies.filter(el => el.title !== reMovie))
  }
  /** useEffect hook to rerender the view and show MovieList Component or filter component  */
  useEffect(() => {
    if ((search !== undefined && search !== '') || (starSer !== 0)) {
      setShow(<Filter titleSer={search} ratingSer={starSer} movies={props.movies} removeMovie={(rm) => removeMovie(rm)} btnRemove={btnRemove}></Filter>)
    } else {
      setShow(<MovieList movies={props.movies} removeMovie={(rm) => removeMovie(rm)} btnRemove={btnRemove} ></MovieList>)
    }
  }, [btnSearch, props.movies, btnRemove])
  return (
    <div>
      {/** navBar  */}
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand >Movies</Navbar.Brand>
        <Nav className="mr-auto">
          <FormMovies addMovie={(m) => addMovie(m)}></FormMovies>
          <Button variant="outline-danger" style={{ marginLeft: "10px" }} onClick={() => { setbtnRemove(btnRemove === 'none' ? 'block' : 'none') }}>Delete movie</Button>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => { setSearch(e.target.value) }} />
          <StarRatingComponent emptyStarColor={"white"} value={starSer} name="starsearch" onStarClick={hendelStarSer}></StarRatingComponent>
          <Button variant="outline-info" onClick={() => { setbtnSearch(!btnSearch) }}>Search</Button>
        </Form>
      </Navbar>
      {/** "show" state can be MovieList component or Filter component */}
      <div align="center">
        {show}
      </div>
    </div>
  );

}

export default Home;

