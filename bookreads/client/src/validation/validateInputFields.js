export const validateInputFields = (data) => {
    return Object.values(data).every(input => input.trim() !== '');
}