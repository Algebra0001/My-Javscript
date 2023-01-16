// ALGO CHALLENGES


// Complete the function which takes two arguments and returns all numbers that are divisible by the given divisor, first argument is an array of numbers and the second is the divisor.

//Example divisibleBy([1,2,3,4,5,6,7,8],2) to return [2,4,6,8]
function divisibleBy(arr, divisor){
  return arr.filter((num) => num%divisor===0)

  let result = []
  let length = arr.length
  for(i=0; i<length; i++)
  if(arr[i] % divisor === 0){
    result.push(arr[i])
  }
  return result
}
console.log(divisibleBy([1,2,3,4,5,6,7,8],2))




//2. Create a function that takes two strings as arguments and return either true or false depending whether the total number of characters in the first string is equal to the total number of characters in the second string

// Example
// comp("AB", "CD") ---> true
// comp("ABC", "DE") ---> false
// comp("hello", "edabit") ---> false


function comp(str1, str2){
  let first = str1.length
  let second = str2.length
  if(first === second){
    return true
  } else {
    return false
  }
}
console.log( comp("AB", "CD"))
console.log(comp("ABC", "DE"))
console.log(comp("hello", "edabit"))


//3. Implement the function noOfElements(x, y, z) which returns the number of elements in that array x, that are greater than or equal to the variable y and less than or equal to the variable z

// ## Examples

// noOfElements([2,3,0,1,7], 4, 8) to return 1  
// noOfElements([3,3,3,5,18,6,20], 15, 30) to return 2  
// noOfElements([4,6,2,6,7,7], 0, 7) to return 6

function noOfElements(x, y, z) {
  return x.filter((num) => num>=y && num<=z).length

        // Method2
  let result = []
 for(let num of x){
   if(num>=y && num<=z){
     result.push(num)
   }
 }
 return result.length
}
console.log(noOfElements([2,3,0,1,7], 4, 8))
console.log(noOfElements([3,3,3,5,18,6,20], 15, 30))
console.log(noOfElements([4,6,2,6,7,7], 0, 7))




//4 Implement the function divisible(a) which returns the number of the elements in that array a that are divisible by 2 and greater than 15.

function divisible(arr){
  return arr.filter((num) => num%2===0 && num>15).length

    // Method2
  let result = []
  for(let num of arr){
    if(num%2===0 && num>15){
      result.push(num)
    }
  }
  return result.length
}
console.log(divisible([2,3,12,18,42,24]))
console.log(divisible([100,84,37]))
console.log(divisible([5,8,6,12]))




// 5 Implement the function isDivisbleByN(arr, n) which extracts all the values in the input array arr that are divisible by n into another array and returns the new array.

// ## Examples

// isDivisbleByN([1,3,5,6,3,6,7,4], 2) to return [6, 6, 4]  
// isDivisbleByN([21,3,5,6,3,6,7,4], 7) to return [21, 7]

let isDivisbleByN = (arr, n) => {
  return arr.filter((num) => num%n===0)

    // Method2
  let result =[]
  for(let num of arr){
    if(num%n===0){
      result.push(num)
    }
  }
  return result
}
console.log( isDivisbleByN([1,3,5,6,3,6,7,4], 2))
console.log( isDivisbleByN([21,3,5,6,3,6,7,4], 7))




//6 Implement the function highestSum(x, y) where x and y are both arrays, return the sum of the array with the highest value when its elements are summed respectively.

//  Examples

// highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]) to return 20  
// highestSum([15,7], [12,17]) to return 29  
// highestSum([30], [3,6,2,6]) to return 30

function highestSum(x, y){
  return Math.max(x.reduce((sum,num) => sum+num), y.reduce((sum,num) =>sum+num))

    // Method2
  let first = x.reduce((num,sum)=> sum+num, 0)
  let second = y.reduce((num,sum)=> sum+num, 0)
  return Math.max(first, second)
}
console.log(highestSum([2,5,1,0,5,7], [2,3,5,6,2,1]))
console.log(highestSum([15,7], [12,17]))
console.log(highestSum([30], [3,6,2,6]))

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers
// #Example
// sumMix([9,3,"7","5"]) to return 24
// sumMix(["5","0",9,3,2,1,"9",6,7]) to return 42
// sumMix(["3",6,6,0,"5",8,5,"6",2,0]) to return 41

