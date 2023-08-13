import { fetchTrendindFilms } from "../fetches/fetchTrendingFilms";
import { TrendingFilmsList } from "../components/trendindFilmsList";
import { useEffect, useState } from "react";

export const Home = () => {
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
            <TrendingFilmsList list={trendingFilms} />
        </main>
    );
};