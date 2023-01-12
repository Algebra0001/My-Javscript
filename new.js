let country;
country = "Indonesia"
let population = 32
console.log(
`${country}'s population is ${population > 33 ? 'above' :
'below'} average`,
);



function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and
  its capital city is ${capitalCity}`;
  }
  const descPortugal = describeCountry('Portugal', 10,
  'Lisbon');
  const descGermany = describeCountry('Germany', 83,
  'Berlin');
  const descFinland = describeCountry('Finland', 6,
  'Helsinki');
  console.log("1." + descPortugal);
  console.log("2."+ descGermany);
  console.log("3." + descFinland);



/* function declaration */
  function percentageOfWorld1(population) {
    return (population / 7900) * 100;
    }


  const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
    };
    const percPortugal1 = percentageOfWorld1(10);
    const percChina1 = percentageOfWorld1(1441);
    const percUSA1 = percentageOfWorld1(332);
    const percNigeria1 = percentageOfWorld1(200);
    console.log(`Portugal has ${percPortugal1}% of the total world population`);
    console.log(`China has ${percChina1}% of the total world population`);
    console.log(`USA has ${percUSA1}% of the total world population`);
    console.log(`Nigeria has ${percNigeria1}% of the total world population`);





    const describePopulation = function (country, population) {
      const percentage = percentageOfWorld1(population);
      const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
      console.log(description);
      };
      describePopulation('Portugal', 10);
      describePopulation('China', 1441);
      describePopulation('USA', 332);
      describePopulation('Nigeria', 200);



      const myCountry = {
        country: 'Finland',
        capital: 'Helsinki',
        language: 'finnish',
        population: 6,
        neighbours: ['Norway', 'Sweden', 'Russia']
        };
        console.log(
          `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
          );
          myCountry.population += 2;
          console.log(myCountry.population);
          myCountry['population'] -= 2;
          console.log(myCountry.population);

          // use of "this" method
          const myCountry2 = {
            country: 'Nigeria',
            capital: 'Abuja',
            language: 'English',
            population: 200,
            neighbours: ['Cameroon', 'Niger', 'Chad', 'Guinea', 'Benin'],
            describe: function () {
            console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
            );
            },
            checkIsland: function () {
            this.isIsland = this.neighbours.length === 0 ? true :
            false;
            // Even simpler version (see why this works...)
            // this.isIsland = !Boolean(this.neighbours.length);
            }
            };
            myCountry2.describe();
            myCountry2.checkIsland();
            console.log(myCountry2);


let result = 1;
let counter = 0;
while (counter < 10) {
result = result * 2;
counter = counter + 1;
}
console.log(result);



// let yourName;
// do {
// yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);


// switch (prompt("What is the weather like?")) {
//   case "rainy":
//   console.log("Remember to bring an umbrella.");
//   break;
//   case "sunny":
//   console.log("Dress lightly.");
//   case "cloudy":
//   console.log("Go outside.");
//   break;
//   default:
//   console.log("Unknown weather type!");
//   break;
//   }

     // Looping a triangle
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let number = "#"; number.length < 8; number+= "#") {
  console.log(number);
  }



       //  Buzz
// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
// number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for
// numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
// for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed out
// a significant percentage of programmer candidates. So if you solved it, your
// labor market value just went up.)

    for(let i = 1; i <= 100; i++){
        let result = ""
        if(i % 3 === 0) result += "Fizz"
        if(i % 5 === 0) result += "Buzz"
        console.log(result || i)
    }



function fizzBuzz(input){
    if(input%3===0 && input%5===0){
      return "fizzbuzz"
    } else if(input%3===0){
      return "fizz"
    } else if(input%5===0){
      return "buzz"
    } else {
      return input
    }
  }
  console.log(fizzBuzz(3))
  console.log(fizzBuzz(5))
  console.log(fizzBuzz(7))
  console.log(fizzBuzz(15))


        // Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size
// = 8 and change the program so that it works for any size, outputting a grid
// of the given width and height.


let size = 8
let chess = ""
for (let x = 0; x < size; x++){
  for(let y = 0; y < size; y++){
    if((x+y) % 2 === 0){
      chess += " "
    } else {
      chess += "#"
    }
  }
  chess += "\n"
}
console.log(chess)





const power = function(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
  result *= base;
  }
  return result;
  };
  console.log(power(2, 10));