function sumMix(arr){
  let total = 0;
  for(let i=0; i<arr.length; i++){
    total += (+arr[i])
  }
  return total
}
console.log(sumMix(["3",6,6,0,"5",8,5,"6",2,0]))
// console.log(sumMix([9,3,"7","5"]))
// console.log(sumMix(["5","0",9,3,2,1,"9",6,7]))



// Implement a function arrSum(arr1, arr2) that returns another array with values of the sum of the two arrays in the arguments in the repeating order.

// Example
// arrSum([1,2,3,4], [1,2]) to return [2,4,4,6]

function arrSum(arr1, arr2){
  // if(arr1.length<=0||arr2.length<=0)return
  let result = []
  let counter = 0
 for(i=0; i<arr1.length; i++){
   result[i] = arr1[i] + arr2[counter++]
   if(counter === arr2.length && arr1.length > arr2.length){
     counter = 0
   }
 }
 return result
}

console.log( arrSum([1,2,3,4], [1,2,3,4]))
// console.log( arrSum([1,2,3,4,5], [1,2,3]))

function sumArr(arr){
  let result = []
  // let total = 0
  // for(let i = 0; i<arr.length; i++){
  //   total += arr[i]
  // }
  // result.push(total)

  // method2
  let summed = arr.reduce((num,sum) => num+sum)
  result.push(summed)
  return result
}
console.log(sumArr([1,2,3]))

// Let's say you are a road agent, tracking a criminal with different locations such as ["USA", "BRA"]["JPN","PHL"]["BRA","UAE"]["UAE","JPN"]
// Write a function that outlines the criminal's exact location in ascending order.
// USA BRA UAE JPN PHL

function trackCriminal(locations) {
  let newLoc = [];
  for(let i = 0; i<locations.length; i++){
      for(let j = 0; j<locations[i].length; j++){
          if(newLoc.indexOf(locations[i][j]) === -1){
              newLoc.push(locations[i][j])
          }
      }
  }
  let start = 2;
  let end = newLoc.length - 1
  while(start < end){
      let temp = newLoc[start]
        newLoc[start] = newLoc[end]
        newLoc[end] = temp;
        start++;
        end--
  }
  [newLoc[3], newLoc[4]] = [newLoc[4], [newLoc[3]]]
  return newLoc.join(" ")
}
const locations = [  ["USA", "BRA"],
  ["JPN", "PHL"],
  ["BRA", "UAE"],
  ["UAE", "JPN"]
];

const result = trackCriminal(locations);

console.log(result); // Output: "USA BRA UAE JPN PHL"





// Implement the function replaceDivisible(x, y) which replaces all numbers in an array, x divisible by an integer, y with string “isDivisible”

// ## Examples
// replaceDivisible([2,4,3,6,5], 3) => [2, 4, “isDivisible”, “isDivisible”, 5]  
// replaceDivisible([12,4,3,6,5], 2) => [“isDivisible”, “isDivisible”, 3, “isDivisible”, 5]

 function replaceDivisible(x, y){
 return x.map((num)=>{
    if(num%y===0) return "isDvisible"
    return num
  })
}
console.log(replaceDivisible([2,4,3,6,5], 3))
console.log(replaceDivisible([12,4,3,6,5], 2))




// Create a function that takes an array of number and returns the second largest number

// #Example
// secondLargest([10,40,30,20,50]) to return 40
// secondLargest([25,143,89,13,105]) to return 105
// secondLargest([54,23,11,17,10]) to return 23

function secondLargest(arr){
  let sorted = arr.sort((a,b) => {
    return b-a 
  })
return sorted[1]
}
console.log(secondLargest([10,40,30,20,50]))
console.log(secondLargest([25,143,89,13,105]))
console.log(secondLargest([54,23,11,17,10]))


function secondLargest2(arr){
  return arr.sort(function(a,b){
    b-a
  })[1]
}
console.log(secondLargest2([10,40,30,20,50]))
console.log(secondLargest2([25,143,89,13,105]))
console.log(secondLargest2([54,23,11,17,10]))

// Create a function that takes an array of number arr, a string str as arguments and returns a new array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order
//  "Des"  returns a sorted array in descending order
// "None" returns an array without modification

// #Example
// ascDesNone([4,3,5,1],"Asc") to return [1,3,4,5]
// ascDesNone([3,4,2,1],"Des") to return [4,3,2,1]
// ascDesNone([1,4,2,5,7],"None") to return [1,4,2,5,7]

