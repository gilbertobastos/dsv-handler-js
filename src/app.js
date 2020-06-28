class DelimiterSeparatedValuesHandler {

    /**
     * Constructor :D
     * 
     * @param {String} delimiterSymbol 
     * @param {String} newLineSymbol 
     * @param {String} escapeSymbol Optional.
     */
    constructor(delimiterSymbol, newLineSymbol, escapeSymbol = null) {
        
        this.delimiterSymbol = delimiterSymbol;
        this.newLineSymbol = newLineSymbol;
        this.escapeSymbol = escapeSymbol;

    }

    /**
     * Method responsible for converting the DSV-text to an object, where 
     * the object is an "array of arrays" (array of lines).
     *
     * @param {String} text The text that will be converted to a object.
     * @returns {Object} The object.
     */
    covertDSVTextToObject(text) {
        
        let object = [[]];
        let columnText = '';
        let lineCursor = 0;
        
        for (let charCursor = 0; charCursor < text.length; charCursor++) {

            if (text[charCursor] === this.delimiterSymbol) {
                
                object[lineCursor].push(columnText), 
                columnText = '';
    
            } else if (this.escapeSymbol && text[charCursor] === this.escapeSymbol) {
                
                charCursor += this.escapeSymbol.length;
                while (charCursor < text.length && text[charCursor] !== this.escapeSymbol) {

                    columnText += text[charCursor++];

                }

                object[lineCursor].push(columnText);
                columnText = '';
                charCursor +=
                    this.escapeSymbol.length + 
                    this.delimiterSymbol.length - 1;
              
            } else if (text.substring(charCursor, charCursor + this.newLineSymbol.length) === this.newLineSymbol) {

                if (columnText !== '') {

                    object[lineCursor].push(columnText);
                    columnText = '';
    
                }

                if (charCursor + this.newLineSymbol.length > text.length - 1) {

                    break;

                } else {

                    object.push([]);
                    charCursor += this.newLineSymbol.length - 1;
                    lineCursor++;

                }
                
            } else {

                columnText += text[charCursor];

            }
        }

        if (columnText !== '') {

            object[lineCursor].push(columnText);
        }

        return object;
    }

    /**
     * Method responsible for converting an object (array of arrays) to a DSV-text.
     * 
     * @param {Object} object Array of arrays.
     * @returns {String} The DSV-text.
     */
    convertObjectToDSVText(object) {    
        
        let text = '';
        for (let lineCursor = 0; lineCursor < object.length; lineCursor++) {

            let columnCursor = 0;
            while (true) {

                object[lineCursor][columnCursor].indexOf(this.delimiterSymbol) > 0 ?
                    text += this.escapeSymbol + object[lineCursor][columnCursor] + this.escapeSymbol :
                    text += object[lineCursor][columnCursor];
                    
                if (columnCursor + 1 === object[lineCursor].length) {
                    break;
                } else {
                    text += this.delimiterSymbol;
                }
                columnCursor++;
            }

            text += this.newLineSymbol;

        }

        return text;

    }
}

module.exports = DelimiterSeparatedValuesHandler;