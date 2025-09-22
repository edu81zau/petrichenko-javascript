export function getImageUrl(person, size = 's') {
    console.log("imageId from Utils",  person.imageId);
    return 'https://i.imgur.com/' + person.imageId + size + '.jpg';
}