'use strict'

let newX = 0;
let newY = 0;
startX = 0;
startY = 0;

const box = document.getElementById('box');

card.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
    startX = e.client
    startY = e.clientY
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
}
function mouseMove(e) {
    newX = e.clientX - startX;
    newY = e.clientY - startY;
    box.style.transform = `translate(${newX}px, ${newY}px)`;
}