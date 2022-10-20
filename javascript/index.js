/**
 * Elements
 */
const textArea = document.querySelector('.text-area')
const buttons = [...document.querySelectorAll('[id]')]
const button = {}
const tooltip = document.querySelector('.tooltiptext')

/**
 * Infos Refresh
 */
const words = document.querySelector('#wordsCounter')

/**
 * Count the number of words in the text area
 */
const wordsCounter = () => {
    const text = textArea.innerText
    const textWords = text.split(/\s+/)
    let quantity = textWords.length
    const lastElement = textWords[quantity-1]
    if(lastElement === '') words.innerText = --quantity
    else words.innerText = quantity
}

/**
 * Copies the text from text area and paste in the clipboard
 */
const copyToClipboard = () => {
    try {
        const text = areaInnerText()
        navigator.clipboard.writeText(text)
        tooltip.innerText = 'Text copied!'
    } catch (error) {
        tooltip.innerText = 'You need to provide a text!'
        console.log(error)
    }
}

/**
 * On mouse leave, the 'Copy to clipboard' is restored from 'Text copied!'
 */
const resetTooltip = () => {
    tooltip.innerText = 'Copy to clipboard'
}

/**
 * @returns the inner text of the text area
 * @throws an error if it's null
 */
const areaInnerText = () => {
    const text = textArea.innerText
    if(text){
        return textArea.innerText
    }
    else {
        textArea.classList.add('-error')
        throw new Error('null input')
    }
}

/**
 * Text to lower case
 */
const toLower = () => {
    try {
        const text = areaInnerText()
        textArea.innerText = text.toLowerCase()
    } catch (error) {
        console.log(error)
    }
}

/**
 * Text to UPPER CASE
 */
const toUpper = () => {
    try {
        const text = areaInnerText()
        textArea.innerText = text.toUpperCase()
    } catch (error) {
        console.log(error)
    }
}

/**
 * Text to Sentence case
 */
 const toSentence = () => {
    try {
        const text = areaInnerText()
        const capitalText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
        textArea.innerText = capitalText
    } catch (error) {
        console.log(error)
    }
}

/**
 * Text to Capitalized Case
 */
 const toCapitalized = () => {
    try {
        const text = areaInnerText().split(' ')
        capitalWord = []
        text.forEach(word => {
            const capitalText = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            capitalWord.push(capitalText)
        })
        textArea.innerText = capitalWord.join(' ')
    } catch (error) {
        console.log(error)
    }
}

/**
 * Verify if a char is upper or lower case
 * @param {String} char 
 * @returns 'true' if it's upper, 'false' if it's lower
 */
 const isUpperCase = (char) => !!/[A-Z]/.exec(char[0])

/**
 * Invert the cases
 * If it's a uppercase it will be a lowercase and vice versa
 */
const toInverse = () => {
    try {
        const text = [...areaInnerText()]
        let invertedText = ''
        text.forEach(letter => {
            invertedText += isUpperCase(letter) ? letter.toLowerCase() : letter.toUpperCase()
        })

        textArea.innerText = invertedText
    } catch (error) {
        console.log(error)
    }
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

        case 'toInverse': toInverse()
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

        // Removing .-error class on focusin
        const onError = textArea.classList.contains('-error')
        if(onError) textArea.addEventListener('focusin', () => {
            textArea.classList.remove('-error')
        })
    })
})

const addEventListenerAll = (element, events, fn) => { // Function
	events.split(' ').forEach(event => {
		element.addEventListener(event, fn)
	})
}

addEventListenerAll(textArea, 'keyup focusout', wordsCounter)