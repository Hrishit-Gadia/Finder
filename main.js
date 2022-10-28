//Variables

var Status
var Canvas
var Webcam
var Detector
var Objective

//Functions

function setup() {
    Canvas = createCanvas(550, 350)
    Canvas.center()

    Webcam = createCapture(VIDEO)
    Webcam.size(550, 350)
    Webcam.hide()
}
function modelLoaded() {
    console.info("Model Loaded")
    Status = true
}
function Start() {
    Detector = ml5.objectDetector('cocossd', modelLoaded);
    Objective = document.getElementById('name').value
    document.getElementById('Status').innerHTML = 'Detecting Object';
}
function draw() {
    translate(Webcam.width, 0);
    scale(-1, 1);
    image(Webcam, 0, 0, 550, 350);
}