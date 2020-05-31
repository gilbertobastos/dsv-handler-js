class FixedLenghtFormatHandler {

    fixedLengthRowTypeStructArray = [];

    addNewFixedLenghtType(fixedLengthRowType) {
        this.fixedLengthRowTypeStructArray.put(fixedLengthRowType);
    }

    convertFixedLengthFmtTextToObj(text) {

    }

    convertObjToFixedLengthFmtText (object) {
        
    }
}

class FixedLenghtRowTypeStructure {

    rowTypeFlag;
    posRowTypeFlag;
    fixedLengthColumnStructureArray;

    constructor(rowTypeFlag, posRowTypeFlag, fixedLengthColumnStructureArray) {
        this.rowTypeFlag = rowTypeFlag;
        this.posRowTypeFlag = posRowTypeFlag;
        this.fixedLengthColumnStructureArray = fixedLengthColumnStructureArray;
    }
}

class FixedLengthColumnStructure {

    columnType;
    columnPos;
    columnSize;

    constructor(columnType, columnPos, columnSize) {
        this.columnType = columnType;
        this.columnPos = columnPos;
        this.columnSize = columnSize;
    }
}