// Assignment code here
function generatePassword() {
  // list of characters used //
  var Char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"
  var LowerCase = "abcdefghijklmnopqrstuvwxyz"
  var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var Num = "0123456789"
  var SpecialChar = "!@#$%^&*()"
  
  var useLowerCase = confirm("Would you like lowercase letters?")
  var useUpperCase = confirm("Would you like uppercase letters?")
  var UseNum = confirm("Would you like numbers?")
  var useSpeciaChar = confirm("Would you like special characters?")
  // window prompts //
  length = prompt("Password length from 8 to 128")
  passwordText = [""]
  // the for loop to repeat the action //
   for (i=0;i < length; i++) {
    passwordText += Char.charAt(Math.floor(Math.random() * Char.length));
    passwordText += Char.charAt(Math.floor(Math.random() * Num.length));
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
