import fetchTrendindFilms from "../fetches/fetchTrendingFilms";
import { useEffect, useState, lazy, Suspense } from "react";
const TrendingFilmsList = lazy(() => import('../components/TrendingFilmsList'));


const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);

    const fetchFilms = async () => {
        try {
            const films = await fetchTrendindFilms();
            return films;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFilms().then(films => {
            setTrendingFilms(films);
        });
    }, []);

    return (
        <main>
            <h1>Trending today</h1>
            <Suspense fallback={<div>Please wait, the movie list is loading</div>}>
            <TrendingFilmsList list={trendingFilms} />
            </Suspense>
        </main>
    );
};

export default Home;