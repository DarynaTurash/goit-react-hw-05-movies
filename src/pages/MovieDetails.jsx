import fetchMovieDetails from "fetches/fetchMovieDetails";
import { useState, useEffect, useRef, Suspense } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import AdditionalInfoAboutFilm from "components/AdditionalInfoAboutFilm";
import MainInfoAboutFilm from "../components/MainInfoAboutFilm";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [caseNoInformation, setCaseNoInformation] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocation = useRef(location.state?.from ?? '/');

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
            {caseNoInformation ? <p>Sorry, we did not get any information about this film, try to choose another film, please</p>
            :
            <>
            <MainInfoAboutFilm backLink={backLinkLocation.current} poster={movieDetails.poster} title={movieDetails.title} releaseYear={movieDetails.releaseYear} userScore={movieDetails.userScore} overView={movieDetails.overView} genres={movieDetails.genres} />    
            <AdditionalInfoAboutFilm />
            <Suspense fallback={<div>...Loadind</div>}>
            <Outlet />
            </Suspense>
            </>}
        </main>
    );
};

export default MovieDetails;