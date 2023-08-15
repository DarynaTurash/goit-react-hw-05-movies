const ReviewOneAuthor = ({ name, text }) => {
    return (
     <div>
        <h4>Author: {name}</h4>
        <p>{text}</p>
     </div>
    );
};

export default ReviewOneAuthor;