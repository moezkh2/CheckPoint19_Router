import {Button,Nav,Navbar,Form,FormControl} from 'react-bootstrap'
import './App.css';
import React, { useEffect, useState} from 'react';
import MovieList from './Movies/MovieList';
import FormMovies from './FormMovies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Movies/Filter';
import StarRatingComponent from 'react-star-rating-component';
function App() {
  const [movies,setMovies]=useState([
    {
      title : "Game of Thrones",
      description :"Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.",
      posterURL :"https://lepetitjournal.com/sites/default/files/styles/main_article/public/2021-04/GOT_1920.jpg?itok=1o8DktTq",
      rating : 5,
    },
    {
      title : "Mr Robot",
      description :"Elliot Alderson est un jeune informaticien vivant à New York, qui travaille en tant qu'ingénieur en sécurité informatique pour Allsafe Security. Celui-ci luttant constamment contre un trouble d'anxiété sociale et de dépression.",
      posterURL :"https://sensorstechforum.com/wp-content/uploads/2016/07/mr-robot-season-2-stforum-768x384.jpg",
      rating : 4,
    },
    {
      title : "Vikings",
      description :"Scandinavie, à la fin du 8ème siècle. Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer.",
      posterURL :"https://p4.wallpaperbetter.com/wallpaper/854/766/495/vikings-season-5-hd-wallpaper-preview.jpg",
      rating : 5,
    },
    {
      title : "The Witcher",
      description :"Hexer Geralt reprend la mission inachevée d'un autre sorceleur dans un royaume traqué par une bête féroce. Yennefer se forge un avenir magique au prix d'un terrible sacrifice.",
      posterURL :"https://img.phonandroid.com/2021/01/witcher-saison2-4.jpg",
      rating : 4,
    }
    ,
    {
      title : "Chernobyl",
      description :"Lors de la pire catastrophe de l'histoire causée par l'homme le 26 avril 1986, des hommes et des femmes ont sacrifié leurs vies afin d'éviter le pire pour leurs consoeurs.",
      posterURL :"https://cdn.radiofrance.fr/s3/cruiser-production/2019/06/5a844aeb-2ebc-436c-82c9-3daed16d21d2/838_chernobyl-1024x576.jpg",
      rating : 4,
    }
  ]);
  const[search,setSearch]=useState();
  const[btnSearch,setbtnSearch]= useState(false);
  const[btnRemove,setbtnRemove]= useState('none');
  const[show,setShow]=useState();
  const[starSer,setStarSer]=useState(0);
  const hendelStarSer=(nextValue, prevValue, name)=>{setStarSer(nextValue);}
  const addMovie=(newMovie)=>{
    if(movies.find(el=>el.title===newMovie.title)){
      alert("the movie is exist in the list")
    }else if(newMovie.title===""|| newMovie.descriptione===""|| newMovie.posterURLe===""||newMovie.rating===0){
      alert("Please fill in all the required fields")
    }else{
      setMovies(movies.concat(newMovie))
      alert("movie has added to the list");
    }
    
  }
  const removeMovie=(reMovie)=>{
    setMovies(movies.filter(el=>el.title!==reMovie))
  }
  useEffect(()=>{
      if(search!==undefined && search !==''|| starSer!==0){
        setShow(<Filter titleSer={search} ratingSer={starSer} movies={movies} removeMovie={(rm)=>removeMovie(rm)} btnRemove={btnRemove}></Filter>)
      }else{
        setShow(<MovieList movies={movies} removeMovie={(rm)=>removeMovie(rm)} btnRemove={btnRemove} ></MovieList>)
      }

  },[btnSearch,movies,btnRemove])
    return (
    <div>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand >Movies</Navbar.Brand>
        <Nav className="mr-auto">
            <FormMovies addMovie={(m)=>addMovie(m)}></FormMovies>
            <Button variant="outline-danger" style={{marginLeft:"10px"}} onClick={()=>{setbtnRemove(btnRemove==='none' ? 'block':'none')}}>Delete movie</Button>
        
        </Nav>
        
        <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e=>{setSearch(e.target.value)}}/>
                <StarRatingComponent emptyStarColor={"white"} onStarClick={hendelStarSer}></StarRatingComponent>
                <Button variant="outline-info"onClick={()=>{setbtnSearch(!btnSearch)}}>Search</Button>
            </Form>
      </Navbar>
      <div align="center">
      {show}
      </div>
    </div>
  );

}
export default App;
