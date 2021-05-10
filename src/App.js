import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setmovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState([null]);
  const [blackHeader, setblackHeader] = useState(false);
  

  useEffect(() => {
    const loadAll = async () => {
     
      let list = await Tmdb.getHomeList();
      setmovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

      
    }
    loadAll();
  }, []);

  useEffect (() => {
    const scrollListener = () => {
      if(window.scrollY > 15) {
        setblackHeader(true);
      }else {
        setblackHeader(false);
      }
    }
      window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

   return (
     <div className='page'>

       <Header black={blackHeader}/>


       {featuredData && 
       <FeaturedMovie item={featuredData}/>
       }
       <section className='lists'>
         {movieList.map((item, key) => (
           <MovieRow key={key} title={item.title} items={item.items}/>
         ))}
       </section>

       <footer>
         Feito com <span role='img' aria-label='coração'>💛</span> por Alex Katopodis<br/> 
         Direitos de Imagem para Netflix<br/>
         API consumida pelo TMDB TheMoviedb.org
       </footer>
     </div>
   );
}