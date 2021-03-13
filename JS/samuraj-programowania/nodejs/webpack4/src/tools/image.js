import photo from '../images/zdjecie.png';

export default (tag) => {
    const img = document.createElement('img');
    img.src = photo;
    document.querySelector(tag).appendChild(img);
}