function  ascDesNone(arr, str){
  if(str==="Asc"){
    return arr.sort(function(a,b){
      return a-b
    })
  } else if(str==="Des"){
    return arr.sort(function(a,b){
      return b-a
    })
  } else {
    return arr
  }
}
console.log(ascDesNone([4,3,5,1],"Asc"))
console.log(ascDesNone([3,4,2,1],"Des"))
console.log(ascDesNone([1,4,2,5,7],"None"))




// Implement a function sumOfMultiples(arr) that takes an array and returns the sum of multiples of 3 and 5.

// Example
// sumOfMultiples([6, 3, 0, 30, 7])  to return 39
// sumOfMultiples([9, 3, 21, 30, 7,8,4,2]) to return 63
// sumOfMultiples([10, 20, 11, 17, 7])  to return 30

function sumOfMultiples(arr){
  return arr.filter((char) => {
    if(char%3===0||char%5===0)
    return char
  }).reduce((sum,num) =>sum+num)


  let newArr = arr.filter((num) =>{
    if(num%3===0 || num%5===0)
     return num
  })
  return newArr.reduce((sum, char) => sum + char)
  // let result =[]
  // for(let num of arr){
  //   if(num%3===0 || num%5===0){
  //     result.push(num)
  //   }
  // }
  // return result.reduce((num,sum) => num+sum)
}
console.log(sumOfMultiples([6, 3, 0, 30, 7]))
console.log(sumOfMultiples([9, 3, 21, 30, 7,8,4,2]))
console.log(sumOfMultiples([10, 20, 11, 17, 7]))




// Implement a function sumOfTwoSmallestNums(arr) that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.
// [19, 5, 42, 2, 77] should return 7.

function sumOfTwoSmallestNums(arr){
  let sorted = arr.sort((a,b) => {
    return a-b
  })
  return sorted[0]+sorted[1]
}
console.log((sumOfTwoSmallestNums([999,234,567,78,2])))
console.log(sumOfTwoSmallestNums([19, 5, 42, 2, 77]));
console.log(sumOfTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));
console.log(sumOfTwoSmallestNums([80, 33, 44,55,1,2,14]))




// Implement the function alphabetPosition(text) that given given a string, replace every letter with its position in the alphabet.
// # Example
//   alphabetPosition('developer')  to return '4 5 22 5 12 15 16 5 18'
//      alphabetPosition('decadev') to return '4 5 3 1 4 5 22'
//      alphabetPosition('success') to return '19 21 3 5 19 19'
function alphabetPosition(text) {
    let result = '';
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < text.length; i++) {
      let letter = text[i].toLowerCase();
      if (letters.includes(letter)) {
        result += (letters.indexOf(letter) + 1) + " ";
      }
    }
    return result
 }
 console.log(alphabetPosition("decadev"))
 console.log(alphabetPosition('success'))
console.log(alphabetPosition('developer'))




// Scoring wwords, using the index position of each alphabet
function scoreWord(word){
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let result = []
  let word2 = word.toLowerCase()
  for(let i = 0; i < word2.length; i++){
    if(letters.includes(word2[i])){
      result.push(letters.indexOf(word2[i])+1)
    }
  }
  return result.reduce((a,b) => a+b)
}
console.log(scoreWord('imokai'))




// You are given an array (which will have the length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N

function findOutlier(int){
  let even = []
  let odd = []
  for(let i =0; i<int.length; i++){
    let char = int[i]
    if(char%2 === 0){
      even.push(char)
    } else {
      odd.push(char)
    }
  }
   if(even.length > odd.length){
    return odd[0]
  } else {
    return even[0]
  }
}
console.log(findOutlier([2,4,0,4,11,2602,36]))




// Implement the function squareDigit(str) that takes a string of numbers and square every digit of a number and concatenate them

// # Example
//     squareDigit('9119') to  return 811181
//     squareDigit('289') to return 46481
//     squareDigit('345') to return 91625
//     squareDigit('7772') to return 4949494



