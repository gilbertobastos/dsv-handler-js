import DelimiterSeparatedValuesHandler from './DelimiterSeparatedValuesHandler.js';

const dsvHandler = new DelimiterSeparatedValuesHandler(';', '\n');
dsvHandler.addColumnStructure(new DSVColumnStructure('Nome do ser humano', String));
dsvHandler.addColumnStructure(new DSVColumnStructure('Data de Nascimaneto', String));
