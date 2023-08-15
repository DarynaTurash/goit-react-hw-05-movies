import { Link } from "react-router-dom";

const SearchBox = ({ query, onSearch, onChange }) => {
    return (
        <form>
            <input
                type="text"
                value={query}
                onChange={event => onChange(event.target.value)}
            />
            <Link
                to={`/movies?movieName=${query}`}
                onClick={onSearch}
            >
                Search
            </Link>
        </form>
    );
};

export default SearchBox;