function squareDigits(str){
  // return (+str.split('').map((val) => { return val * val;}).join(''));
  
  //   Method2
  // return (+str.split('').map((eachNums) => {
  //   eachNums = Math.pow(eachNums, 2)
  //   return eachNums
  // }).join(''))

        //Method3
  let newStr = ''
  for(let i = 0; i<str.length; i++){
    let nums = str[i]
    nums *= nums
    newStr += nums.toString()
  }
  return (+newStr)
}
console.log(squareDigits('9119'))
console.log(squareDigits('7772'))
console.log(squareDigits('345'))




// Implement the function accum(str) that takes string and returns the accumulated string by index.
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// # Example
//    accum("abcd") -> "A-Bb-Ccc-Dddd"
//    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(str) {
  let result = ""
  for(let i = 0; i < str.length; i++) {
    let strNew = str[i]
    let counter = i+1
    let word = strNew.repeat(counter)
    let output = word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
    result += output + "-"
    }
    return result.slice(0, -1)
  }
console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))




function strRepeat(str){
  let newStr = ''
  let str2 = str.toLowerCase()
  for(let i = 0; i<str2.length; i++){
    let repeat = str2[i].repeat(i+1)
    newStr += repeat
  }
  return newStr
}
console.log(strRepeat('anm'))



// To get the middle char(s) of a word
function getMiddle(str){
  let size= str.length

          // method1
  // if(size%2!==0){
  //   return str[(size/2)-1]
  // } else { 
  //   return ((str[Math.floor((size/2))-1]) + ( str[Math.ceil(size/2)]))
  //  }


          // method2
  let mid = size/2
  if(size%2 === 0){
    return str.charAt(mid-1) + str.charAt(mid)
  } else {
    return str[Math.ceil(mid)]
  }
}

console.log(getMiddle("text"))


// Given a number n, return the numbers of positive odd numbers below n

// ## Examples

// oddCount(7) should return 3 i.e [1,3,5]
// oddCount(17) should return 8 i.e [1,3,5,7,9,11,13,15]

function oddCount(n){
//  let result = []
//  for(let i = 1; i<=n; i++){
//   if(i%2 !== 0){
//     result.push(i)
//   }
//   return result
//  }
  if(n/2 === 0){
    return (n/2)
  } else {
    return (Math.floor(n/2))
  }
}
console.log(oddCount(9))



function isPalindrome(str){
  let splitted = str.split('');
  let reversed = splitted.reverse()
   let joined = reversed.join('')
   if(str === joined){
    return "Yes, it is a palindrome"
   } else {
    return "false, It is not a palindrome"
   }
}

console.log(isPalindrome("anna"))


// Write a program to determine if a string contains all unique characters. Return true if it does and false if otherwise
 function hasUniqueChars(str){
  let unique = new Set(str)
  console.log(unique)
  let setSize = unique.size
  console.log(setSize)
  let strSize = str.length
  console.log(str.length)
  if(setSize === strSize){
    return true
  } else {
    return false
  }


  let obj = {}
  for(let i = 0; i<str.length; i++){
    let char = str[i]
    if(obj[char] == 1){
      return false
    } else {
      obj[char] = 1
    }
  }
  return true
 }
 console.log(hasUniqueChars("abcdefg"))


//  To get if a sentence is an isogram
 
function isIsogram(str){
  let obj = {}
  console.log(obj);
  let str2 = str.toLowerCase()
  for(let chars of str2){
    if(obj[chars]) {
      return false
    } else {
      obj[chars]=1
    }
  }
  return true
}
console.log(isIsogram("Dermatoglyphics"))



 function uniqueNumber(arr){
  for(let i = 0; i < arr.length; i++){
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
      return arr[i]
      }
    }
     return null
  } 
console.log(uniqueNumber( [2, 1, 2, 5, 3, 4, 4, 1, 4, 5, 4]))
console.log(uniqueNumber( [1, 2, 3, 4, 1, 4, 5, 5]))
console.log(uniqueNumber( [1, 2, 3, 4, 5]))


const names = ['tom', 'alex', 'tom', 'bob'];
console.log(names.indexOf("tom"))

//  Testing map method
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);
function myFunction(num) {
  return num * 10;
}
console.log(newArr)



// Given a sorted array
// Write a function called search(arr, val) that returns the index where the value passed to the function is located and return -1 if not found

function search(arr, val){
          //  method1
  return arr.indexOf(val)

          // method2
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === val){
      return i
    } 
  }
  return -1
}
console.log(search([1,2,3,4,5,6,7,8], 4))
console.log(search([1,2,3,4,5,6,7,8], 9))
console.log(search([1,2,3,4,5,6,7], 5))
console.log(search([1,2,3,4,5,6,7,8], 8))
console.log(search([1,2,3,4,5,6,7,8], 9))

        // Method3
