var Letter = require("./Letter.js")

// Word Constructor
function Word(chosenWord) {

    this.chosenWord = chosenWord,

    // Populating the array
    this.arrayOfLetterObjects = chosenWord.split("").map(function(char) {
        return new Letter(char);
    });
    
    // Returns a string corresponding to the word
    this.returnString = function() {
        strWord = "";
            for (var i = 0; i < this.arrayOfLetterObjects.length; i++) {
                strWord += this.arrayOfLetterObjects[i].showLetter();
            }
        
        // This prints the dashes or updates with letters
        console.log(strWord);
    };


    this.guess = function(letterGuessed) {

        for (var i = 0; i < this.arrayOfLetterObjects.length; i++) {
            this.arrayOfLetterObjects[i].checkLetter(letterGuessed);
        } 
    };

};

module.exports = Word;
