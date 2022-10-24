class CaseController {
    constructor(textArea){
        this.textArea = textArea
    }

    /**
     * Text to lower case
     */
    toLower = () => {
        try {
            const text = this.#areaInnerText
            this.textArea.innerText = text.toLowerCase()
        } catch (error) {
            console.log(error)
        }
    }
    
    /**
     * Text to UPPER CASE
     */
    toUpper = () => {
        try {
            const text = this.#areaInnerText
            this.textArea.innerText = text.toUpperCase()
        } catch (error) {
            console.log(error)
        }
    }
    
    /**
     * Text to Sentence case
     */
    toSentence = () => {
        try {
            const text = this.#areaInnerText
            const capitalText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
            this.textArea.innerText = capitalText
        } catch (error) {
            console.log(error)
        }
    }
    
    /**
     * Text to Capitalized Case
     */
    toCapitalized = () => {
        try {
            const text = this.#areaInnerText.split(' ')
            const capitalWord = []
            text.forEach(word => {
                const capitalText = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                capitalWord.push(capitalText)
            })
            this.textArea.innerText = capitalWord.join(' ')
        } catch (error) {
            console.log(error)
        }
    }

    
    /**
     * Invert the cases
     * If it's a uppercase it will be a lowercase and vice versa
     */
    toInverse = () => {
        try {
            const text = [...this.#areaInnerText]
            let invertedText = ''
            text.forEach(letter => {
                invertedText += this.#isUpperCase(letter) ? letter.toLowerCase() : letter.toUpperCase()
            })
            
            this.textArea.innerText = invertedText
        } catch (error) {
            console.log(error)
        }
    }
    
    /**
     * Verify if a char is upper or lower case
     * @param {String} char 
     * @returns 'true' if it's upper, 'false' if it's lower
     */
    #isUpperCase = (char) => !!/[A-Z]/.exec(char[0])
    
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