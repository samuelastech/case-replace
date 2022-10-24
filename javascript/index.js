const textArea = document.querySelector('.text-area')
const buttons = [...document.querySelectorAll('[id]')]
const button = {}

const Case = new CaseController(textArea)
const Infos = new InfosController(textArea)

const copy = () => Infos.copyToClipboard()
const reset = () => Infos.resetTooltip()

/**
 * Verify which button was clicked and direct it to the function
 * @param {String} buttonID
 */
const handleButtonClick = (buttonID) => {
    switch (buttonID) {
        case 'toSentence': Case.toSentence()
            break;

        case 'toCapitalized': Case.toCapitalized()
            break;

        case 'toLower': Case.toLower()
            break;
        
        case 'toUpper': Case.toUpper()
            break;

        case 'toInverse': Case.toInverse()
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

/**
 * Add multiples events listeners to the textarea
 */
addEventListenerAll(textArea, 'keyup focusout', Infos.wordsCounter)