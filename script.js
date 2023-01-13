// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(
    prompt('How long would you like your Password to be? (10-64 Characters')
  )
  // Parameter Alerts
  if(isNaN(length) === true){
    alert('Must be provided as an integer');
    return;
  }
  if(length < 10) {
    alert('Must be minimum 10 characters');
  }
  if(length > 64) {
    alert('Must be maximum 64 characters');
  }

  let specialYes = confirm('Use special characters?');
  if(specialYes === true){
    getRandom(specialCharacters);
    // test
    console.log(getRandom(specialCharacters));
  }

  let numericYes = confirm('Use numeric characters?');
  if(numericYes === true){
    getRandom(numericCharacters);
    // test
    console.log(getRandom(numericCharacters));
  }

  let lowerCaseYes = confirm('Use Lowercase characters?');
  if(lowerCaseYes === true){
    getRandom(lowerCasedCharacters);
    // test
    console.log(getRandom(lowerCasedCharacters));
  }

  let upperCaseYes = confirm('Use Uppercase characters?');
  if(upperCaseYes === true){
    getRandom(upperCasedCharacters);
    // test
    console.log(getRandom(upperCasedCharacters));
  }

  if(specialYes === false && numericYes === false && 
    lowerCaseYes === false && upperCaseYes === false){
    alert('Please select at least 1 character type');
  }

}

// Function for getting a random element from an array
function getRandom(arr) {
  let indexRandom = Math.floor(Math.random() * arr.length);
  let random = arr[indexRandom];

  return random;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);