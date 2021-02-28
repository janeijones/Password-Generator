// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength; //variable for store user password length input

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "&", "/", ")", "(", "^", "@", "+", "-", "?"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var charList = [];
var generatedPassword = [];
var withNumbers;
var withSymbols;
var withUppercase;
var withLowercase;
var Testing = [];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//randomize characters in filled array

function randomize(passwordLength)
{
  console.log(passwordLength);
  for (var i = 0; i < passwordLength; i++) {
    //push each randomized character to array dynamically 
    generatedPassword.push((charList[Math.floor(Math.random() * charList.length)])); 
  }
}

//functions to concat all elements in criteria arrays to 1 empty array

function addNumbers()
{
  charList = charList.concat(num);
}

function addSymbols()
{
  charList = charList.concat(symbols)
}

function addUpperCase()
{
  charList = charList.concat(upperCase);
}

function addlowerCase()
{
  charList = charList.concat(lowerCase);
}


function generatePassword(){

  var passwordLength = prompt("Please enter the length of the password between 8 and 120")

  if (passwordLength < 8 || passwordLength > 128) //checks if passwordLength is between 8 and 128
  {
      //prompt user to re enter password length
      passwordLength = parseInt(prompt("Password length must be between 8 and 128 "));
      console.log(passwordLength);
      //future update: move confirmation to functions
        withNumbers = confirm("Would you like to use numbers?");
        withSymbols = confirm("Would you like to use special characters: !, #, $, %, &, /, (, )");
        withUppercase = confirm("Would you like to use uppercase letters?");
        withLowercase = confirm("Would you like to use lowercase letters?");
        console.log(withNumbers, withSymbols, withUppercase, withLowercase);
      
      
  }
  //checks if nothing was entered
    else if (passwordLength === null)
    {
        passwordLength = parseInt(prompt("Password cannot be empty. Please enter the length of the password between 8 and 128"));
        console.log(passwordLength);
        withNumbers = confirm("Would you like to use numbers?");
        withSymbols = confirm("Would you like to use special characters: !, #, $, %, &, /, (, )");
        withUppercase = confirm("Would you like to use uppercase letters?");
        withLowercase = confirm("Would you like to use lowercase letters?");
        console.log(withNumbers, withSymbols, withUppercase, withLowercase);
    }

    else 
    {
        console.log(passwordLength);
        withNumbers = confirm("Would you like to use numbers?");
        withSymbols = confirm("Would you like to use special characters: !, #, $, %, &, /, (, )");
        withUppercase = confirm("Would you like to use uppercase letters?");
        withLowercase = confirm("Would you like to use lowercase letters?");
        console.log(withNumbers, withSymbols, withUppercase, withLowercase);
    };

  
    //checks if atleast one character type was selected
  if (!withNumbers && !withSymbols && !withUppercase && !withLowercase) 
      {
        window.alert("Atleast one character type should be chosen");
        return;
      }

      // checks which criteria is true
      else (withNumbers || withSymbols || withUppercase || withLowercase)
      {
        
        if (withNumbers){
          addNumbers();
        }

        if (withSymbols){
          addSymbols();
        }

        if(withUppercase){
        addUpperCase();
        }

        if(withLowercase){
        addlowerCase();
        }
        console.log(charList);

        randomize(passwordLength);
        return generatedPassword.join(""); //return password without delimeters 
       };

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


