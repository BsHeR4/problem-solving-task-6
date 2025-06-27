// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.

// Example:
// Input: "javascript"
// Output: "tpircsavaj"


/**
 * @function reverseWord
 * @description Reverses the input string using recursion.
 * @param {string} word - The word to be reversed.
 * @param {string} [reversedWord=""] - Accumulates the reversed characters.
 * @param {number} [index=0] - Current index in the original word.
 * @returns {string} The reversed string.
 */
function reverseWord(word, reversedWord = "", index = 0) {

    if (index == word.length)
        return reversedWord;

    return reverseWord(word, word[index] + reversedWord, ++index);
}

let reversedWord = reverseWord("javascript");
console.log(reversedWord);

/*
 1- j
 2- aj
 3- vaj
 4- avaj
 5- savaj
 6- csavaj
 7- rcsavaj
 8- ircsavaj
 9- pircsavaj
 10- tpircsavaj
*/













// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (reads the same forwards and backward). It should return true if it is a palindrome and false if it is not.

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

/**
 * @function palindrome
 * @description Checks if a string is a palindrome using recursion.
 * @param {string} word - The string to check.
 * @param {number} [left=0] - Left pointer.
 * @param {number} [right=word.length - 1] - Right pointer.
 * @returns {boolean} True if palindrome, otherwise false.
 */
function palindrome(word, left = 0, right = word.length - 1) {
    if (left >= right)
        return true;
    if (word[left] != word[right])
        return false;

    return palindrome(word, ++left, --right);
}

console.log(palindrome("madam"));















// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in it.

// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9

/**
 * @function maxIndex
 * @description Recursively finds the index of the maximum number in the array.
 * @param {number[]} array - The array to search.
 * @param {number} [max=0] - Index of the current max value.
 * @param {number} [index=1] - Current index being evaluated.
 * @returns {number} The maximum number in the array.
 */
function maxIndex(array, max = 0, index = 1) {

    if (index == array.length)
        return array[max];

    if (array[index] > array[max])
        max = index;

    return maxIndex(array, max, ++index);

}

/**
 * @function largestNumber
 * @description Finds the largest number in the array.
 * @param {number[]} array - The array to evaluate.
 * @returns {number|undefined} Largest number or undefined for empty arrays.
 */
function largestNumber(array) {

    if (array.length == 0)
        return undefined;

    return maxIndex(array);
}

console.log(largestNumber([1, 5, 3, 9, 2]));
















// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number. (The factorial of 5 is 5 * 4 * 3 * 2 * 1).

// Example:
// Input: 5
// Output: 120

/**
 * @function factorial
 * @description Calculates factorial of a number using recursion.
 * @param {number} number - The number to calculate factorial for.
 * @returns {number} The factorial result.
 */
function factorial(number) {
    if (number == 1)
        return number;
    return number * factorial(--number);
}
console.log(factorial(5));
















// 5. Prime Number Check
// Problem: Write a function that takes an integer num and checks if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function should return true if the number is prime and false otherwise.

// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)


/**
 * @function primeNumber
 * @description Checks if a number is prime using recursion.
 * @param {number} number - The number to check.
 * @param {number} [divisor=2] - Current divisor being tested.
 * @returns {boolean} True if prime, otherwise false.
 */
function primeNumber(number, divisor = 2) {
    if (number == divisor)
        return true;
    if (number % divisor == 0 || number <= 1)
        return false;
    return primeNumber(number, ++divisor)
}
console.log(primeNumber(7));














// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array containing only the unique elements (no duplicates).

// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

/**
 * @function removeDuplicated
 * @description Removes duplicates from the array.
 * @param {any[]} array - The array to process.
 * @param {any[]} [unduplicatedArray=[]] - Array holding unique values.
 * @param {number} [arrayIndex=0] - Current index in the original array.
 * @param {number} [unduplicatedArrayIndex=0] - Index in the new array.
 * @returns {any[]} Array with unique elements.
 */
