import React from 'react'
import { movieData } from '../../Datas'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../Card/Card';
const Newmovieslide = () => {

    const[newMovies,setNewmovies] = useState([]);

    const getNewmovies = () => {
        let newMoviesfilter = movieData.filter((currItem) => currItem.new === true);
        setNewmovies(newMoviesfilter);
       
    }


    useEffect(() => {
        getNewmovies();
    }, [])
    return (
        <div className='my-3'>
            <h5 className='text-capitalize'>Trending</h5>
            <Card data={newMovies}/>

        </div>
    )
}

export default Newmovieslide