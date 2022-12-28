//  Ex. 1

// 1.
function oneToTen(){
    for (let i=0; i<10; i++){
        console.log(i+1);
    }
}
oneToTen();

// 2.

function evenOneToTen(){
    for (let i=1; i<=10; i++){
        if (i%2 == 0){
            console.log(i);
        }
    }
}

evenOneToTen();

// 3. 
function allEvenToNum(num){
    let result = []
    for (i=0;i<=num;i+=2){
        result.push(i);
    }
    console.log(result);
}

console.log('all even')
allEvenToNum(40);

// 4.
function allExceptThirteen(){
    for(i=0;i<=20;i++){
        if (i === 13){
            continue;
        }
    console.log(i);
    }
}
allExceptThirteen();

// 5.

function oneToTenReversed(){
    for (i=10;i>=0;i--){
        console.log(i);
    }
}

oneToTenReversed();

// 6.
function stopAtSeven(){
    let i = 0;
    while (i<=10){
        console.log(++i);
        if (i === 7){
            break;
        }
    }
}

stopAtSeven();

// 7.
const array1 = [1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2]
function printArray(arr){
    for (i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
console.log('EX. 7')
printArray(array1);

// 8. 
function printEvenArray(arr){
    for (i=0;i<arr.length;i++){
        if (arr[i]%2===0){
            console.log(arr[i]);
        }
    }
}
console.log('EX. 8');
printEvenArray(array1);

// 9.
function arraySum(arr){
    let sum=0;
    for (i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}

console.log(arraySum(array1));

// 10.
function countLetters(s){
    let lettersCount = 0;

    for (let i=0;i<s.length;i++){
        lettersCount+=1;
    }
    return lettersCount;
}

console.log(countLetters('hello'));

// 11.
array2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
evens = [];
odds = [];

for (i=0; i<array2.length; i++){
    if (array2[i]%2===0){
        evens.push(array2[i]);
    }
    else{
        odds.push(array2[i]);
    }
}
console.log(`evens: ${evens}`);
console.log(`odds: ${odds}`);

// 12.
function isYIncluded(s){
    sToArray = s.split('');
    for(i=0; i<s.length; i++){
        if (sToArray[i] === 'y'){
            console.log(i);
            return true;
        }
    }
    return false;
}

console.log(isYIncluded('hello my name is matar'));

// 13.
function largestNum(arr){
    let largest = arr[0];
    for (i=0; i<arr.length; i++){
        if (largest < arr[i]){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largestNum([1,2,30,4,5,20,4,600]));

// Ex. 2
// 1.
console.log('EX. 1');
let j =1;
while(j<=10){
    console.log(j);
    j++;
}

// 2.
console.log('EX. 2');
j =0;
while(j<=10){
    console.log(j);
    j+=2;
}

// 3.
console.log('EX. 3');
j = 0;
while (j<=10){
    if (!(j%2===0)){
        console.log(j);
    }
    j++;
}

// 4.
console.log('EX. 4');
j = 10;
while (j>=1){
    console.log(j);
    j--;
}

// 5.
function sumUntilUserNumber(){
    userChoice = prompt('insert number');
    console.log(userChoice);
    let sum=0;
    let i=0;
    while (i<userChoice){
        i++;
        sum += i;
    }
    console.log(sum);
}

// sumUntilUserNumber()

// 6.
function factorialOfNumber(){
    userChoice = prompt('insert number');
    console.log(userChoice);
    let sum=1;
    i=1;
    while (i<userChoice){
        i++;
        sum *= i;
    }
    return sum;
}

// console.log(factorialOfNumber());

// 7. 

function fuelCheck(){
    let fuelLevel = prompt('insert fuel level');
    while (fuelLevel<5000 || fuelLevel>30000){
        fuelLevel = prompt('insert fuel level');
    }
}
// fuelCheck();

// EX. 3

// 1. 
// without nested loops
let result='';
console.log('* without nested: ');
for (let i = 1; i<=6; i++){
    result = result + '* '
    console.log(result);
}

// with nested loops
result = '';
console.log('* with nested: ')
for (let i = 1; i<=6; i++){
    for (let j=1;j<=i;j++){
        result = result + '* '
    }
    console.log(result);
    result='';
}

// 2.
table = '';
console.log('multiplication table: ');

for (let i = 0; i<=10; i++){
    for (let j=0;j<=10;j++){
        result = result +`${i*j} `;
    }
    console.log(result);
    result = '';
}


// EX. 4

// 1.
function fibbonaci(){
    userChoice = prompt('insert number');
    console.log('Fibbonaci: ');
    let i = 0;
    let sum1 = 0;
    let sum2 = 1;
    console.log(sum1);
    console.log(sum2);
    let sum3;

    while (i<userChoice){
        sum3 = sum1+sum2;
        console.log(sum3);
        sum1 = sum2;
        sum2 = sum3;
        i++;
    }
}

// fibbonaci();


// 2.

function isPalindrome(word){
    splittedWord = word.split('');
    console.log(splittedWord);
    for(i=0; i<=word.length-1; i++){
        if (word[i] === splittedWord.at(-(i+1))){
            continue;
        } else{
            return false;
        }
    }
    return true;

}
console.log(isPalindrome('racecar'));

//////////////////////////////////////////////////////////////////////

// 2D arrays Geek Out

// EX-0

let matrix = [['Josh','Michal','Yossi'],['red','blue','purple'],['pen','chair','shirt']];

function printMatrix(){
    let values = '';
    for (let i =0; i<matrix.length; i++){
        let innerArray = matrix[i];
        for(let j=0; j<innerArray.length; j++){
            values += `${innerArray[j]} `;
        }
        console.log(values);
        values='';
    }
}
printMatrix();
console.log(matrix);

// EX-1

let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];

function sumOfColumns(matrixArray){
    let resultArray = [];
    let sum=0;
    for (let i=0; i<matrixArray.length; i++){
        for(let j=0;j<matrixArray.length; j++){
            sum += matrixArray[j][i];
        }
        resultArray.push(sum);
        sum = 0;
    }
    return resultArray;
}
const columnSums = sumOfColumns(matrix1);
console.log(columnSums); 

// EX-2

function smallestInRow(matrix){
    let smallest;
    let smallestNumbersArray = [];

    for(let i=0;i<matrix.length;i++){
        let innerArrayLength = matrix[i].length;

        for(j=0;j<innerArrayLength;j++){
            if (j==0){
                smallest=matrix[i][j];
            }
            if (smallest > matrix[i][j]){
                smallest = matrix[i][j];
                
            } else{
                continue;
            }
        }
        smallestNumbersArray.push(smallest);
    }
    return smallestNumbersArray;
}

const smallestNumbers = smallestInRow(matrix1);
console.log(smallestNumbers);

// EX-4
const messyArray = ["b", 6, "a", "q", 7, 2];

function sortTheArray(array){
    let strings = [];
    let numbers = [];

    for (i=0;i<array.length;i++){
        if (typeof array[i] === 'number'){
            numbers.push(array[i]);
        } else{
            strings.push(array[i]);
        }
    }
    sortedArray = numbers.concat(strings);
    return sortedArray;
}

console.log(sortTheArray(messyArray));largestNum

// EX-5

function shuffle(arr){
    let currentNumber;
    let newPosition;
    for(i=0;i<arr.length;i++){
        currentNumber = arr[i];
        newPosition = Math.floor(Math.random() * 3);
        arr[i]=arr[newPosition];
        arr[newPosition] = currentNumber;
    }
    return arr;
}
console.log(shuffle([12,30,6]));
console.log(shuffle([12,30,6]));
console.log(shuffle([12,30,6]));
console.log(shuffle([12,30,6]));
console.log(shuffle([12,30,6]));
console.log(shuffle([12,30,6]));



// EX-7
let pattern = '* * *';
let steps = ' ';
for (let i = 0; i<5;i++){
    steps += ' ';
    console.log(steps+pattern);
}

// EX-8
result = '';
let space = '';
console.log('* nested: ')
for (let i = 5; i>=1; i--){
    for (let j=1;j<=i;j++){
        result = result + '* '
    }
    
    console.log(result);
    result='';
}