function removeDuplicated(array, unduplicatedArray = [], arrayIndex = 0, unduplicatedArrayIndex = 0) {

    if (arrayIndex == array.length)
        return unduplicatedArray;
    if (checkDuplicated(array[arrayIndex], unduplicatedArray)) {

        unduplicatedArray[unduplicatedArrayIndex] = array[arrayIndex];
        unduplicatedArrayIndex++;
    }

    return removeDuplicated(array, unduplicatedArray, ++arrayIndex, unduplicatedArrayIndex);

}

/**
 * @function checkDuplicated
 * @description Checks if an element is already in the unique array.
 * @param {any} element - Element to check.
 * @param {any[]} unduplicatedArray - Array of unique elements.
 * @param {number} [index=0] - Current index in unique array.
 * @returns {boolean} True if not found (unique), false if duplicate.
 */
function checkDuplicated(element, unduplicatedArray, index = 0) {

    if (index == unduplicatedArray.length)
        return true;

    if (unduplicatedArray[index] == element)
        return false;

    return checkDuplicated(element, unduplicatedArray, ++index);
}
console.log(removeDuplicated([1, 2, 2, 3, 4, 4, 5, 7]));

















// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100. Write a function to find the missing number.

// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55.
// Output: 55



/**
 * @function missingNumber
 * @description Finds the missing number in a range-based sequence.
 * @param {number[]} array - Array missing one element in sequence.
 * @param {number} start - Start of the expected sequence.
 * @param {number} end - End of the expected sequence.
 * @param {number} [index=0] - Index in the array.
 * @param {number} [sequence=start] - Current expected number in sequence.
 * @returns {number|string} The missing number or "not found".
 */
function missingNumber(array, start, end, index = 0, sequence = start) {
    if (index == array.length && sequence != end)
        return 'not found';
    if (array[index] != sequence)
        return sequence;
    return missingNumber(array, start, end, ++index, ++sequence);
}

/**
 * @function generateArrayWithMissingNumber
 * @description Generates a sequential array with one missing number.
 * @param {number} start - Start of sequence.
 * @param {number} end - End of sequence.
 * @param {number} missing - The number to omit.
 * @param {number[]} [array=[]] - Accumulator array.
 * @param {number} [index=0] - Current index in result array.
 * @returns {number[]} Array with one missing value.
 */
function generateArrayWithMissingNumber(start, end, missing, array = [], index = 0) {
    if (start > end)
        return array;

    if (start != missing)
        array[index++] = start;

    return generateArrayWithMissingNumber(start + 1, end, missing, array, index);

}

console.log(missingNumber(generateArrayWithMissingNumber(1, 1000, 250), 1, 1000));














// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized.

// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"


/**
 * @function capitalizeSentence
 * @description Capitalizes the first letter of each word in a sentence.
 * @param {string} sentence - The input sentence.
 * @param {number} [index=0] - Current index.
 * @param {string} [capitalizedSentence=""] - Accumulator string.
 * @returns {string} Capitalized sentence.
 */
function capitalizeSentence(sentence, index = 0, capitalizedSentence = '') {
    if (index == sentence.length)
        return capitalizedSentence;

    if (sentence[index - 1] == ' ' || index == 0)
        return capitalizeSentence(sentence, index + 1, capitalizedSentence + capitalizeLetter(sentence[index]));

    return capitalizeSentence(sentence, index + 1, capitalizedSentence + sentence[index]);
}

/**
 * @function capitalizeLetter
 * @description Converts a lowercase letter to uppercase.
 * @param {string} letter - Single lowercase character.
 * @returns {string} Capital letter.
 */
function capitalizeLetter(letter) {
    return String.fromCharCode((letter.charCodeAt() - 32));
}

console.log(capitalizeSentence('hello world from javascript'));












// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).

// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false


/**
 * @function anagrams
 * @description Checks if two strings are anagrams of each other.
 * @param {string} firstWord - First string.
 * @param {string} seconedWord - Second string.
 * @returns {boolean} True if anagrams, otherwise false.
 */
