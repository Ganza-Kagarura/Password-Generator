const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12
let passwordOne = document.getElementById("firstpassword-btn")
let passwordTwo = document.getElementById("secondpassword-btn")

function generatePassword() {
   passwordOne.textContent = generateRandomPasswordOne()
   passwordTwo.textContent = generateRandomPasswordTwo()
}


function getRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters [randomChar]
}

function generateRandomPasswordOne() {
    let randomPasswordOne = ""
    for (i = 0; i < passwordLength; i += 1) {
        randomPasswordOne += getRandomChar()
    }
    return randomPasswordOne
}


function generateRandomPasswordTwo() {
    let randomPasswordTwo = ""
    for (i = 0; i < passwordLength; i += 1) {
        randomPasswordTwo += getRandomChar()
    }
    return randomPasswordTwo
}

