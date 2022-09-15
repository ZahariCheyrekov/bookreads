export const getReviewDate = (date) => {
    const resultDate = new Date(date)
        .toLocaleString('en-us', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    return resultDate;
}