export const validateInput = (data) => {
    return Object.values(data).every(input => input.trim() !== '');
}