// Recursion
function power2(base, exponent) {
  if (exponent == 0) {
  return 1;
  } else {
  return base * power2(base, exponent - 1);
  }
  }
  console.log(power2(14, 4));




  const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
    unit += "s";
    }
    return(`${ingredientAmount} ${unit} ${name}`);
    };
    console.log(ingredient(1, "can", "chickpeas"));
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };

//   We want to write a program that prints two numbers: the numbers of cows
// and chickens on a farm, with the words Cows and Chickens after them and zeros
// padded before both numbers so that they are always three digits long.
// 007 Cows
// 011 Chickens
// This asks for a function of two arguments—the number of cows and the
// number of chickens. Let’s get coding.
function printFarmInventory(cows, chickens, pigs) {
let cowString = String(cows);
while (cowString.length < 3) {
cowString = "0" + cowString;
}
console.log(`${cowString} Cows`);
let chickenString = String(chickens);
while (chickenString.length < 3) {
chickenString = "0" + chickenString;
}
console.log(`${chickenString} Chickens`);
let pigString = String(pigs);
while (pigString.length < 3) {
pigString = "0" + pigString;
}
console.log(`${pigString} pigs`);
}
printFarmInventory(7, 11, 4)
// OR


function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
    numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
    }
    function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
    }
    printFarmInventory(7, 11, 3);
// OR


    function zeroPad(number, width) {
        let string = String(number);
        while (string.length < width) {
        string = "0" + string;
        }
        return string;
        }
        function printFarmInventory(cows, chickens, pigs) {
        console.log(`${zeroPad(cows, 3)} Cows`);
        console.log(`${zeroPad(chickens, 3)} Chickens`);
        console.log(`${zeroPad(pigs, 3)} Pigs`);
        }
        printFarmInventory(7, 16, 3)


//ALL ALGORITHM 

// 1A. REVERSE A WORD 
  function reverseWord(word) { 
  return word.split("").reverse().join(""); 
}
  console.log(reverseWord("empressteemah")); 
 
 // REVERSE A WORD 2
  function reverseWord2(word) {
     let array = word.split("");
     let result = "";
     for(let i = array.length - 1; i >= 0; i--) { 
        result += array[i] 
      } 
      return result; 
    } 
    console.log(reverseWord2("empressteemah")); 
    
  // 2. REVERSE ALL THE WORDS IN A SENTENCE 1 
  function reverseSentence(word) {
    return word.split(" ").reverse().join(" ");
  }
  console.log(reverseSentence("This is my abode")); 
       
  //REVERSE ALL THE WORDS IN A SENTENCE 2. 
  function reverseSentence2(word) {
   let result = ""; 
   let array = word.split(" "); 
     for(let i = array.length - 1; i >= 0; i--) {
      result += " " + array[i];
    }
      return result;
  }
  console.log(reverseSentence2("This is my abode")); 
         
    // 3. PALINDROME 1 
  function palindrome(word) { 
   let answer = word.split("").reverse().join("") 
   if(answer.toLowerCase() === word.toLowerCase()) { 
      return true; 
    } else { 
      return false;
    } 
  }
  console.log(palindrome("RacecAr"))

    //PALINDROME 2.
  function palindrome2(word) { 
    let result1 = ""; 
    let result2 = ""; 
    let answer = word.split(""); 
     for(let i = 0; i < answer.length; i++) {
        //  for(number of answer) {
     result1 += answer[i]; 
       //  result1 += number;
    // console.log(result1);
  } 
  for(let i = answer.length - 1; i >= 0; i--) {
    result2 += answer[i]; 
    // console.log(result2); 
  } 
if(result1.toLowerCase() === result2.toLowerCase()) {
    return true;
} else { 
  return false;
   }
} 
console.log(palindrome2("RacecAr")) 
                 
// 4. RETURN THE CHARACTER OCCURING HIGHEST NUMBER OF TIME
                 function charCount(sentence) {
                   let charObject = {}; 
                   for(let i = 0; i < sentence.length; i++) { 
                    let key = sentence[i]; 
                    // if(key === " ") continue; 
                    if(charObject[key]) {
                       charObject[key]++ 
                      } else {
                         charObject[key] = 1; 
                        }
                       } 
              let countArray = Object.values(charObject); 
              let max = Math.max(...countArray);
               for(let i = 0; i < sentence.length; i++) {
                 let prop = sentence[i];
                  if(charObject[prop] === max) {
                  return prop;
                 }
              }
            }
            console.log(charCount("hippopotamus"));