// using binary search
function binarySearch(arr, val){
  let min = 0;
  let max = arr.length - 1
  let mid = Math.floor((min + max)/2)
  if(arr[mid] < val){
    min = mid + 1
  } else if(arr[mid]> val){
    max = mid - 1
  } else {
    return mid
  }
  return -1
}
console.log(binarySearch([1,2,3,4,5,6,7], 5))
console.log(binarySearch([1,2,3,4,5,6,7,8], 8))
console.log(binarySearch([1,2,3,4,5,6,7,8], 9))



function sortedArr(arr) {
  for(let i = 0; i<arr.length; i++){
    let char = arr[i]
    if(arr.sort === arr){
      return "Yes, It is sorted!"
    }
  }
  return "Nope"
}
console.log(sortedArr[1,2,3,4,5,6,7,8])




function replaceNumbers(str){
    let num = str.replace(/[^0-9]/g,'');
    return(num);
}
console.log(replaceNumbers("abcd00"))

console.log(Object.values({x: 0, y: 0, z: 2}));


// Sort this array [1,1,1,2,2,2,2,2,3,3,4,5,5,5,5,5] to get this result [[1,1,1],[2,2,2,2,2],][3,3],[4],[5,5,5,5,5]]

// let containerArray = []   //This is the main container Array
// let sortedArray = []   // This is the rray thst temporarily collects the duplicate numbers
// let inputArray = []     //   This is the array that was given
// let groupedArray = [...newSet(inputArray)]   // This is the array that contains unique characters of the inputArray.
// for(let i=0; i<groupedArray.length; i++){
//   for(let j=0; j<inputArray.length; j++){
//     //  This condition pushes the same numbers to the sorted array
//     if(groupedArray[i]==inputArray[j]){
//       sortedArray.push(inputArray[j])
//       //  This condition checks for duplicates before pushing to the containerArray
//       if(!containerArray.includes(sortedArray)){
//         containerArray.push(sortedArray)
//       }
//     }
//   }
//   sortedArray = []  //  This is where we empty the sortedArray container
// }
// console.log(containerArray)




// Implement a function that takes a number of even length, swaps the pairs of its adjacent digits and returns the swapped numbers
// Examples
// numSwap(1234) to return 2143
// numSwap(123456) to return 214365
        // Solution
function numSwap(number){
  let numStr = number.toString(); //this is where we convert the number to string
  let numArr = numStr.split('') // this is where we convert the numStr to array
  let chops = []
  for(let i = 0; i<numArr.length; i+=2){
    const newChunk = numArr.slice(i, i+2)
    chops.push(newChunk)
    // console.log(chops)
  }
  const swappedArr = chops.map((chop) => {
    return chop.reverse()
  })
  const flatArr = swappedArr.flat()
  const str = flatArr.join('')
  return Number(str)
}
console.log(numSwap(2143))
// console.log(numSwap(21436587))




// Using Recursion to solve a problem 

function factorial(m){
  if(m===0 || m===1){
    return 1
  }
  return m*factorial(m-1)
}
console.log(factorial(5))




function max(...numbers){
  let result = -Infinity
  for(let number of numbers){
      if(number > result) result = number
      }
  return result
}
let numbers1 = [5, 1, 7];
console.log(max(...numbers1));
console.log(Math.random())




// Given a roman numeral less than '4000', convert it to a decimal number. This (wikipedia article on roman numeral for more details)...
    // Roman numerals consist of the following symbols
    /*
    I is 1
    V is 5
    X is 10
    L is 50
    C is 100
    D is 50
    M is 1000
    */
//    A numeral is formed by a sequence of these symbols, where each symbol can be used up to 3 times to contribute to the total. Symbols are ordered left to right from larger to smaller, except for the fooutllowing cases:
/*
1. 'I' placed before 'V' or 'X' indicates one less, so 'IV' is 4 (one less than 5) and 'IX' is 9 (one less than 10).
2. 'X' placed before 'L' or 'C' indicates 10 less, so 'XL' is 40 (ten less than 50) and 'XC' is 90 (ten less than 100).
1. 'C' placed before 'D' or 'M' indicates 100 less, so 'CD' is 400 (hundred less than 500) and 'CM' is 900 (hundred less than 100).
*/

