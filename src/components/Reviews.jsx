import fetchReviews from "fetches/fetchReviews";
import ReviewOneAuthor from "../components/ReviewOneAuthor";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";


const Reviews = () => {
    const [reviewDetails, setReviewDetails] = useState([]);
    const [noReviews, setNoReviews] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();


    const fetchAndSetReviewsDetails = async (id) => {
        try {
            const details = await fetchReviews(id);
            
            if(details.length === 0) {
                setNoReviews(true);
                setReviewDetails([]);
            } else {
                setNoReviews(false);
                setReviewDetails(details);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAndSetReviewsDetails(movieId);
    }, [movieId, location]);

    return (
        <div>
            {noReviews
            ? <p>There are no reviews for this movie yet</p>
            : <ul>
                {reviewDetails.map(review => (<ReviewOneAuthor key={review.id} name={review.author} text={review.text} />))}
            </ul>}
        </div>
    );
};

export default Reviews;