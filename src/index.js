//import or require sum.js needed
// import sum from './sum';
// import './image_viewer';

// const total = sum(5,10);
// console.log(total);

const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
    System.import('./image_viewer').then(module => {
        module.default();
        console.log(module);
    });
};

document.body.appendChild(button);