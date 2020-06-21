const DelimiterSeparatedValuesHandler = require('./app');

let dsvHandler = new DelimiterSeparatedValuesHandler(';', '\n', '"');

let dsvTextGoodArtists = 
    'Col1;Col2;Col3;Col4\n' +
    'RDP;Voivod;Metallica;Sepultura\n' +
    'Ivan Lins;Gilberto Gil;"Olivia;;;Byington";Flávio Venturini';

let objectGoodDrummers = 
    [
        ['Col1', 'Col2', 'Col3'],
        ['Billy Cobham', 'Bill Bruford', 'Alan White'],
        ['Carl Palmer', 'Neil Peart', 'Peter;;;Erskine']  
    ];

console.log('Parsing the text from a DSV to object:');
console.log(dsvHandler.covertDSVTextToObject(dsvTextGoodArtists));

console.log('Bulding a DSV text from a object:');
console.log(dsvHandler.convertObjectToDSVText(objectGoodDrummers));