export const CastOneActor = ({ name, photo, character }) => {
    return (
    <div>
        <img src={`https://image.tmdb.org/t/p/original/${photo}`} alt={name} />
        <p>{name}</p>
        <p>Character: {character}</p>
    </div>
    );
}