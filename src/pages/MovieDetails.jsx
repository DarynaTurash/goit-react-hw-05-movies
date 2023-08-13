import { fetchMovieDetails } from "fetches/fetchMovieDetails";
import { useState, useEffect,  } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [caseNoInformation, setCaseNoInformation] = useState('false');
    const { movieId } = useParams();


    useEffect(() => {
        fetchMovieDetails(movieId)
            .then(details => {
                if (!details) {
                    setCaseNoInformation(true);
                    setMovieDetails({});
                } else {
                    setCaseNoInformation(false);
                    setMovieDetails(details);
                }
            })
            .catch(error => {
                alert("An error occurred while fetching movie details: " + error.message);
            });
    }, [movieId]);



    return (
        <main>
            <section>
                {caseNoInformation ? <p>Sorry, we did not get any information about this film, try to choose another film, please</p> :
                <div>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster}`} alt={movieDetails.title} />
                    </div>
                    <div>
                        <h2>{movieDetails.title}({movieDetails.releaseYear})</h2>
                        <p>User score: {movieDetails.userScore}%</p>
                        <h3>Overview</h3>
                        <p>{movieDetails.overView}</p>
                        <h4>Genres</h4>
                        <p>{movieDetails.genres}</p>
                    </div>
                </div>}
            </section>
        </main>
    );
};