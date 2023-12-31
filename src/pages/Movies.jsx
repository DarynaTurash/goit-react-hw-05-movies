import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchQueryList from "../components/QueryList";
import fetchSearchQueryFilms from "fetches/fetchSearchQueryFilms";
import SearchBox from "../components/SearchBox";
import Notiflix from 'notiflix';
import Loader from "../components/Loader";
import Error404 from "components/NoInformation";

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [foundedFilms, setFoundedFilms] = useState([]);
    const [status, setStatus] = useState('idle');
    const [searchParams] = useSearchParams();
    const queryParam = searchParams.get('movieName');
    const navigate = useNavigate();

    const handleSearch = event => {
        event.preventDefault();

        if(searchQuery === '') {
            Notiflix.Notify.info("Please, enter something into field");
            return;
        } else {
            navigate(`/movies?movieName=${encodeURIComponent(searchQuery)}`);
        }   
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
            {status === "resolved" && <SearchQueryList list={foundedFilms} />}
            {status === 'rejected' && <Error404 />}
        </main>
    );
};

export default Movies;