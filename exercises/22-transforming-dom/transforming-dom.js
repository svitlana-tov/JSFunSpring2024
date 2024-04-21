/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here

  const myImg = document.querySelector("#myImg");
  myImg.src = "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";

  const changedLink = document.querySelector("#changedLink");
  changedLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  const changedText = document.querySelector("#changedText");
  changedText.textContent = "I'm victorious";

  const changedColor = document.querySelector("#changedColor");
  changedColor.style.backgroundColor = "blue";

  const changedClass = document.querySelector("#changedClass");
  changedClass.classList.add("text-primary");

  const hideElement = document.querySelector("#hideElement");
  hideElement.style.display = "none";

  const showElement = document.querySelector("#showElement");
  showElement.style.display = "block";

  const changedButton = document.querySelector("button");
  const answer = document.querySelector("#answer");
  if (changedButton.classList.contains("btn-primary")) {
    answer.textContent = "✓ blue";
  }
})();
