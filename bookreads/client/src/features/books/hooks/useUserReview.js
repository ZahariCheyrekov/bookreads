import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getUserReview } from '../services/review';

import { AuthContext } from '../../../contexts/AuthContext';

export const useUserReview = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [currentUserReview, setCurrentUserReview] = useState(null);

    useEffect(() => {
        const fetchUserReview = async () => {
            const currentReview = await getUserReview(id, user?.result._id);
            setCurrentUserReview(currentReview);
        }
        fetchUserReview();
    }, [id, user?.result?._id]);

    return currentUserReview;
}