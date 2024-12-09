function setup() { // this function is called only once upon the opening of your html file
    createCanvas(innerWidth, innerHeight); // Create a canvas matching the full screen size of browser window.
}

function draw() { // this is like the loop() in an arduino. It is automatically called as often as your computer can handle. (Usually matching your FPS).
    //This allows you to animate or change data shown on the screen unlike the setup function
    clear(); // clears the canvas from previously drawn shapes
    background(160, 200, 255);    // makes the background white

    fill(0, 0, 0);
    text("Coordinates for center of screen is: " + innerWidth / 2 + " " + innerHeight / 2, 10, 30);

    fill(255, 0, 0);
    rect(50, 50, 250, 150);

}