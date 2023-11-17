// Assignment code here
 // made a global blank array that will hold all variables that were called on 
var choices = []
//added function generatePassword so we can use the variables created and we won't get an order from the starter code
function generatePassword() {
 
  //added variables to identify elements of the password
var capital = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~" ]
var numerical = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//lets user choose a person length matching criteria with prompt
 passwordLength = prompt ("Select a number between 8 and 128 for Password Length");
// logs choice to see if code works and amount of characters user chose
console.log (passwordLength)

// Sets criteria for password generation 
if (passwordLength >= 8 && passwordLength <= 128){
  password.Length = passwordLength;
  // Gives user choices through confirm prompts and adds what they chose to choices array
  if (confirm("Want to include Capital Letters?"))
    choices = choices.concat(capital);
  if (confirm("Want lowercase letters?"))
    choices = choices.concat(lowercase);
  if (confirm("Want special characters in your password?"))
    choices = choices.concat(special);
  if (confirm("Want numerical values in your password?"))
    choices = choices.concat(numerical);
}
// If user doesn't choose correct length they will get this error message
else{
  alert("Please have password between 8-128 characters.")
}
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // some math so that when it runs this function it will choose random characaters meeting the user's choice of length creating the password
var password = "";
 for (var i = 0; i < passwordLength; i++){
  var wordPass = Math.floor(Math.random() * choices.length);
  password = password + choices[wordPass];
 }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


