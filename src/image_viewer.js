import '../styles/image_viewer.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
// import img3 from '../assets/3.jpg';

const image1 = document.createElement('img');
image1.src = img1;

document.body.appendChild(image1);

const image2 = document.createElement('img');
image2.src = img2;

document.body.appendChild(image2);