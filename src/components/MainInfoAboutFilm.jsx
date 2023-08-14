export const MainInfoAboutFilm = ({ poster, title, releaseYear, userScore, overView, genres }) => {
    return (
        <div>
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${poster}`} alt={title} />
            </div>
            <div>
                <h2>{title}({releaseYear})</h2>
                <p>User score: {userScore}%</p>
                <h3>Overview</h3>
                <p>{overView}</p>
                <h4>Genres</h4>
                <p>{genres}</p>
            </div>
        </div>
    );
};