function anagrams(firstWord, seconedWord) {
    firstWord = countLetters(firstWord);
    seconedWord = countLetters(seconedWord);

    return checkObjects(firstWord, seconedWord);
}

/**
 * @function checkObjects
 * @description Recursively compares two frequency maps.
 * @param {Object} firstWord - Frequency map of first word.
 * @param {Object} seconedWord - Frequency map of second word.
 * @param {string[]} [keys=Object.keys(firstWord)] - Keys to compare.
 * @param {number} [index=0] - Current key index.
 * @returns {boolean} True if frequency maps match, false otherwise.
 */
function checkObjects(firstWord, seconedWord, keys = Object.keys(firstWord), index = 0) {
    if (keys.length != Object.keys(seconedWord).length)
        return false;

    if (index == keys.length)
        return true;

    let key = keys[index];

    if (firstWord[key] != seconedWord[key])
        return false;

    return checkObjects(firstWord, seconedWord, keys, index + 1);
}

console.log(anagrams("silent", "listen"));
















// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.

// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]

/**
 * @function chunkArray
 * @description Splits array into subarrays of fixed size.
 * @param {any[]} array - Original array.
 * @param {number} size - Chunk size.
 * @param {any[][]} [subarrays=[]] - Result container.
 * @param {number} [arrayIndex=0] - Current index in original array.
 * @param {number} [subarraysIndex=0] - Current subarray index.
 * @param {number} [subarrayInnerIndex=0] - Index within a chunk.
 * @returns {any[][]} Array of chunks.
 */
