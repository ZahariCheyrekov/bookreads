import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from '../services/review';

export const ReviewContext = createContext();

export const ReviewContextProvider = ({ children }) => {
    const { id } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const reviews = await getReviews(id);
            setReviews(reviews);
        }
        fetchReviews();
    }, [id]);


    return (
        <ReviewContext.Provider
            value={reviews}
        >
            {children}
        </ReviewContext.Provider>
    );
}