import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchQueryList } from "components/searchQueryList";
import { fetchSearchQueryFilms } from "fetches/fetchSearchQueryFilms";
import { SearchBox } from "components/SearchBox";


export const Movies = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [foundedFilms, setFoundedFilms] = useState([]);
    const [status, setStatus] = useState('idle');
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const queryParam = searchParams.get('movieName');
    

    const handleSearch = event => {
        event.preventDefault();
        fetchFilms().then(films => setFoundedFilms(films));
    };

    const fetchFilms = async () => {
        try {
            setStatus('pending'); 
            console.log(status);

            const dataFilms = await fetchSearchQueryFilms(searchQuery);
            setStatus('resolved');
            console.log(status);
            
            
            if (dataFilms.length === 0) {
                alert("Sorry, there are no matches. Please check if the title you wrote is correct.");
                navigate('/movies');
                setFoundedFilms([]);
                setSearchQuery('');
                return [];
            } else {
                setStatus('resolved');
                navigate(`/movies?movieName=${encodeURIComponent(searchQuery)}`);
                return dataFilms;
            }
        } catch (error) {
            setStatus('rejected');
        }
    };

    useEffect(() => {
        setSearchQuery(queryParam || "");
    }, [queryParam]);

    return (
        <main>
            <SearchBox query={searchQuery} onSearch={handleSearch} onChange={setSearchQuery} />
            {status === "pending" && <p>...Loadind</p>}
            {status === "resolved" && <SearchQueryList list={foundedFilms} query={searchQuery} />}
        </main>
    );
};