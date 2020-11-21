function toWeirdCase(string) {
    let words = string.split(' ');
    let fixedSentence = words.map(word => {
        let split = word.split('');
        let fixed = split.map((letter, i) => {
            if (i % 2) {
                return letter;
            } else {
                return letter.toUpperCase();
            }
        })
        return fixed.join('');
    });
    return fixedSentence.join(' ');
}

console.log(toWeirdCase('this is a test'));
