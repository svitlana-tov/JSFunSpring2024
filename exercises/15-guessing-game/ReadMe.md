# "Guess the Number" Game Project Instructions

**OBJECTIVE**:

Create a simple command-line "Guess the Number" game where the computer selects a random number, and the player attempts to guess it based on feedback.

**Setup Steps**:

1. Initialize Your Project
   Create a GitHub repository named guess-the-number.
   Clone the repository to your machine.
   Open the project directory in your terminal

2. Prepare your Environment

```bash
npm init -y
npm install readline-sync
```

3. Create Project Files
   Create an `index.js` This will be where you write the game logic.

## Game Development Instructions

1.  Random Number Generation
    Generate a random integer within a specified range as the secret number at the start of your game:

```bash
Math.random()
```

2. Setting Up User Input
   Use readline-sync or readline to prompt the player to enter their guess.

3. Implement Game Logic
   Implement a while loop to process guesses, providing feedback on whether the guess is too high, too low, or correct.

4. Error Handling
   Validate the player's input to ensure it's a number within the expected range. Prompt for re-entry if invalid.

5. Game Over Condition
   End the game once the player guesses correctly or exhausts their attempts. Optionally, offer a replay option.

Additional Tips
Use pseudocode to outline the game flow before coding.
Break down the game logic into functions for better organization and readability.
Use clear prompts and messages for a good user experience.
