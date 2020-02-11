import './random-color-button.js';

setInterval( () => {
    const elem = document.createElement('random-color-button');
    elem.addEventListener('click', (e) => {
        console.log(e);
        document.body.style.backgroundColor = e.target.color;
        e.target.remove();
    });
    document.body.append(elem);
}, 1000);