function chunkArray(array, size, subarrays = [], arrayIndex = 0, subarraysIndex = 0, subarrayInnerIndex = 0) {
    if (arrayIndex == array.length)
        return subarrays;

    if (typeof subarrays[subarraysIndex] == 'undefined')
        subarrays[subarraysIndex] = [];

    if (subarrays[subarraysIndex].length < size) {
        subarrays[subarraysIndex][subarrayInnerIndex] = array[arrayIndex];
        return chunkArray(array, size, subarrays, arrayIndex + 1, subarraysIndex, subarrayInnerIndex + 1);
    }
    return chunkArray(array, size, subarrays, arrayIndex, subarraysIndex + 1);
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
















// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.

// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]

/**
 * @function sumTarget
 * @description Finds first pair of numbers that sum to target.
 * @param {number[]} array - Array to search.
 * @param {number} target - Target sum.
 * @param {number} [numberIndex=0] - Index of first number.
 * @param {number} [index=1] - Index of second number.
 * @returns {number[]|string} Pair that sums to target or "not found".
 */
function sumTarget(array, target, numberIndex = 0, index = 1) {
    if (numberIndex == array.length)
        return 'not found';

    let sum = array[numberIndex] + array[index];

    if (sum == target)
        return [array[numberIndex], array[index]];

    if (index == array.length)
        return sumTarget(array, target, numberIndex + 1, numberIndex + 2);

    return sumTarget(array, target, numberIndex, index + 1);
}

console.log(sumTarget([10, 5, 2, 7, 8, 3], 10));













// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]

/**
 * @function rotateArray
 * @description Rotates array to the left by n positions.
 * @param {any[]} array - Array to rotate.
 * @param {number} number - Number of positions to rotate.
 * @param {any[]} [newArray=[]] - Resulting rotated array.
 * @param {number} [index=0] - Current index in original array.
 * @returns {any[]} Rotated array.
 */
function rotateArray(array, number, newArray = [], index = 0) {
    if (index == array.length)
        return newArray;

    let newIndex = index - number;

    if (newIndex < 0) {
        newArray[newIndex + array.length] = array[index];
        return rotateArray(array, number, newArray, index + 1);
    }

    newArray[newIndex] = array[index];

    return rotateArray(array, number, newArray, index + 1);

}

console.log(rotateArray([1, 2, 3, 4, 5], 2));

/**
 * 1- نريد ازاحة العدد الحالي بمقدار رقم نحو اليسار
 * 2- لمعرفة فهرس العنصر المراد ازاحته نحو اليسار يجب طرح الرقم من الفهرس الحالي
 * index - number
 * 3- في حال كان طرح الرقم هو اصغر من الصفر يجب معالجة الحالة
 * ويتم هذا بجمع ناتج طرح الفهرس من الرقم مجموعاً اليه طول المصفوفةابتداء من الفهرس 1
 * اي array.length
 */















// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]


/**
 * @function findIntersection
 * @description Returns elements common to both arrays.
 * @param {any[]} firstArray - First array.
 * @param {any[]} seconedArray - Second array.
 * @param {any[]} [intersectionArray=[]] - Result container.
 * @param {number} [firstIndex=0] - Index in first array.
 * @param {number} [seconedIndex=0] - Index in second array.
 * @param {number} [intersectionIndex=0] - Index in result array.
 * @returns {any[]} Array of common elements.
 */
function findIntersection(firstArray, seconedArray, intersectionArray = [], firstIndex = 0, seconedIndex = 0, intersectionIndex = 0) {
    if (firstIndex == firstArray.length)
        return intersectionArray;

    if (firstArray[firstIndex] == seconedArray[seconedIndex]) {
        intersectionArray[intersectionIndex] = firstArray[firstIndex];
        return findIntersection(firstArray, seconedArray, intersectionArray, firstIndex + 1, 0, intersectionIndex + 1);
    }

    if (seconedIndex == seconedArray.length - 1)
        return findIntersection(firstArray, seconedArray, intersectionArray, firstIndex + 1, 0, intersectionIndex);

    return findIntersection(firstArray, seconedArray, intersectionArray, firstIndex, seconedIndex + 1, intersectionIndex);
}
console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
















// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }


/**
 * @function countLetters
 * @description Counts character frequency in a string or array.
 * @param {string|any[]} word - Input string or array.
 * @param {number} [letterIndex=0] - Current key index.
 * @param {number} [wordIndex=0] - Comparison index.
 * @param {Object} [object={}] - Frequency map.
 * @param {number} [count=0] - Counter.
 * @returns {Object} Character frequency map.
 */
function countLetters(word, letterIndex = 0, wordIndex = 0, object = {}, count = 0) {

    if (typeof object[word[letterIndex]] != 'undefined')
        return countLetters(word, letterIndex + 1, 0, object, 0);

    if (letterIndex == word.length)
        return object;

    if (wordIndex == word.length) {
        object[word[letterIndex]] = count;
        return countLetters(word, letterIndex + 1, 0, object, 0);
    }

    if (word[letterIndex] == word[wordIndex])
        count++;

    return countLetters(word, letterIndex, wordIndex + 1, object, count);
}

console.log(countLetters("hello"));


















// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]

/**
 * @function flattenArray
 * @description Recursively flattens a nested array into a single-level array.
 * @param {any[]} array - Input nested array.
 * @param {any[]} [newArray=[]] - Result array.
 * @param {number} [index=0] - Index in original array.
 * @param {number} [newArrayIndex=0] - Index in result array.
 * @returns {any[]} Flattened array.
 */
function flattenArray(array, newArray = [], index = 0, newArrayIndex = 0) {

    if (index == array.length)
        return newArray;

    if (typeof array[index] == 'object') {
        newArrayIndex = flattenArray(flattenArray(array[index]), newArray, 0, newArrayIndex).length - 1;
    }
    else {
        newArray[newArrayIndex] = array[index];
    }

    return flattenArray(array, newArray, index + 1, newArrayIndex + 1);
}
console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));

