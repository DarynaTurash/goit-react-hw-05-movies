import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchQueryList } from "components/searchQueryList";
import { fetchSearchQueryFilms } from "fetches/fetchSearchQueryFilms";

export const Movies = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [foundedFilms, setFoundedFilms] = useState([]);
    const [status, setStatus] = useState('idle');
    const navigate = useNavigate();
  

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

    return (
        <main>
            <form>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                />
                <button type="submit" onClick={handleSearch}>Search</button>
            </form>
            {status === "pending" && <p>...Loadind</p>}
            {status === "resolved" && <SearchQueryList list={foundedFilms} />}
        </main>
    );
};