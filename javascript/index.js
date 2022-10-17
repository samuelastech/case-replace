/**
 * Elements
 */
const textArea = document.querySelector('.text-area')
const buttons = [...document.querySelectorAll('[id]')]
const button = {}

/**
 * Text to lower case
 */
const toLower = () => {
    const text = textArea.innerText
    textArea.innerText = text.toLowerCase()
}

/**
 * Text to UPPER CASE
 */
const toUpper = () => {
    const text = textArea.innerText
    textArea.innerText = text.toUpperCase()
}

/**
 * Text to Sentence case
 */
 const toSentence = () => {
    const text = textArea.innerText
    const capitalText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    textArea.innerText = capitalText
}

/**
 * Text to Capitalized Case
 */
 const toCapitalized = () => {
    const text = textArea.innerText.split(' ')
    capitalWord = []
    text.forEach(word => {
        const capitalText = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        capitalWord.push(capitalText)
    })
    textArea.innerText = capitalWord.join(' ')
}

/**
 * Verify which button was clicked and direct it to the function
 * @param {String} buttonID
 */
const handleButtonClick = (buttonID) => {
    switch (buttonID) {
        case 'toSentence': toSentence()
            break;

        case 'toCapitalized': toCapitalized()
            break;

        case 'toLower': toLower()
            break;
        
        case 'toUpper': toUpper()
            break;
    }
}

/**
 * Adds an event listener for all buttons
 */
buttons.forEach(element => {
    const clickedButton = element.id
    button[clickedButton] = element
    element.addEventListener('click', () => {
        handleButtonClick(clickedButton)
    })
})