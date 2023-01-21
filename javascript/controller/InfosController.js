class InfosController {
    constructor(textArea) {
        this.textArea = textArea
        this.tooltip = document.querySelector('.tooltiptext')

        let [
            words,
            lines,
            uniqueWords
        ] = [
            'wordsCounter',
            'linesCounter',
            'uniqueWordsCounter'
        ].map(item => document.getElementById(item))

        this.words = words
        this.lines = lines
        this.uniqueWords = uniqueWords
    }

    /**
     * Count the number of words in the text area
     */
    wordsCounter = () => {
        const text = this.textArea.value
        const textWords = text.split(/\s+/)
        let quantity = textWords.length
        const lastElement = textWords[quantity - 1]
        if (lastElement === '') this.words.innerText = --quantity
        else this.words.innerText = quantity
    }

    /**
     * Count the number of unique words in the text area
     */
    uniqueWordsCounter = () => {
        const text = this.textArea.value
        const textWords = text.split(/\s+/)
        const uniqueWords = Array.from(new Set(textWords)).length
        this.uniqueWords.innerText = uniqueWords
    }

    /**
     * Count the number of words in the text area
     */
    linesCounter = () => {
        const text = this.textArea.value
        const breakLines = text.split(/\n/)
        let quantity = breakLines.length
        this.lines.innerText = quantity
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
    get #areaInnerText() {
        const text = this.textArea.value

        if (text) {
            return text
        } else {
            this.textArea.classList.add('-error')
            throw new Error('null input')
        }
    }
}