// content.js

let isCKeyPressed = false;

document.addEventListener("keydown", function (event) {
  if (event.key === "c") {
    isCKeyPressed = true;

    // Apply a style to change the cursor to grab when the "c" key is pressed
    document.body.style.cursor = "grab";
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "c") {
    isCKeyPressed = false;

    // Reset the cursor style to default when the "c" key is released
    document.body.style.cursor = "default";
  }
});

document.addEventListener("click", function (event) {
  // Handle the click event if needed
  let clickedElement = event.target;
  if (clickedElement) {
    // Your logic for handling the click event
    // For example, storing data in sessionStorage
    if (isCKeyPressed) {
      let elementContent = clickedElement.innerText;
      let key = "savedText" + Date.now();
      sessionStorage.setItem(key, elementContent);

      // Prevent the default behavior for link clicks
      if (clickedElement.tagName === "A") {
        event.preventDefault();
      }
    }
  }
});
