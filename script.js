const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

let drawing = false;
let brushSize = 5;
let brushColor = '#000000';

canvas.width = window.innerWidth - 80;
canvas.height = window.innerHeight;

function startDrawing(e) {
    drawing = true;
    draw(e);
}

function endDrawing() {
    drawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!drawing) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - 80, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - 80, e.clientY);
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', endDrawing);
canvas.addEventListener('mousemove', draw);

document.getElementById('eraser').addEventListener('click', () => {
    brushColor = '#FFFFFF';
});

document.getElementById('reset').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('brush-size').addEventListener('input', (e) => {
    brushSize = e.target.value;
});

document.getElementById('color-picker').addEventListener('input', (e) => {
    brushColor = e.target.value;
});
