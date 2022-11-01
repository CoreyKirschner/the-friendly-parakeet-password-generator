// Assignment code here
function generatePassword() {
  // list of characters used //
  var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"
  var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  // window prompts //
  length = prompt("Password length from 8 to 128")
  passwordText = [""]
  // the for loop to repeat the action //
   for (i=0;i < length; i++) {
    passwordText += char.charAt(Math.floor(Math.random() * char.length));
    passwordText += char.charAt(Math.floor(Math.random() * num.length));
   }
   // if statement for length of password //
   if (length < 8) {
    alert("Password must be 8 or more characters");
    return "";
   }
   if (length > 128) {
    alert("Password must be 128 or less characters");
    return "";
   }
   return passwordText;
}

// Added a copy button //e
  function copyPassword() {
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
  }
  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
