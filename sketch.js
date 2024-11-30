function setup() {
  createCanvas(innerWidth, innerHeight); // Create a canvas matching the full screen size.
}

var countedClicks = 0; // Track the number of valid clicks.
var clickDetected = false; // Flag to detect a mouse click.

function mouseClicked() {
  clickDetected = true; // Set the flag to true when a mouse click occurs.
}

function draw() {
  background(135, 106, 135); // Set a purple background color.

  fill(0);
  textAlign(CENTER, CENTER); // Prepare black fill and center text alignment.
  textSize(60);
  text("Counted clicks: " + countedClicks, innerWidth / 2, innerHeight / 2 - 60); // Display the click count.

  textSize(20);
  text("Mouse Coordinates " + mouseX + " " + mouseY, innerWidth / 2, innerHeight / 2 + 60); // Display mouse coordinates.
  text("Values of innerWidth and innerHeight: " + innerWidth + " " + innerHeight, innerWidth / 2, innerHeight / 2 + 90); // debug data.

  fill(255, 0, 0); // Set fill color to red.
  var rectWidth = innerWidth / 5; // Calculate the button width as 1/5 of the canvas width.
  rect(innerWidth / 2 - rectWidth / 2, innerHeight / 2 - 25, rectWidth, 50); // Draw a red rectangle as the button.

  if (clickDetected && mouseX > innerWidth / 2 - rectWidth / 2 && mouseX < innerWidth / 2 + rectWidth / 2 &&
    mouseY > innerHeight / 2 - 25 && mouseY < innerHeight / 2 + 25) {
    countedClicks++; // Increment the count if the click is within the button bounds.
    initialiseMessage();
  }

  fill(255); // Set fill color to white.
  text("Click Me!", innerWidth / 2, innerHeight / 2); // Display "Click Me!" on the button.

  drawMessages();

  clickDetected = false; // Reset the clickDetected flag for the next frame.
}
