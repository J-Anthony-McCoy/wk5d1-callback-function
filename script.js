// Declaring all global variables
const button = document.getElementById("button");
const h2 = document.getElementById("exampleText");
const h2Text = "Here it is with a 1.5s delay";
const p = document.getElementById("exampleText2");
const pText = "This was achieved by using the 'setTimeout' method";

// function that manipulates the DOM
const newText = () => {
  h2.innerHTML = h2Text;
  p.innerHTML = pText;
};
// function that simply is visual feedback the button was clicked
const bgColor = () => {
  main.style.backgroundColor = "red";
};
//asynchronous callback function
button.addEventListener("click", (e) => {
  e.preventDefault;
  button.style.backgroundColor = "#9e6764";
  setTimeout(newText, 1500);
});
