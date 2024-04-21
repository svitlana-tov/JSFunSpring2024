/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  const li = document.querySelector("li");
  console.log(li);

  const myIdEl = document.querySelector("#myId");
  console.log(myIdEl);

  const warningLi = document.querySelectorAll(".bg-warning");
  warningLi.forEach((item) => {
    console.log(item);
  });

  const targetMeButton = document.querySelector("#targetMe");
  console.log(targetMeButton);

  const socialMedias = document.querySelectorAll("#socialMedia");
  socialMedias.forEach((media) => {
    console.log(media);
  });

  const targetedCell = document.querySelectorAll("div#myRow div.col");
  targetedCell.forEach((cell) => {
    console.log(cell);
  });
})();
