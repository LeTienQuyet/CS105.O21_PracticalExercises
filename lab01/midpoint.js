function draw8points(xc, yc, x, y) {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'black';

    ctx.fillRect(xc+x,yc+y,1,1);
    ctx.fillRect(xc+y,yc+x,1,1);
    ctx.fillRect(xc+y,yc-x,1,1);
    ctx.fillRect(xc+x,yc-y,1,1);
    ctx.fillRect(xc-x,yc-y,1,1);
    ctx.fillRect(xc-y,yc-x,1,1);
    ctx.fillRect(xc-y,yc+x,1,1);
    ctx.fillRect(xc-x,yc+y,1,1);
}

function draw_MIDPOINTcircle(xc, yc, r) {
    let p = 5/4 - r;
    let x = 0, y = r;
    while (x < y) {
        draw8points(xc,yc,x,y);
        if (p < 0) {
            p += 2*x + 3;
        } 
        else {
            p += 2*(x-y) + 5;
            y -= 1;
        }
        x += 1;
    }
}

function draw_centerOfCircle(xc,yc) {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "black";
    ctx.fillRect(xc, yc, 10, 10);
}