/**
 *
 * 1- معرفة ما اذا كان الفهرس الحالي يدل على عنصر عادي او مصفوفة
 * لمعرفة على ماذا يدل يجب علينا فحصه عن طريق typeof: (بما ان isArray غير مسموح بها على ما اذكر كما قيل ضمن الجلسة)
 *
 * اذا كان عنصر عادي يقطع الشرط ونقوم بتخزينه ضمن مصفوفة جديدة
 * عن طريق تمرير فهرس خاص بالمصفوفة الجديدة
 * ومن ثم نقوم بزيادة فهرس المصفوفة الاصل
 *
 * اذا كان العنصر عبارة عن مصفوفة يدخل الى الشرط ويتم استدعاءالتابع ذاته
 * ونقوم بتخزين نتيجة هذا التابع باستخدام .length بالفهرس الخاص بالمصفوفة الجديدة لمعرفة الطول الجديد
 *
 */














// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"


/**
 * @function findLongestWord
 * @description Returns the longest word in a sentence.
 * @param {string} sentence - Input sentence.
 * @param {string[]} [words=chunkSentence(sentence)] - Array of words.
 * @param {number} [index=1] - Current index in words.
 * @param {string} [longestWord=words[0]] - Longest word so far.
 * @returns {string} The longest word.
 */
function findLongestWord(sentence, words = chunkSentence(sentence), index = 1, longestWord = words[0]) {
    if (index == words.length)
        return longestWord;

    let currentWord = words[index];
    let currentLength = countWord(countLetters(currentWord));
    let longestLength = countWord(countLetters(longestWord));

    if (currentLength > longestLength)
        longestWord = currentWord;

    return findLongestWord(sentence, words, index + 1, longestWord);

}

/**
 * @function countWord
 * @description Counts total number of characters in a frequency object.
 * @param {Object|number} word - Frequency object.
 * @param {number} [index=0] - Current index.
 * @param {number[]} [values=Object.values(word)] - Frequency values.
 * @returns {number} Total count.
 */
function countWord(word, index = 0, values = Object.values(word)) {
    if (index == values.length)
        return word;
    if (index == 0)
        word = 0;

    return countWord(word + values[index], index + 1, values);
}

/**
 * @function chunkSentence
 * @description Splits a sentence into words (by space).
 * @param {string} sentence - Input sentence.
 * @param {string[]} [words=[]] - Words array.
 * @param {number} [wordsIndex=0] - Word index.
 * @param {number} [sentenceIndex=0] - Sentence index.
 * @returns {string[]} Array of words.
 */
function chunkSentence(sentence, words = [], wordsIndex = 0, sentenceIndex = 0,) {
    if (sentenceIndex == sentence.length)
        return words;

    if (sentence[sentenceIndex] != ' ') {
        if (typeof words[wordsIndex] == "undefined")
            words[wordsIndex] = '';

        words[wordsIndex] += sentence[sentenceIndex]

        return chunkSentence(sentence, words, wordsIndex, sentenceIndex + 1);
    }

    return chunkSentence(sentence, words, wordsIndex + 1, sentenceIndex + 1);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));









// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'

/**
 * @function mostFrequent
 * @description Returns the most frequent element in an array.
 * @param {any[]} array - Input array.
 * @returns {any} The most frequent element.
 */
function mostFrequent(array) {

    array = countLetters(array);
    return compareMaxValues(Object.keys(array), Object.values(array))
}

/**
 * @function compareMaxValues
 * @description Finds the key with the highest value.
 * @param {string[]} keys - Keys of frequency map.
 * @param {number[]} values - Values of frequency map.
 * @param {number} [index=0] - Current index.
 * @param {number} [maxIndex=1] - Index of max value.
 * @returns {string} Key with highest frequency.
 */
function compareMaxValues(keys, values, index = 0, maxIndex = 1) {
    if (index == values.length)
        return keys[maxIndex];

    if (values[index] > values[maxIndex])
        maxIndex = index;

    return compareMaxValues(keys, values, index + 1, maxIndex);

}

console.log(mostFrequent([1, 2, 3, 2, 2, 4, 5, 2]));

















// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age. Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.

// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)




