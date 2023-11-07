# 'Qu'ode-Quiz

['Qu'ode Quiz](https://theoarsman.github.io/Code-Quiz/)

## Overview

This page displays Challenge #4 for our <a href="https://bootcamp.msu.edu/coding/">Coding Bootcamp</a> course.

The task was to create a Code Quiz, which I aptly named "'Qu'ode Quiz", having five mutliple choice questions related to coding.


## Criteria for the Quiz

* When the Start button is clicked, the first question and it's aswers are displayed, and the timer starts.
* When an answer is selected, the game continues to the next question and answer set.
* When an incorrect answer is selected time is subtracted from the clock. For this game, 10 seconds are deducted for each incorrect answer.
* When all the quetsions are answered, or the timer reaches 0, whichever comes first, the game is over.
* When the game is over, you can save your initials and score.

## Code Example

Here are two examples of code used within my script.js.

The first is the event listener for when the Start Button is clicked, initiating the game to start. Within this, is the code for the game to end is the for-loop reaches the end of the questions, as well as time to be deducted for incorrect answeres, and the score to add up for correct answers.

* https://github.com/TheOarsman/Code-Quiz/blob/468263680dafde9fef891490762dcd2f6b913e02/script.js#L86-L103

* https://github.com/TheOarsman/Code-Quiz/blob/468263680dafde9fef891490762dcd2f6b913e02/script.js#L121-L125

The second is the function for the game to end. Within this, is the prompt displaying what your end score was, enter your initials, and save both to local storage.

* https://github.com/TheOarsman/Code-Quiz/blob/468263680dafde9fef891490762dcd2f6b913e02/script.js#L104-L118
