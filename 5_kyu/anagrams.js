/***

 *
 *Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


 *

 *
 */


let anagrams = (word, words) => {
    let isAnagram = (word1, word2) => {
        //  two empty objects that record which characters and how much
        let obj1 = {}
        let obj2 = {};
        for (let i = 0; i < word1.length; i++) {
            //  respective letters for each word
            letter1 = word1[i];
            letter2 = word2[i];
            if (obj1[letter1]) {
                obj1[letter1]++
            } else {
                obj1[letter1] = 1;
            }
            if (obj2[letter2]) {
                obj2[letter2]++;
            } else {
                obj2[letter2] = 1;
            }
        }
        let test1 = true;
        let test2 = true;
        for (let key in obj1) {
            if (obj1[key] !== obj2[key]) {
                test1 = false;
            }
        }
        for (let key in obj2) {
            if (obj2[key] !== obj1[key]) {
                test2 = false;
            }
        }
        return test1 && test2;
    }


    return words.filter(val => isAnagram(word, val));
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
