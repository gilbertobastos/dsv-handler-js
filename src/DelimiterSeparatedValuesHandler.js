class DelimiterSeparatedValuesHandler {

    constructor(delimiterSymbol, newLineSymbol, escapeSymbol = null) {
        this.delimiterSymbol = delimiterSymbol;
        this.newLineSymbol = newLineSymbol;
        this.escapeSymbol = escapeSymbol;
        this.columnStructureArray = [];
    }

    addColumnStructure(columnStructure) {
        this.columnStructureArray.push(columnStructure);
    }

    covertDSVTextToObject(text, hasHeader = false) {
        
        var object = [[]];
        var columnText;
        var l = 0;
        
        for (var c = 0; c < text.length; c++) {
            if (text[c] === this.delimiterSymbol) {
                
                object[l].push(columnText);
                columnText = '';
              
            } else if (this.escapeSymbol || text[c] === this.escapeSymbol) {
                
                c += this.escapeSymbol.length;
                while (text[c] !== this.escapeSymbol) {
                    columnText += text[c++];
                }
                object[l].push(columnText);
                columnText = '';
              
            } else if (text[c] === this.newLineSymbol) {

                if (columnText !== '') {
                    object[l].push(columnText);
                    columnText = '';
                }

                if (c + this.newLineSymbol.length > text.length - 1) {
                    break;
                } else {
                    object.push([]);
                    l++;
                }
                
            } else {

                columnText += text[c];

            }
        }

        if (columnText !== '') {
            object[l].push(columnText);
        }

        return object;
    }

    convertObjectToDSVText(object, printHeader = true) {    

    }
}

class DSVColumnStructure {

    constructor(columnName, columnType) {
        this.columnName = columnName;
        this.columnType = columnType;
    }
}

const dsvHandler = new DelimiterSeparatedValuesHandler(';', '\n');
dsvHandler.addColumnStructure(new DSVColumnStructure('Nome do ser humano', String));
dsvHandler.addColumnStructure(new DSVColumnStructure('Data de Nascimaneto', String));

var object = dsvHandler.covertDSVTextToObject(
    'Batata;FuckYou\nFUCK;YOU', false
);

console.log('Batata');
console.log(object);