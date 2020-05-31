class DelimiterSeparatedValuesHandler {

    delimiterSymbol;
    newLineSymbol;
    columnStructureArray;
    escapeSymbol;

    constructor(delimiterSymbol, newLineSymbol, columnStructureArray, escapeSymbol = null) {
        this.delimiterSymbol = delimiterSymbol;
        this.newLineSymbol = newLineSymbol;
        this.columnStructureArray = columnStructureArray;
        this.escapeSymbol = escapeSymbol;
    }

    covertDSVTextToObject(text, hasHeader = false) {
        
    }

    convertObjectToDSVText(object, printHeader = true) {

    }
}

class DSVColumnStructure {

    columnName;
    columnType;

    constructor(columnName, columnType) {
        this.columnName = columnName;
        this.columnType = columnType;
    }
}