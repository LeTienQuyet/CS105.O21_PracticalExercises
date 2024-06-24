function draw_xOy() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    // Vẽ lưới hình ô vuông
    let gridSize = 10; // Kích thước ô vuông
    
    ctx.strokeStyle = 'rgb(128,128,128)';
    for (let x = 0; x <= canvasWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
    }
    for (let y = 0; y <= canvasHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
    }
}

function delete_xOy() {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw_lastPoint(x,y) {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, 5, 5);
}