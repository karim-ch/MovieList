import { useState, useCallback } from 'react';

const useMovies = () => {
    const [movies , setMovies] = useState([]);

    const fetchData = useCallback((year) => {
        if(year){
            fetch(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)
                .then(response => response.json())
                .then(({data}) => setMovies(data));
        }

    }, []);

    return {
        fetchData,
        movies
    };
};

export default useMovies;
