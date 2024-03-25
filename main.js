// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-date").innerHTML = currentDate
}
 
// Write a JavaScript program to convert a number to a string.
const numToStr = () => {
  const number = parseInt(document.getElementById("number").value)
  console.log(typeof number)
  document.getElementById("display-string").innerHTML = typeof number.toString()
  console.log(typeof document.getElementById("display-string").innerHTML)
}

// Write a JavaScript program to convert a string to the number.
const strToNum = () => {
  const text = document.getElementById("text").value
  console.log(typeof text)
  document.getElementById("display-number").innerHTML = typeof parseInt(text)
  console.log(typeof parseInt(text))
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
const typeOf = (input) => {
  console.log(typeof input)
}

// Write a JavaScript program that adds 2 numbers together.
const addNums = () => {
  const num1 = parseInt(document.getElementById("num1").value)
  const num2 = parseInt(document.getElementById("num2").value)
  const sum = num1 + num2
  document.getElementById("display-sum").innerHTML = sum
}

// Write a JavaScript program that runs only when 2 things are true.
const bothTrue = () => {
  if (document.getElementById("true1").checked && document.getElementById("true2").checked) {
    document.getElementById("display-both").innerHTML = "Both True"
  }
  else {
    document.getElementById("display-both").innerHTML = ""
  }
}

// Write a JavaScript program that runs when 1 of 2 things are true.
const oneTrue = () => {
  if (document.getElementById("true3").checked || document.getElementById("true4").checked) {
    document.getElementById("display-one").innerHTML = "One is True"
  }
  else {
    document.getElementById("display-one").innerHTML = ""
  }
}

// Write a JavaScript program that runs when both things are not true.  
const bothNotTrue = () => {
  if (!document.getElementById("true5").checked && !document.getElementById("true6").checked) {
    document.getElementById("display-neither").innerHTML = "Both Not True"
  }
  else {
    document.getElementById("display-neither").innerHTML = ""
  }
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
