// Array of comments that will randomly appear when a message is created
var comments = [
    "+1", "such click", "much wow", "XP gain", "learning",
    "Wǒ de péngyǒu!", "clickity click", "wow, skills!", "big brain energy",
    "achievement unlocked", "power move", "level up!", "instant gratification",
    "pure genius", "nailed it", "efficiency 100%", "smooth operator",
    "click champ", "peak performance", "unstoppable", "meow", "button boss", "on fire!"
];

// Array of bright colors for the text, each represented as [R, G, B]
var colours = [
    [233, 30, 99],  // Bright pink
    [66, 165, 245], // Sky blue
    [255, 193, 7],  // Bright yellow
    [156, 39, 176], // Vibrant purple
    [76, 175, 80],  // Bright green
    [244, 67, 54],  // Bright red
    [255, 152, 0],  // Vibrant orange
    [103, 58, 183]  // Deep violet
];

// Duration for how long a message should last on the screen (in milliseconds)
var messageDuration = 400;

// Class definition for a message that appears when triggered
class Message {
    constructor() {
        // Selects a random comment from the `comments` array
        this.comment = comments[int(random(0, comments.length))];
        // Selects a random color from the `colours` array
        this.colour = colours[int(random(0, colours.length))];
        // Records the time the message was created (used for animations)
        this.timeCreated = millis();
        // Sets the initial position of the message to the mouse's current position
        this.x = mouseX;
        this.y = mouseY;
    }

    // Method to display the message on the screen
    show() {
        textSize(30); // Sets the size of the text
        // Sets the text color using the message's color and fades it over time
        fill(
            this.colour[0],
            this.colour[1],
            this.colour[2],
            map(millis(), this.timeCreated, this.timeCreated + messageDuration, 255, 0)
        );
        textAlign(LEFT); // Aligns the text to the left
        // Displays the message text at the current position and animates it moving upward
        text(
            this.comment,
            this.x,
            map(millis(), this.timeCreated, this.timeCreated + messageDuration, this.y, this.y - 50)
        );
    }
}

// Array to hold all active messages currently on the screen
var activeMessages = [];

// Function to create a new message and add it to the `activeMessages` array
function initialiseMessage() {
    activeMessages.push(new Message()); // Adds a new `Message` object to the array
    // Note: Old messages are not removed for code simplicity, even if they are expired
}

// Function to display all active messages on the screen
function drawMessages() {
    for (let i = 0; i < activeMessages.length; i++) {
        activeMessages[i].show(); // Calls the `show` method for each message
    }
}