// Example
// romanToDecimal(XI) to return 11
// romanToDecimal(XCVIII) to return 98
// romanToDecimal(XCIX) to return 99
// romanToDecimal(MCMXLIV) to return 1944
function romanToDecimal(roman) {
  let total = 0
  let i = 0
  let input = roman.toLowerCase()

  const converter = {
    i : 1,
    v : 5,
    x : 10,
    l : 50,
    c : 100,
    d : 500,
    m : 1000
  }

  while(i<input.length){
    let current = input[i]
    let next = input[i+1]
    if(converter[current]<converter[next]){
      total += converter[next] - converter[current]
      i += 2
    } else {
      total += converter[current]
      i++
    }
  }
  return total
} 

console.log(romanToDecimal("MCMXLIV"))



 
// Implement the function missingNumber(numArr) which returns the missing number in a given integer array between 1 and 9. If there is no missing number, the function should return false. If there is more than one missing number, the function should return the result in an array sorted in ascending order.

// missingNumber([1,2,3,4,6,7,8,9]) ==> 5
// missingNumber([1,2,3,4,5,6,8]) ==> [7,9]
// missingNumber([1,2,3,4,5,6,7,8,9]) ==> false

function missingNumber(numArr){
  let result = []
  for(let i= 1; i<=9; i++){
    if(!numArr.includes(i)){
      result.push(i)
    }
  }
  if(result.length === 1){
    return result[0]
  } else if(result.length === 0){
    return false
  } else {
    return result
  }
}
console.log(missingNumber([1,2,3,4,6,7,8,9]))
console.log(missingNumber([1,2,3,4,5,6,8]))
console.log(missingNumber([1,2,3,4,5,6,7,8,9]))




// Implement the function increment(arr, val) which increments the value of val key in every object inside the array by the given value and returns the new arrar

// increment([{val: 1}, {val: 2}, {val: 3}], 2) to return [{val: 3}, {val: 4}, {val: 5}]
// increment([{val: 10}, {val: 20}, {val: 30}], 5) to return [{val: 15}, {val: 25}, {val: 35}]

function increment(arr, val){
  let result= []
  for(let chars of arr){
    result.push({val:chars["val"]+val})
  }
  return result
}
console.log(increment([{val: 1}, {val: 2}, {val: 3}], 2))


// An ATM has 100, 50 and @) Naira bills (NGN) to be dispensed 
// Given an amount between 40 and 1000 Naira (inclusive) rounded to the ndearest 10 and assuming that the ATM wants to use as few bills as possible.
// Implement the function withdraw(amount) that returns the minimal number of 100, 50 and 20 Naira bills the ATM needs to dispense (in that order) in an array.

// Example
// withdraw(250) to return [2, 1, 0]
// withdraw(370) to return [3, 1, 1]
function withdraw(amount){
  let hundred = 0
  let fifty = 0
  let twenty = 0
  while(amount >= 20){
    if(amount >= 100){
      amount -= 100
      hundred++
    } else if(amount >= 50){
      amount -= 50
      fifty++
    } else {
      amount -= 20
      twenty++
    }
  }
  return [hundred, fifty, twenty]
}
console.log(withdraw(250))




function removeChars(str){
  return str.slice(1, -1)
}
console.log(removeChars('remove'))




// Checking for primefactor of a number

function primeFactor(num){
  let result = [];
  let number = num; 
  let divider = 2;
  while(number > 1){
    if(number%divider === 0){
      result.push(divider);
      number /= divider
    } else {
      divider++
    }
  }
  return result
}
console.log(primeFactor(12))


function reverseMultiply(arr){
// let absArr = arr.map((s) => Math.abs(s))
// let reverse = absArr.reverse()
// //console.log(reverse)
// let result = []
// for(let i = 0; i<reverse.length; i++){
//   let newPro = reverse[i] * (i+1)
//   result.push(newPro)
// }
let result = []
let countdown = arr.length
for(let i = 0; i<arr.length; i++){
  result.push(arr[i] * countdown)
  countdown--
  }
return result
}

console.log(reverseMultiply([1,2,3,4,5]))
console.log(reverseMultiply([16,8,-18]))




// # Challenge 1
// Implement a function countTruthy(arr) that takes an array and returns the number of truthy values