// 6. RETURNING LONGEST WORD'S LENGTH IN A STRING 
function returnLongest(number) { 
  return Math.max(...number.split(" ").map(x => x.length));
 } 
 console.log(returnLongest("This is a beautiful home"));


 //RETURN LONGEST WORD AS STRING 2 
 function returnLongest2(number) { 
  let maxLength = ""; 
  let array = number.split(" "); 
  for(let i = 0; i < array.length; i++) { 
    if(array[i].length > maxLength.length) { 
      maxLength = array[i]; 
    } 
  } 
  return maxLength; 
} 
console.log(returnLongest2("This is a beautiful home"));

 // 10. IN AN ARRAY ADD NUMBER TO TOTAL AND TURN STRING TO NUMBER THEN MULTIPLY WITH TOTAL 
 function addOrMultiply(arr) { 
  let total = 1;
   for(let i = 0; i < arr.length; i++)
    { let val = arr[i]; if(typeof val === "number") { 
      total+= val; 
      console.log(total)
    } 
    if(typeof val === "string") { 
      total *= val; 
    } 
  } 
  return total; 
} 
console.log(addOrMultiply([1, "2", 3, "4", 5]));;


// 5. ANAGRAM 1
 function anagram(word1, word2) { 
  let arrange1 = word1.split("").sort().join("").toLowerCase().trim();
  let arrange2 = word2.split("").sort().join("").toLowerCase().trim(); 
  if(arrange1 === arrange2) { 
    return true; 
  } else { 
    return false; 
  } 
} 
console.log(anagram("dormitory", "dirty room"));

