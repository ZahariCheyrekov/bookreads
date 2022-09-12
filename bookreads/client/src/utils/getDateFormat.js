export const getDateFormat = (createdAt) => {
    const secondsNow = new Date();
    const secondsCreationDate = new Date(createdAt);

    const time = Math.abs(secondsCreationDate - secondsNow);
    const secondsDiff = Math.ceil(time / 1000);

    if (secondsDiff < 60) {
        return `${secondsDiff}s`;
    } else if (secondsDiff >= 60 && secondsDiff < 3600) {
        const minutes = Math.round(secondsDiff / 60);
        return `${minutes}m`;
    } else if (secondsDiff >= 3600 && secondsDiff < 86_400) {
        const hours = Math.round(secondsDiff / 60 / 60);
        return `${hours}h`;
    } else if (secondsDiff >= 86_400 && secondsDiff < 604_800) {
        const days = Math.round(secondsDiff / 60 / 60 / 24);
        return `${days}d`;
    } else if (secondsDiff >= 604_800 && secondsDiff < 1_814_400) {
        const weeks = Math.round(secondsDiff / 60 / 60 / 24 / 7);
        return `${weeks}w`;
    } else {
        return new Date(createdAt).toUTCString().slice(0, 11);
    }
}