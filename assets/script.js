// Assignment code here

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// define initial object of characters
var characters = {
  lowercaseLetters: 'abcdefghijjklmnopqrstuvwzyz',

  uppercaseLetters: 'ABCDEFGHIJKLMNOPQRTSUVWXYZ',
  digits: '0123456789',
  special: '!@#$&?',
};

// At click of select criteria button - prompt user with list of checkboxes and selectors for password

generateBtn.addEventListener('click', function () {
  document.querySelector('.selection-card').style.display = 'block';
});

// At click, change Select Criteria to Generate Password

generateBtn.addEventListener('click', function () {
  document.getElementById('generate').textContent = 'Generate Password';
});

//Check to see what parameters user selects for password

// get references to each checkbox
var lowercaseCheck = document.getElementById('lowercase');
var uppercaseCheck = document.getElementById('uppercase');
var digitsCheck = document.getElementById('digits');
var specialCheck = document.getElementById('special');

//Generate password depending on what user selects.
function generatePassword() {
  var passwordLength = slider.value;
  var passwordGenerated = Math.floor(Math.random() * passwordLength);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// Display value of slider setting
var slider = document.getElementById('myRange');
var output = document.getElementById('length');
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};