// 13. RETURN LARGEST NOS IN A GROUP OF AN ARRAY
 function returnLargest(arr) { 
  let result = []; 
  for(let i = 0; i < arr.length; i++) { 
    let maxLength = [i][0]; 
    // console.log(maxLength) 
    for(let j = 1; j < arr[i].length; j++) { 
      if(arr[i][j] > maxLength) { 
        maxLength = arr[i][j]; 
        // console.log(maxLength) 
      } 
    } 
    result[i] = maxLength 
  } 
  return result 
} 
console.log(returnLargest([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//RETURN HIGHEST NUMBER 
function sumNum(num) { 
  let result = 0; 
  for(let i = 1; i <= num; i++) { 
    result += i 
  } 
  return result; 
} 
console.log(sumNum(10));

// 17. FUNCTION TO RETURN SECOND LARGEST NUMBER IN AN ARRAY OF NUMBERS 
function retLargest (number) { 
  let result = []; 
  for(let i = 0; i < number.length; i++) { 
    let maxLength = [i][0]; 
    for(let j = 1; j < number[i].length - 1; j++) { 
      if(number[i][j] > maxLength) { 
        maxLength = number[i][j]; 
      } 
    } 
    result[i] = maxLength; 
  } 
  return result; 
} 
console.log(retLargest([[2, 4, 6], [3, 7, 8], [1, 9, 15], [8, 10, 50], [15, 35, 24, 50]]));


// ATM WITHDRAWAL 
function withdrawal(amount) { 
  let noOf100s = Math.floor(amount / 100); 
  amount -= noOf100s * 100; 
  let noOf20s = Math.floor(amount / 20); 
  amount -= noOf20s * 20; 
  let noOf9s = Math.floor(amount / 9); 
  amount -=  noOf9s * 9; 
  let noOf1s = amount / 1;
return [noOf100s, noOf20s, noOf9s, noOf1s]; 
} 
console.log(withdrawal(250))


// CLASSIFY LETTERS INTO CONSO AND VOWELS 
function classifyLetters(word) { 
  let allVowels = ["a", "e", "i", "o", "u"]; 
  let vowels = []; 
  let consonants = []; 
  for(let i = 0; i < word.length; i++) { 
    let letter = word[i]; 
    if(allVowels.includes(letter.toLowerCase())) { 
      vowels.push(letter); 
    } else { 
      consonants.push(letter); 
    } 
  } 
  return { vowels: vowels, consonants: consonants}; 
} 
console.log(classifyLetters("Bastion"));


// 6. (29) ABBREVIATE FIRSTNAME OF FULLNAME 
function abbreviate(firstName) {
  let wordArr = firstName.split(" "); 
  // console.log(wordArr)
  if(wordArr.length === 1) { 
    return firstName; 
  } 
  let abbreviation = ""; 
  for(let i = 0; i < wordArr.length - 1; i++) { 
    let word = wordArr[i]; 
    // console.log(word)
    abbreviation += word[0] + "." 
  } 
    return abbreviation + " " + wordArr[wordArr.length - 1]; 
  } 
  console.log(abbreviate("Mohammed Adelabu Hassan"))


// 7. (30) ABBREVIATE LASTNAME OF FULLNAME 
function abbrevy(lastName) { 
  let wordArr = lastName.split(" "); 
  if(wordArr.length === 1) { 
    return lastName; 
  } 
  let abbreviation = wordArr[0] + " "; 
  for(let i = 1; i < wordArr.length; i++) { 
    let word = wordArr[i]; 
    abbreviation += word[0] + "." 
  } 
  return abbreviation;
} 
console.log(abbrevy("Mohammed Adelabu Hassan"))


  // 34. Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits. 
  // Example 
  // "abcde" -> 0 # no characters repeats more than once 
  // "aabbcde" -> 2 # 'a' and 'b' 
  // "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`) 
  // "indivisibility" -> 1 # 'i' occurs six times 
  // "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice 
  // "aA11" -> 2 # 'a' and '1' 
  // "ABBA" -> 2 # 'A' and 'B' each occur twice 
  function occur(str){ 
    let count = 1; 
    let obj = {} 
    str = str.toLowerCase() 
    for(let i = 0; i < str.length; i++){ 
      let char = str[i]
      obj[char] = (obj[char]||0)+ 1; 
    } 
    return obj; 
  } 
console.log(occur("abcde")); 
console.log(occur("aabbcde")); 
console.log(occur("indivisibility")) 
console.log(occur("Indivisibilities"))
console.log(occur("aA11")) 
console.log(occur("ABBA"))


// function deutchTranslator(deutch){

//   const deutchDict = {
//     er: 'he',
//     sie: 'she',
//     es: 'it',
//     du: 'you',
//     ich: 'i',
//     wir: 'we',
//     ihr: 'you',
//     brot: 'bread',
//     ein: "a",
//     eine: 'a',
//     frau: 'woman',
//     mann: 'man',
//     kind: 'child',
//     madchen: 'girl',
//     junge: 'boy',
//     bist: 'are',
//     bin: 'am',
//     ist: 'is',
//     und: 'and',
//     wasser: 'water'
//   }

//   let sentence = deutch.split('')
//   let result = []
//   for(let i=0; i<sentence.length; i++){
//     // let words = sentence[i]
//     if(sentence[i] in deutchDict){
//       result.push(deutchDict[sentence[i]])
//     } else {
//       result.push(sentence[i])
//     }
//   }
//   return result.join('')
// }
// console.log(deutchTranslator('du'))


function deutchTranslator(deutch) {
  // Create a dictionary of German-to-English translations
  const dictionary = {
    "Hallo": "Hello",
    "Wie geht es dir?": "How are you?",
    "Auf Wiedersehen": "Goodbye",
    "Danke": "Thank you",
    "Entschuldigung": "Excuse me"
  };

  // Split the given string into an array of words
  const words = deutch.split(" ");

  // Create an array to hold the translated words
  let translatedWords = "";

  // Loop through the words in the given string
  for (let i = 0; i < words.length; i++) {
    // If the current word is in the dictionary, add its translation to the translatedWords array
    if (words[i] in dictionary) {
      translatedWords += dictionary[words[i]] + " ";
    } else {
      // If the current word is not in the dictionary, add the word itself to the translatedWords array
      translatedWords += words[i] + " ";
    }
  }

  // Join the translated words into a string and return it
  return translatedWords;
}
const deutch = "Hallo Wie geht es dir? Auf Wiedersehen";

const output = deutchTranslator(deutch);

console.log(output); // Output: "Hello How are you? Goodbye"


var countBits = function(n) {
  let binary = n.toString(2).split('')
  console.log(binary)
  let count = 0
  for(let i = 0; i<binary.length; i++){
    if(binary[i] === "1"){
      count++
    } 
  }
  return count
}
console.log(countBits(7))