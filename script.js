const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const passwordGeneratorForm = document.getElementById('passwordGeneratorForm');
const includeUppercaseEl = document.getElementById('includeUppercase')
const includeNumbersEl = document.getElementById('includeNumbers') 
const includeSymbolsEl = document.getElementById('includeSymbols') 
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')
const upperCaseCharCodes = arrayFromLowToHigh(65,90)
const lowerCaseCharCodes = arrayFromLowToHigh(97,122)
const numbersCharCodes = arrayFromLowToHigh(48,57)
const symbolsCharCodes = arrayFromLowToHigh(33,47).concat
(arrayFromLowToHigh(58,64)).concat
(arrayFromLowToHigh(91,96)).concat
(arrayFromLowToHigh(123,126))
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e =>{
    e.preventDefault();
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseEl.checked
    const includeNumbers = includeNumbersEl.checked
    const includeSymbols = includeSymbolsEl.checked
    const password = generatePassword(characterAmount,includeUppercase,includeSymbols,includeNumbers)
    passwordDisplay.textContent = password
    
})

function generatePassword(characterAmount,includeUppercase,includeSymbols,includeNumbers){
    let charCodes = lowerCaseCharCodes
    if(includeUppercase) charCodes = charCodes.concat(upperCaseCharCodes)
    if(includeNumbers) charCodes = charCodes.concat(numbersCharCodes)
    if(includeSymbols) charCodes = charCodes.concat(symbolsCharCodes)

    const passwordCharacters = []
    for(let i =0; i < characterAmount; i++){
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')

}

function arrayFromLowToHigh(low,high){
    const array = [];
    for(let i = low; i <= high; i++){
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e){
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

