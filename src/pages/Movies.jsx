import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchQueryList from "../components/SearchqueryList";
import fetchSearchQueryFilms from "fetches/fetchSearchQueryFilms";
import SearchBox from "../components/SearchBox";
import Notiflix from 'notiflix';
import Loader from "../components/Loader";

const Movies = () => {
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

    useEffect(() => {
        if (queryParam) {
            const fetchAndSetFilms = async () => {
                try {
                    setStatus('pending'); 
    
                    const dataFilms = await fetchSearchQueryFilms(queryParam);
                    
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
    
            fetchAndSetFilms();
            setSearchQuery(queryParam);
        }
    }, [queryParam, navigate]);

    return (
        <main>
            <SearchBox query={searchQuery} onSearch={handleSearch} onChange={setSearchQuery} />
            {status === "pending" && <Loader />}
            {status === "resolved" && <SearchQueryList list={foundedFilms} query={queryParam} />}
            {status === 'rejected' && <p>Error, something went wrong, please try again</p>}
        </main>
    );
};

export default Movies;