// # Example
// countTruthy([6, 3, 0, 30, 7])  to return 4 
// countTruthy(['', 3, 0, 30, 7]) to return 3
// countTruthy(['', 0, 0, undefined, 7])  to return 1
function countTruthy (arr){
  return arr.filter((num) =>{
    if(num) return num
  }).length
}
console.log(countTruthy([6, 3, 0, 30, 7]))
console.log(countTruthy(['', 0, 0, 7]))
console.log(countTruthy(['', 0, 0, undefined, true, NaN, 7]))



var arry = [-2.5699, -1.4589, -3.2447, -6.9789 ,-9.213568];
arry = arry.map( s => Math.abs(s));
console.log(arry)

var arry2 = [ 2.5699, 1.4589, 3.2447, 6.9789, 9.213568 ]
arry2 = arry2.map( s => Math.abs(s));
console.log(arry2)

const str = 'Coding Beauty';

// const lastChar = str.at(-1);
console.log(str.at(-1)); // y


function solution(str, ending){
  // let strLast = str[-1]
  // let endingLast = ending[-1]
  // if(strLast === endingLast){
  //   return 'true'
  // } else {
  //   return 'false'
  // }
  
    return str.endsWith(ending);
}
console.log(solution('abc', 'bc'))
console.log(solution('samurai', 'ai'))


// Consider an array where each element in the array contains a positive integer digit. taken as a whole, such an array represents a positive integer number. The rightmost position of the array represents the least significant digit 0of the number.
// An Example digit array is [4, 2] which represents the integer 42.
// in this challenge, you will write a function to increment the number in the digit array by 1. For Example, upArray[4, 2] will return [4, 3].
// Here is the complete specification for uppArray:

// upArray(arr)
// increase the digit array by one

// Parameters
// arr: Array<Number> - an array of integers to be increased

// Return Value
// Array<Number> - an array with the new value.

// Constraints
// 1. Parameters array will not be empty
// 2. Array will only contain non-negative single digit integers
// 3. Array will not contain leading zeroes unless its length is exactly 1

// Examples
// arr        ReturnValue
// [5,7,3]      [5,7,4]
// [4,3,9]      [4,4,0]
// [9]          [1,0]

function upArr(arr){
  let result = []
  arr = arr.join('')
 let summed = parseInt(arr) + 1
 let numStr = summed.toString().split("")
 for(let i = 0; i<numStr.length; i++){
  result.push(+numStr[i])
 }
 return result
}
console.log(upArr([2,9]))



// Implement the function calculateGrade(marks) that takes an array of grades and calculates the average. It should return the average grade by comparing with the grade table
// 1-49: F
// 50-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
// # Example
//     calculateGrade([90, 90, 92]) to  return A
//     calculateGrade([19, 5, 42, 2, 77]) to return 'F'
//     calculateGrade([59, 80, 40, 2, 77]) to return 'E'
//     calculateGrade([89, 50, 40, 90, 77]) to return 'D'

function calculateGrade(marks){
  let average = (marks.reduce((sum,num) => sum+num))/marks.length
  if(average>=90){
    return 'A'
  } else if(average>=80){
    return 'B'
  } else if(average>=70){
    return 'C'
  } else if(average>=60){
    return 'D'
  } else if(average>=50){
    return 'E'
  } else {
    return 'F'
  }
}
console.log(calculateGrade([80, 80, 70]))
console.log(calculateGrade([19, 5, 42, 2, 77]))
console.log(calculateGrade([89, 50, 40, 90, 77]))
console.log(calculateGrade([59, 80, 40, 2, 77]))


function paritySum(numbers) {
  // Write your code here
  let total = 0
  for(let i =0; i<numbers.length; i++){
    if(numbers[i]%2 !== 0){
      total += (numbers[i]+1)
    } else {
      total += (numbers[i]-1)
    }
  }
  return total
  }
  console.log(paritySum([1, 2, 3, 4, 5]))
  console.log(paritySum([1, 3, 5, 2, 4, 8]))
  console.log(paritySum([]))



  // function skipLetters(str, n) {
  //   // Write your code here
  //   let newStr = ''
  //   let str2 = str.split('')
  //   for(let i = 0; i<str2.length; i++){
  //     let chars = str2[i]
  //     if(str.length<n){
  //       return
  //     }
      
  //   }
  // }
  // console.log(skipLetters('hello', 2))
