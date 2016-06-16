
var squares = [];
var boxSize = 50;
var img;

function setup() {

    createCanvas(windowWidth, windowHeight);

    noStroke();

    for(var y=0; y<windowHeight-boxSize; y+=boxSize){

        for(var x=0; x<windowWidth-boxSize; x+=boxSize){

            /*
            * each square will get it's
            * x and y value
            * based on the loop
            * */
            squares.push({ x:x, y:y });

        }

    }

}

function preload() {

    img = loadImage('/img/image.jpg');

}

var i = 0;

function draw() {

    //var i = floor(random(0, squares.length));

    var imageColor = img.get(squares[i].x, squares[i].y);

    var randomColor = random(0,255);
    var myColor = color(random(0,255), random(0,255), random(0,255), 255);
    fill(imageColor);
    rect(squares[i].x,squares[i].y,boxSize,boxSize);

    i++;

}

function mousePressed() {

    /*
    * draw again what's
    * in the draw()
    * */
    redraw();

}