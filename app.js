// What does the following code return?

// new Set([1,1,2,2,3,4])
// [1,2,3,4];

// What does the following code return?

// [...new Set("referee")].join("")
// 'ref'

// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);
// {[1,2,3] => false}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = (arr) => [...new Set(arr)].length === arr.length ? false : true;

// Write a function called vowelCount which accepts a string and returns a map where the keys are VOWELS and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }
function isVowel(letter){
    return "aeiou".includes(letter);
}

const vowelCount = (string) => {
    const newMap = new Map();
    for (let letter of string){
        let lowerCase = letter.toLowerCase();
        if (isVowel(lowerCase)){
            if (newMap.has(lowerCase)){
                newMap.set(lowerCase, newMap.get(lowerCase) +1);
            } else {
                newMap.set(lowerCase, 1);
            }
        }
    }
return newMap;
}
