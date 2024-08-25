// 1. Print numbers from 1 to 10 
counter = [1,2,3,4,5,6,7,8,9,10];
function printNumbers1_10() {
    for(var i = 0; i <+ 10; i++){
        console.log(i);
    }
}
// printNumbers1_10();

function printNumbers0_9(counter) {
    for(var i in counter){
        console.log(i);
    }
}
// printNumbers0_9(counter);

// 2. Print the odd numbers less than 100 
function printNumbers1_100_ood() {
    for(var i = 0; i <+ 100; i++){
        if(i % 2 == 1){
            console.log(i);
        }
    }
}

// printNumbers1_100_ood();

// 3. Print the multiplication table with 7 
function multiplication_table_with_7(){
    for(var i = 1;i<=10; i++){
        console.log(`7 x ${i} = ${7*i}`);
    }
}
// multiplication_table_with_7();

// 4. Print all the multiplication tables with numbers from 1 to 10 
for(var i = 1; i <= 10; i++){
    console.log(`Multiplication table for ${i}`);
    for(var j = 1; j <= 10; j++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// 5. Calculate the sum of numbers from 1 to 10

function sumOfNumbers1_10(n){
    if(n == 1){
        return 1;
    }
    return n + sumOfNumbers1_10(n - 1);
}

// console.log(sumOfNumbers1_10(10));

// 6. Calculate 10! 

function factorial(n){
    if(n==1){
        return 1;
    }
    return n*factorial(n-1);
}

// console.log(factorial(10));

// 7. Calculate the sum of even numbers greater than 10 and less than 30 
function sumOfEvenNumbers10_30(){
    var sum = 0;
    for(var i = 10; i <= 30; i++){
        if(i % 2 == 0){
            sum += i;
        }
    }
    return sum;
}

// console.log(sumOfEvenNumbers10_30());


// 8. Create a function that will convert from Celsius to Fahrenheit

function celsiusToFahrenheit(celsius){
    return celsius * 9/5 + 32;
}

// console.log(celsiusToFahrenheit(30));

// 9. Create a function that will convert from Fahrenheit to Celsius 

function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

// 10. Calculate the sum of numbers in an array of numbers 
myArrays = [-11,2,3,4,[5,6,7,8,9,10]]

var myArrays_1 = myArrays.reduce((a,b)=>a.concat(b),[])
console.log(myArrays_1)

var myArrays_2 = myArrays_1.reduce((a,b)=>a+b,0)
console.log(myArrays_2)


// 11. Calculate the average of the numbers in an array of numbers 
var myArrayLength = myArrays_1.length
console.log(myArrayLength)

var myArrays_3 = (myArrays_1.reduce((a,b)=>(a+b),0)) / myArrayLength
console.log(myArrays_3)


// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers 
function positiveNumbers(myArrays_1){
    var positiveNumbers = [];
    for(var i = 0; i < myArrays_1.length; i++){
        if(myArrays_1[i] > 0){
            positiveNumbers.push(myArrays_1[i]);
        }
    }
    return positiveNumbers;
}

// console.log(positiveNumbers(myArrays_1));

// 13. Find the maximum number in an array of numbers 
function maxNumber(myArrays_1){
    var max = myArrays_1[0];
    for(var i = 1; i < myArrays_1.length; i++){
        if(myArrays_1[i] > max){
            max = myArrays_1[i];
        }
    }
    return max;
}
// console.log(maxNumber(myArrays_1));

// 14. Print the first 10 Fibonacci numbers without recursion

function fibonacci(n){
    var fib = [0, 1];
    for(var i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}


function fibonacci2(n){
    if(n <= 1){
        return n;
    }
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}

const fibonacci3 = n => n <= 1 ? n : fibonacci3(n - 1) + fibonacci3(n - 2);

console.log(fibonacci2(10));

// 15. Create a function that will find the nth Fibonacci number using recursion 

function fibonacci4(n){
    if(n <= 1){
        return n;
    }
    return fibonacci4(n - 1) + fibonacci4(n - 2);
}

console.log(fibonacci4(10));

// 16. Create a function that will return a Boolean specifying if a number is prime 
const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
};

// console.log(isPrime(10));

// 17. Calculate the sum of digits of a positive integer number 
function sumOfDigits(n){
    var sum = 0;
    while(n){
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(sumOfDigits(123));

// 18. Print the first 100 prime numbers 
function first100PrimeNumbers(){
    var primeNumbers = [];
    var n = 2;
    while(primeNumbers.length < 100){
        if(isPrime(n)){
            primeNumbers.push(n);
        }
        n++;
    }
    return primeNumbers;
}

console.log(first100PrimeNumbers());
// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”


const findPrimesGreaterThanN = (n, p) => {
    const primes = [];
    let number = n + 1;
    
    while (primes.length < p) {
        if (isPrime(number)) {
            primes.push(number);
        }
        number++;
    }
    
    return primes;
};

console.log(findPrimesGreaterThanN(10, 5));

// 21. Rotate an array to the right 1 position 
function rotateRight(arr){
    var last = arr[arr.length - 1];
    for(var i = arr.length - 1; i > 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    return arr;
}

console.log(rotateRight([1,2,3,4,5]));

// 22. Reverse an array 
function reverseArray(arr){
    var reversed = [];
    for(var i = arr.length - 1; i >= 0; i--){
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(reverseArray([1,2,3,4,5]));
// 23. Reverse a string 
// 24. Create a function that will merge two arrays and return the result as a new array 
// 25. Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both 
// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second


