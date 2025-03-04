'use client';

import { use, useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import { Movie } from '@/types/movie';
import MovieCard from '../MovieCard';


export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]); // movies is the state and setMovies is the function that updates the state
    const [isloading, setIsLoading] = useState<boolean>(true); // isloading is the state and setLoading is the function that updates the state
 
    useEffect(() => {
        getMovies();}, []);


    const getMovies =   () => {
        axios({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: '3dcdd8c684fca4fc25d309e46dd0b472',
                language: 'pt-BR',
            }
        }).then((response) => {
            setMovies(response.data.results);
        });
        
      
    }

    getMovies();

    return (
        <ul className='movie-list'>
            {movies.map((movie) => 
                <MovieCard
                key={movie.id}
                    movie={movie}
                />
             
            )}
           
        </ul>
    );

}