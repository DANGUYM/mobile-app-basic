// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
function distinctArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(distinctArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3]));


// 28. Calculate the sum of first 100 prime numbers and return them in an array

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function sumOfFirst100PrimeNumbers() {
    let sum = 0;
    let count = 0;
    let i = 2;
    let result = [];
    while (count < 100) {
        if (isPrime(i)) {
            sum += i;
            result.push(i);
            count++;
        }
        i++;
    }
    return result;
}
console.log(sumOfFirst100PrimeNumbers());




// 29. Print the distance between the first 100 prime numbers

function distanceBetweenFirst100PrimeNumbers() {
    let result = [];
    let previous = 2;
    for (let i = 3; i < 1000; i++) {
        if (isPrime(i)) {
            result.push(i - previous);
            previous = i;
        }
    }
    return result;
}
console.log(distanceBetweenFirst100PrimeNumbers());



// 30. Create a function that will add two positive numbers of indefinite size. The numbers
// are received as strings and the result should be also provided as string.
// 31. Create a function that will return the number of words in a text
// 32. Create a function that will capitalize the first letter of each word in a text
// 33. Calculate the sum of numbers received in a comma delimited string
// 34. Create a function that returns an array with words inside a text.
// 35. Create a function to convert a CSV text to a “bi-dimensional” array
// 36. Create a function that converts a string to an array of characters
// 37. Create a function that will convert a string in an array containing the ASCII codes of each character
// 38. Create a function that will convert an array containing ASCII codes in a string
// 39. Implement the Caesar cypher
// 40. Implement the bubble sort algorithm for an array of numbers
// 41. Create a function to calculate the distance between two points defined by their x, y
// coordinates
// 42. Create a function that will return a Boolean value indicating if two circles
// defined by center coordinates and radius are intersecting
// 43. Create a function that will receive a bi-dimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the
// number
// 44. Create a function that will convert a string containing a binary number into a
// number
// 45. Create a function to calculate the sum of all the numbers in a jagged array
// (contains numbers or other arrays of numbers on an unlimited number of
// levels)
// 46. Find the maximum number in a jagged array of numbers or array of numbers
// 47. Deep copy a jagged array with numbers or other arrays in a new array
// 48. Create a function to return the longest word in a string
// 49. Shuffle an array of strings
// 50. Create a function that will receive n as argument and return an array of n
// random numbers from 1 to n. The numbers should be unique inside the array.
// 51. Find the frequency of letters inside a string. Return the result as an array of
// arrays. Each subarray has 2 elements: letter and number of occurrences.
// 52. Calculate Fibonacci(500) with high precision (all digits)
// 53. Calculate 70! with high precision (all digits)