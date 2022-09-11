export const getUserLink = (name, id) => {
    return `/user/${name.split('\\s+').join('-').toLowerCase()}/${id}`;
}