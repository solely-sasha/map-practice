// **Make an array of numbers that are doubles of the first array**


function doubleNumbers(arr){
    const newArray = arr.map(num => num * 2 )
    return newArray
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]




// **2) Take an array of numbers and make them strings**


function stringItUp(arr){
const stringArray = arr.map(num => num.toString())
return stringArray;
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]





// **3) Capitalize the first letter of each name and make the rest of the characters lowercase**

function capitalizeNames(arr){
  const names = arr.map(name => name[0].toUpperCase() + name.substr(1).toLowerCase())

return names;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]



// **4) Make an array of strings of the names**


function namesOnly(arr){
const nameArray = arr.map(obj => obj.name)
return nameArray;
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]




// **5) Make an array of strings of the names saying whether or not they can go to The Matrix**


function makeStrings(arr){

 const ageCheck = arr.map(obj => obj.age > 18 ? `${obj.name} can go to the Matrix` : `${obj.name} is underage!!`)
 return ageCheck

}
console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]



// **6) Make an array of the names in `h1`s, and the ages in `h2`s**

function readyToPutInTheDOM(arr){
    const domElements = arr.map(obj => `<h1>${obj.name}</h1><h2> ${obj.age}</h2>`)
    return domElements;
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]