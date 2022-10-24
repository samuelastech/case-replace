class InfosController {
    constructor(textArea){
        this.textArea = textArea
        this.tooltip = document.querySelector('.tooltiptext')
        this.words = document.querySelector('#wordsCounter')
    }

    /**
     * Count the number of words in the text area
     */
    wordsCounter = () => {
        const text = this.textArea.innerText
        const textWords = text.split(/\s+/)
        let quantity = textWords.length
        const lastElement = textWords[quantity-1]
        if(lastElement === '') this.words.innerText = --quantity
        else this.words.innerText = quantity
    }

    /**
     * Copies the text from text area and paste in the clipboard
     */
    copyToClipboard = () => {
        try {
            const text = this.#areaInnerText
            navigator.clipboard.writeText(text)
            this.tooltip.innerText = 'Text copied!'
        } catch (error) {
            this.tooltip.innerText = 'You need to provide a text!'
            console.log(error)
        }
    }

    /**
     * On mouse leave, the 'Copy to clipboard' is restored from 'Text copied!'
     */
    resetTooltip = () => {
        this.tooltip.innerText = 'Copy to clipboard'
    }

    /**
     * @returns the inner text of the text area
     * @throws an error if it's null
     */
     get #areaInnerText(){
        const text = this.textArea.innerText
    
        if(text){
            return text
        } else {
            this.textArea.classList.add('-error')
            throw new Error('null input')
        }
    }
}