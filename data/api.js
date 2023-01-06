function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export async function getRandomPhoto() {
    const randomPhotoId = getRandomInt(1, 10);
    const photo = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${randomPhotoId}`
    ).then((response) => response.json());
    return photo;
}