export const SearchBox = ({ query, onSearch, onChange}) => {
    return (
        <form>
                <input
                    type="text"
                    value={query}
                    onChange={event => onChange(event.target.value)}
                />
                <button type="submit" onClick={onSearch}>Search</button>
        </form>
    )
};