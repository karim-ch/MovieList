import React, {useState}  from "react";
import "./index.css";
import useMovies from './useMovies';

function MovieList() {
    const [year, setYear] = useState(null);
    const {movies, fetchData} = useMovies();

    const onChange = ({target: {value}}) => {
        setYear(value);
    };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="number" className="large" placeholder="Enter Year eg 2015" data-testid="app-input" onChange={onChange}/>
        <button
            className="" data-testid="submit-button" onClick={()=>fetchData(year)}>Search</button>
      </section>
      <ul className="mt-50 styled" data-testid="movieList">
         {year && movies.length>0 && movies.map(({imdbID, Title}) => <li key={imdbID} className="slide-up-fade-in py-10">{Title}</li>)}
      </ul>
        {(year && movies.length===0) && <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Results Found</div>}
    </div>
  );
}

export default MovieList
