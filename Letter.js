var inquirer = require("inquirer");

function Letter(letterInWord) {
//   A string value to store the character for the letter
    this.letter = letterInWord,
    
//   A boolean value that stores whether that letter has been guessed yet
    this.hasBeenGuessed = false,

//   A function that returns the character if the letter has been guessed, or a placeholder 
    this.showLetter = function() {

        if (this.hasBeenGuessed === true) {
            return this.letter;
        } else {
           return "_";    
        }
    };

//   A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.checkLetter = function(letterGuessed) {

        if (letterGuessed.toUpperCase() === this.letter.toUpperCase()) {
            this.hasBeenGuessed = true;
        }
    };
};

module.exports = Letter;