import fetchMovieDetails from "fetches/fetchMovieDetails";
import { useState, useEffect, useRef } from "react";
import { useParams, Outlet, useLocation, Link } from "react-router-dom";
import MainInfoAboutFilm from "components/MainInfoAboutFilm";
import AdditionalInfoAboutFilm from "components/AdditionalInfoAboutFilm";



const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [caseNoInformation, setCaseNoInformation] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? '/');
    console.log(backLinkLocation);

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
                console.log(error);
            });
    }, [movieId]);


    return (
        <main>
            {caseNoInformation ? <p>Sorry, we did not get any information about this film, try to choose another film, please</p> :
            <>
            <section>
                <Link to={backLinkLocation.current}>Go back</Link>
                <MainInfoAboutFilm poster={movieDetails.poster} title={movieDetails.title} releaseYear={movieDetails.releaseYear} userScore={movieDetails.userScore} overView={movieDetails.overView} genres={movieDetails.genres} />    
            </section>
            <section>
                <AdditionalInfoAboutFilm />
            </section>
            <section>
                <Outlet />
            </section>
            </>}
        </main>
    );
};

export default MovieDetails;