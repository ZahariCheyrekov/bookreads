import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

import { getReviews } from '../services/review';

export const ReviewContext = createContext();

export const ReviewContextProvider = ({ children }) => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [userReview, setUserReview] = useState(null);

    useEffect(() => {
        const fetchReviews = async () => {
            const reviews = await getReviews(id);
            setReviews(reviews);
        }
        fetchReviews();
    }, [id]);

    useEffect(() => {
        const userReview = reviews.find(review => review.user.id === user.result._id);
        setUserReview(userReview);
    }, [reviews, user.result._id]);

    return (
        <ReviewContext.Provider
            value={{ reviews, userReview }}
        >
            {children}
        </ReviewContext.Provider>
    );
}