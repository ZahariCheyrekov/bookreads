export const getUserLink = (name, id) => {
    return `/user/${name.split(' ').join('-').toLowerCase()}/${id}`;
}