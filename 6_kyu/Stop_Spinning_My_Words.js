// Write a function that takes in a string of one or more words,
// and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word
//  is present.

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

let spinWords = string => {
    let words = string.split(' ');
    let spinWord = word => {
        let solution = '';
        for (let i = 0; i < word.length; i++) {
            solution = solution + word[word.length - i - 1];
        }
        return solution;
    }
    let reversedWords = words.map(el => {
        if (el.length >= 5) {
            return spinWord(el);
        } else {
            return el;
        }
    });
    return reversedWords.join(' ');
}

console.log(spinWords( "Hey fellow warriors" )); //=> returns "Hey wollef sroirraw"
spinWords( "This is a test")// => returns "This is a test"
spinWords( "This is another test" ) //=> returns "This is rehtona test"
