function multiply(num1, num2, num3) {
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return "Numbers must not be the same";
    }

    return num1 * num2 * num3;
}

console.log(multiply(2, 3, 4));


const convertToSeconds = function(minutes) {
    return minutes * 60;
};

console.log(convertToSeconds(5));


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(98));


function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));


function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Javascript"));


function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(2));   // true
console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
console.log(isPrime(15));  // false