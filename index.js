var offset = 0;
var debug = document.getElementById('debug');

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(25);
    noFill();
    frameRate(30);
    
}

function draw() {  
    background(25, 5)  
    var x1 = innerWidth * noise(offset + 15);
    var x2 = innerWidth * noise(offset + 25);
    var x3 = innerWidth * noise(offset + 35);
    var x4 = innerWidth * noise(offset + 45);
    var y1 = innerHeight * noise(offset + 55);
    var y2 = innerHeight * noise(offset + 65);
    var y3 = innerHeight * noise(offset + 75);
    var y4 = innerHeight * noise(offset + 85);

    var xx1 = innerWidth * noise(offset - 15);
    var xx2 = innerWidth * noise(offset - 25);
    var xx3 = innerWidth * noise(offset - 35);
    var xx4 = innerWidth * noise(offset - 45);
    var yy1 = innerHeight * noise(offset - 55);
    var yy2 = innerHeight * noise(offset - 65);
    var yy3 = innerHeight * noise(offset - 75);
    var yy4 = innerHeight * noise(offset - 85);


    var r = 255 * noise(offset+1);
    var g = 255 * noise(offset+5);
    var b = 255 * noise(offset+10);

    stroke(r, g, b);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
    bezier(xx1, yy1, xx2, yy2, xx3, yy3, xx4, yy4);
    

    offset += 0.01;

    

}