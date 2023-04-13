//Q#1//
console.log("Question # 1")
console.log("------------")

let set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let result = sumOfEvenNumbers(set);
function sumOfEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log("Sum Of All Even Number =" + result);
console.log("----------------------")

//Q#2//

console.log("Question # 2")
console.log("------------")


let inputString = "Education!";
let numVowels = countVowels(inputString);

function countVowels(string) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (string[i] == vowels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}

console.log(inputString)
console.log("Number of vowels= " + numVowels);

console.log("----------------------")

// Q#3//

console.log("Question # 3")
console.log("------------")

let strings = ["Pakistan", "Iran", "Afghanistan", "Qustuntunya", "Turkey", "United Nation"]

function findStringLength(strings) {
    let stringLength = strings[0].length;
    
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > stringLength) {
            stringLength = strings[i].length;
        }
    }

    console.log("Longest string length = " + stringLength)
}
findStringLength(strings);

console.log("--------------------------")

//Q#4//
console.log("Question # 4")
console.log("------------")
let result2 = average([89,90,78.5,66.67,87,98]);

function average(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}



console.log("Average Of All The Numbers = " + result2);


console.log("-----------------------------------------------")

//Q#5//

console.log("Question # 5")
console.log("------------")

function findKeys() 
{
    let person = {
        name: "Sohail Hussain", age: 40, city: "Karachi",
    };

    return Object.keys(person);
}

console.log("Required Array is :  " + findKeys());
   

console.log("-----------------------------------------------")

//Q#6//

console.log("Question # 6")
console.log("------------")

function objectKeyValues(person) {
    let names = [];

    for (let index = 0; index < person.length; index++) {
        names.push(person[index].name);
    }

    return names;
}

let person = [
    { name: "Shahid Murad", age: 42 },
    { name: "Ahmed Raza", age: 36 },
    { name: "Raees Ahmed", age: 41 },
];

result3 = objectKeyValues(person);
console.log(result3);
   

console.log("-----------------------------------------------")

//Q#8//
console.log("Question # 8")
console.log("------------")

productOfNumbers([2,2,4,4,6,6,8,8,9]);

function productOfNumbers(numbers) {
    let product = 1;

    for (let i = 0; i < numbers.length; i++) {
        product *= numbers[i];
    }

    console.log("Product Of all numbers = " + product);
}


console.log("-----------------------------------------------")