(function () {
  /**
   * You have a few problems to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */
  // Write your answer here
  /**
   * Problem 1: Display the results of the world's most pointless search engine.
   *
   * When the user types in the textbook and either clicks "Search" button or hits the enter key,
   * display the message "No results for ___ found" inside of this <p></p> below.
   * For example, if the user searches for "Indian Ocean", display "No results for Indian Ocean found".
   * (Since there are no oceans near Albany, NY, the search engine should
   * display the "No results for ___ found" message every time.)
   *
   * The exercise must be completed with a form handler
   * and you must prevent the page from refreshing when the form is submitted.
   */
  // Write your answer here

  // Step 1: Target
  const form = document.querySelector("#form");
  const searchInput = document.querySelector("#searchInput");
  const searchResult = document.querySelector("#searchResult");
  // Step 2: React to event
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // Step 3: Do something - stop the form from refreshing and display "No results for ____ found".

    searchResult.textContent = `No results for ${searchInput.value} found`;
  });
  /**
   * Problem 2: Agree to the terms and conditions
   *
   * Whenever the user clicks the "Continue" button, if she has not agreed to the terms,
   * the error "You must agree to the terms and conditions" should appear
   * and the label "I Agree to the Terms and Conditions" should turn red.
   * If she has, then display "Thank you for signing up".
   *
   * To see an example of what this looks like:
   * When the page loads, @see terms-on-load.png
   * When the user clicks on the "Continue" button without checking the "I Agree ..." checkbox,
   * @see terms-on-error.png
   * When the user checks the "I Agree ..." checkbox and click "Continue",
   * @see terms-on-success.png
   *
   * To start, you will need to hide some element on the page and change the input's classes.
   */
  // Write your answer here
  const continueForm = document.querySelector("#continueForm");
  const formCheck = document.querySelector("#form-check");
  const textSuccess = document.querySelector(".text-success");
  const textDanger = document.querySelector(".text-danger");

  continueForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formCheck.checked) {
      textSuccess.style.display = "block";
      textDanger.style.display = "none";
      formCheck.classList.remove("is-invalid");
    } else {
      textDanger.style.display = "block";
      textSuccess.style.display = "none";
      formCheck.classList.add("is-invalid");
    }
  });
})();