/**
 * @function bubbleSort
 * @description Sorts an array of objects by the "age" property using Bubble Sort.
 * @param {Object[]} array - Array of objects with an "age" property.
 * @param {number} [firstIndex=0] - Current index being compared.
 * @param {number} [seconedIndex=1] - Current pass number.
 * @returns {Object[]} Sorted array.
 */
function bubbleSort(array, firstIndex = 0, seconedIndex = 1) {
    if (seconedIndex == array.length)
        return array;

    if (firstIndex == array.length - seconedIndex)
        return bubbleSort(array, 0, seconedIndex + 1);

    if (array[firstIndex + 1].age < array[firstIndex].age) {
        let temp = array[firstIndex];
        array[firstIndex] = array[firstIndex + 1];
        array[firstIndex + 1] = temp;
    }

    return bubbleSort(array, firstIndex + 1, seconedIndex);
}
console.log(bubbleSort([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }, { name: "Charlie", age: 1 }, { name: "Charlie", age: 10 }, { name: "Charlie", age: 5 }]));








// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.

// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)

/**
 * @function nonRepeatingChar
 * @description Finds the first non-repeating character in a string.
 * @param {string} string - Input string.
 * @returns {string} First unique character or 'not found'.
 */
function nonRepeatingChar(string) {

    string = countLetters(string);
    return compareMinValues(Object.keys(string), Object.values(string));
}

/**
 * @function compareMinValues
 * @description Returns the first key with value of 1.
 * @param {string[]} keys - Frequency map keys.
 * @param {number[]} values - Frequency map values.
 * @param {number} [index=0] - Current index.
 * @returns {string} First non-repeating character or 'not found'.
 */
function compareMinValues(keys, values, index = 0) {
    if (index == values.length)
        return 'not found';

    if (values[index] == 1)
        return keys[index];

    return compareMinValues(keys, values, index + 1);
}
console.log(nonRepeatingChar("swiss"));
















// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]

/**
 * @function symmetric
 * @description Finds elements present in one array but not both.
 * @param {any[]} firstArray - First array.
 * @param {any[]} seconedArray - Second array.
 * @returns {any[]} Symmetric difference array.
 */
function symmetric(firstArray, seconedArray) {

    let array = countLetters(mergeArray(firstArray, seconedArray));

    return filterArray(Object.keys(array), Object.values(array));
}


/**
 * @function filterArray
 * @description Filters keys that occur exactly once.
 * @param {string[]} keys - Frequency map keys.
 * @param {number[]} values - Frequency map values.
 * @param {any[]} [newArray=[]] - Result array.
 * @param {number} [index=0] - Current index.
 * @param {number} [newArrayIndex=0] - Index in result array.
 * @param {number} [numberOfRepeatElement=1] - Required occurrence count.
 * @returns {any[]} Filtered array.
 */
function filterArray(keys, values, newArray = [], index = 0, newArrayIndex = 0, numberOfRepeatElement = 1) {
    if (index == keys.length)
        return newArray;

    if (values[index] == numberOfRepeatElement) {
        newArray[newArrayIndex] = keys[index];
        return filterArray(keys, values, newArray, index + 1, newArrayIndex + 1);
    }

    return filterArray(keys, values, newArray, index + 1, newArrayIndex);

}

/**
 * @function mergeArray
 * @description Merges two arrays into one.
 * @param {any[]} array - First array (modified in place).
 * @param {any[]} newArray - Array to append.
 * @param {number} [index=array.length] - Start index to append at.
 * @param {number} [newArrayIndex=0] - Index in new array.
 * @returns {any[]} Merged array.
 */
function mergeArray(array, newArray, index = array.length, newArrayIndex = 0) {

    if (newArrayIndex == newArray.length)
        return array;

    array[index] = newArray[newArrayIndex];

    return mergeArray(array, newArray, index + 1, newArrayIndex + 1);
}

console.log(symmetric([1, 2, 3], [3, 4, 5]));