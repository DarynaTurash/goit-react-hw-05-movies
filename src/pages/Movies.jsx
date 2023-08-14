import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchQueryList } from "components/searchQueryList";
import { fetchSearchQueryFilms } from "fetches/fetchSearchQueryFilms";
import { SearchBox } from "components/SearchBox";
import Notiflix from 'notiflix';

export const Movies = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [foundedFilms, setFoundedFilms] = useState([]);
    const [status, setStatus] = useState('idle');
    const [searchParams] = useSearchParams();
    const queryParam = searchParams.get('movieName');
    const navigate = useNavigate();

    const handleSearch = event => {
        event.preventDefault();
        navigate(`/movies?movieName=${encodeURIComponent(searchQuery)}`);
    };

    const fetchFilms = async (query) => {
        try {
            setStatus('pending'); 

            const dataFilms = await fetchSearchQueryFilms(query);
            
            if (dataFilms.length === 0) {
                Notiflix.Notify.warning('Sorry, there are no matches. Please, check if the title you wrote is correct.');
                setStatus('idle');
                navigate('/movies');
                setFoundedFilms([]);
                setSearchQuery('');
            } else {
                setStatus('resolved');
                setFoundedFilms(dataFilms);
            }
        } catch (error) {
            setStatus('rejected');
        }
    };

    useEffect(() => {
        if (queryParam) {
            fetchFilms(queryParam);
            setSearchQuery(queryParam);
        }
    }, [queryParam]);

    return (
        <main>
            <SearchBox query={searchQuery} onSearch={handleSearch} onChange={setSearchQuery} />
            {status === "pending" && <p>...Loading</p>}
            {status === "resolved" && <SearchQueryList list={foundedFilms} query={queryParam} />}
            {status === 'rejected' && <p>Error, something went wrong, please try again</p>}
        </main>
    );
};