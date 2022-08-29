function preload() {
}
  
function setup() {
    canvas = createCanvas(650, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
  
function draw() {
    image(video, 0, 0, 650, 450);
    tint(tint_color);
    circle(30, 30, 50);
    circle(620, 30, 50);
    rect(20, 40, 600, 55);
    fill("red");
}

function take_snapshot(){
    save('myPhoto.png')
}