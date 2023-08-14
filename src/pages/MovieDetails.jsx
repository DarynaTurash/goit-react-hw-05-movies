import { fetchMovieDetails } from "fetches/fetchMovieDetails";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Outlet, useLocation } from "react-router-dom";
import { MainInfoAboutFilm } from "components/MainInfoAboutFilm";
import { AdditionalInfoAboutFilm } from "components/AdditionalInfoAboutFilm";


export const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const [caseNoInformation, setCaseNoInformation] = useState(false);
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    
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

    const handleGoBack = () => {
        if (location.state.from && location.state.query) {
            navigate(`/movies?movieName=${location.state.query}`);
        } else {
            navigate("/");
        }
    };

    return (
        <main>
            {caseNoInformation ? <p>Sorry, we did not get any information about this film, try to choose another film, please</p> :
            <>
            <section>
                <div>
                    <button onClick={handleGoBack}>Go back</button>
                    <MainInfoAboutFilm poster={movieDetails.poster} title={movieDetails.title} releaseYear={movieDetails.releaseYear} userScore={movieDetails.userScore} overView={movieDetails.overView} genres={movieDetails.genres} />
                </div>
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