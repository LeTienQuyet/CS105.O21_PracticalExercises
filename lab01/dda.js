function draw_DDAline(x1, y1, x2, y2, color) {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    // Tính delta x và delta y
    let dx = x2 - x1;
    let dy = y2 - y1;
    
    if (dx == 0 && dy == 0)
        return;

    ctx.fillStyle = color;

    if (Math.abs(dy) <= Math.abs(dx)) {
        if (x2 < x1) {
            [x1, x2] = [x2, x1];
            [y1, y2] = [y2, y1];
        }
        let k = dy / dx;   
        let y = y1;
        for (var x = x1; x <= x2; x++) {
            ctx.fillRect(x, Math.floor(y+0.5), 1, 1);
            y += k;
        }
    }
    else 
    {
        if (y2 < y1) {
            [x1, x2] = [x2, x1];
            [y1, y2] = [y2, y1];
        }
        let k = dx / dy;
        let x = x1;
        for (var y = y1; y <= y2; y++) {
            ctx.fillRect(Math.floor(x+0.5), y, 1, 1);
            x += k;
        }
    }
}