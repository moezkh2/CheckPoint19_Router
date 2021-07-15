import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './Movies/Description';
import Home from './Movies/Home';
import { Route } from 'react-router-dom';
function App() {
   /*array of movies */
  const [movies, setMovies] = useState([
    {
      title: "Game of Thrones",
      description: "Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages.",
      posterURL: "https://lepetitjournal.com/sites/default/files/styles/main_article/public/2021-04/GOT_1920.jpg?itok=1o8DktTq",
      trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E",
      rating: 5,
    },
    {
      title: "Mr Robot",
      description: "Elliot Alderson est un jeune informaticien vivant à New York, qui travaille en tant qu'ingénieur en sécurité informatique pour Allsafe Security. Celui-ci luttant constamment contre un trouble d'anxiété sociale et de dépression.",
      posterURL: "https://sensorstechforum.com/wp-content/uploads/2016/07/mr-robot-season-2-stforum-768x384.jpg",
      trailer: "https://www.youtube.com/embed/xIBiJ_SzJTA",
      rating: 4,
    },
    {
      title: "Vikings",
      description: "Scandinavie, à la fin du 8ème siècle. Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer.",
      posterURL: "https://p4.wallpaperbetter.com/wallpaper/854/766/495/vikings-season-5-hd-wallpaper-preview.jpg",
      trailer: "https://www.youtube.com/embed/mAl60ykBm4A",
      rating: 5,
    },
    {
      title: "The Witcher",
      description: "Hexer Geralt reprend la mission inachevée d'un autre sorceleur dans un royaume traqué par une bête féroce. Yennefer se forge un avenir magique au prix d'un terrible sacrifice.",
      posterURL: "https://img.phonandroid.com/2021/01/witcher-saison2-4.jpg",
      trailer: "https://www.youtube.com/embed/ndl1W4ltcmg",
      rating: 4,
    }
    ,
    {
      title: "Chernobyl",
      description: "Lors de la pire catastrophe de l'histoire causée par l'homme le 26 avril 1986, des hommes et des femmes ont sacrifié leurs vies afin d'éviter le pire pour leurs consoeurs.",
      posterURL: "https://cdn.radiofrance.fr/s3/cruiser-production/2019/06/5a844aeb-2ebc-436c-82c9-3daed16d21d2/838_chernobyl-1024x576.jpg",
      trailer: "https://www.youtube.com/embed/s9APLXM9Ei8",
      rating: 4,
    }
  ]);
 
  return (
    <div>
       {/*route to the home component */}
      <Route exact path="/" render={() => <Home movies={movies} setMovies={(m) => { setMovies(m) }}></Home>}></Route>
      {/*route to the Description component */}
      <Route path="/Description/:name" render={(props) => <Description movies={movies}{...props}></Description>}></Route>
    </div>
  );

}
export default App;
