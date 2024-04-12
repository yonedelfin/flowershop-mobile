var currentMessageIndex = 0; // Keep track of the current message index

//
// Function to change the flower GIF when clicked
function changeFlower() {
  var flowerImg = document.getElementById("flower-img");
  // You can change the source of the flower GIF here
  flowerImg.src = "flower.gif"; // Replace "new_flower.gif" with your desired flower GIF file
  
  addMessage(); // Add or replace a message when the flower is clicked
}


// Function to add or replace a message
function addMessage() {
  var messagesContainer = document.getElementById("messages");
  var messages = [
    "every day with you feels like an adventure",
    "you make me feel loved and special",
    "i hope you feel the same way",
    "life won't always be easy, but i'll always be here by your side.",
    "to the strongest person i know,",
    "the one who holds a special place in my heart",
    "juls, will you be my girlfriend?",
    ""
  ];

 // If there are existing message elements, remove them
 while (messagesContainer.firstChild) {
  messagesContainer.removeChild(messagesContainer.firstChild);
}

// Get the next message
var message = messages[currentMessageIndex];
// Increment the message index for the next click
currentMessageIndex = (currentMessageIndex + 1) % messages.length;

// Create a new message element
var messageElement = document.createElement("div");

// If it's the last message, create a hyperlink element
if (currentMessageIndex === messages.length - 1) {
  var linkElement = document.createElement("a");
  linkElement.textContent = message;
  linkElement.href = "choices.html"; // Set the URL you want to redirect to

  // Apply CSS styles to customize the appearance of the hyperlink
  linkElement.style.color = "blue"; // Change text color
  linkElement.style.textDecoration = "underline"; // Underline the text
  // You can add more CSS styles as needed

  messageElement.appendChild(linkElement);
} else {
  messageElement.textContent = message;
}

// Add the message element to the messages container
messagesContainer.appendChild(messageElement);
}