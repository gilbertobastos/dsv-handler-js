const DelimiterSeparatedValuesHandler = require('./app');

let dsvHandler = new DelimiterSeparatedValuesHandler(';', '\n', '"');

let dsvTextGoodArtists = 
    'Col1;Col2;Col3;Col4\n' +
    'RDP;Voivod;Metallica;Sepultura\n' +
    'Ivan Lins;Gilberto Gil;Olivia Byington;Flávio Venturini';

let objGoodArtists = dsvHandler.covertDSVTextToObject(dsvTextGoodArtists);
console.log(objGoodArtists);
