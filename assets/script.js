// Get references to the #generate element
const generateBtn = document.querySelector('#generate');
const selectBtn = document.querySelector('#select-criteria');

// define initial object of characters
const characters = {
  lower: getRandomLower,
  upper: getRandomUpper,
  digits: getRandomDigit,
  special: getRandomSpecial,
};

function secureMathRandom() {
  return (
    window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1)
  );
}

// Display value of slider setting
var slider = document.getElementById('myRange');
var output = document.getElementById('length');
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};

// Generator Functions
// All the functions that are responsible to return a random value that we will use to create password.
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomDigit() {
  return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
}
function getRandomSpecial() {
  const symbols = '!@#$&?';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// At click of select criteria button - prompt user with list of checkboxes and selectors for password

selectBtn.addEventListener('click', function () {
  document.querySelector('.selection-card').style.display = 'block';
});

// At click, change Select Criteria to Generate Password

selectBtn.addEventListener('click', function () {
  document.getElementById('select-criteria').style.display = 'none';
  document.getElementById('generate').style.display = 'block';
});

// get references to each checkbox
var lowercaseCheck = document.getElementById('lowercase');
var uppercaseCheck = document.getElementById('uppercase');
var digitsCheck = document.getElementById('digits');
var specialCheck = document.getElementById('special');
var passwordText = document.querySelector('#password');
var password = passwordText.value;

//Generate password depending on what user selects.
function generatePassword(length, lower, upper, digits, special) {
  let generatedPassword = '';
  const typesCount = lower + upper + digits + special;
  const typesArr = [{ lower }, { upper }, { digits }, { special }].filter(
    (item) => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return '';
  }
  for (let i = 0; i < length; i++) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += characters[funcName]();
    });
  }
  return generatedPassword
    .slice(0, length)
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
}
// function that handles the checkboxes state, so at least one needs to be selected. The last checkbox will be disabled.
function disableOnlyCheckbox() {
  let totalChecked = [
    lowercaseCheck,
    uppercaseCheck,
    digitsCheck,
    specialCheck,
  ].filter((el) => el.checked);
  totalChecked.forEach((el) => {
    if (totalChecked.length == 1) {
      el.disabled = true;
    } else {
      el.disabled = false;
    }
  });
}

[lowercaseCheck, uppercaseCheck, digitsCheck, specialCheck].forEach((el) => {
  el.addEventListener('click', () => {
    disableOnlyCheckbox();
  });
});

// Write password to the #password input
function writePassword() {
  const passwordLength = +slider.value;
  const hasLower = lowercaseCheck.checked;
  const hasUpper = uppercaseCheck.checked;
  const hasDigit = digitsCheck.checked;
  const hasSpecial = specialCheck.checked;
  generatedPassword = true;
  passwordText.innerText = generatePassword(
    passwordLength,
    hasLower,
    hasUpper,
    hasDigit,
    hasSpecial
  );
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
