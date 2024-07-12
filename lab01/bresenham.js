function draw_BRESENHAMline(x1, y1, x2, y2, color) {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    // Tính delta x và delta y
    let dx = x2 - x1;
    let dy = y2 - y1;
    
    if (dx == 0 && dy == 0)
        return;

    dx = Math.abs(dx);
    dy = Math.abs(dy);

    ctx.fillStyle = color;

    if (dy <= dx) {
        if (x2 < x1) {
            [x1, x2] = [x2, x1];
            [y1, y2] = [y2, y1];
        }
        let p = 2*dy - dx;
        let y = y1;
        for (let x = x1; x <= x2; x++) {
            ctx.fillRect(x, y, 1, 1);
            if (p < 0) {
                p += 2*dy;
            }
            else {
                if (y1 > y2) y -= 1;
                else y += 1;
                p += 2*(dy-dx);
            }
        }
    }
    else 
    {
        if (y2 < y1) {
            [x1, x2] = [x2, x1];
            [y1, y2] = [y2, y1];
        }
        let p = 2*dx - dy;
        let x = x1;
        for (let y = y1; y <= y2; y++) {
            ctx.fillRect(x, y, 1, 1);
            if (p < 0) {
                p += 2*dx;
            }
            else {
                if (x1 > x2) x -= 1;
                else x += 1;
                p += 2*(dx-dy);
            }
        }
    }
}