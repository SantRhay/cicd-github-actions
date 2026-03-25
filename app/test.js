const soma = require('./index');

if (soma(2, 2) !== 4) {
    throw new Error("Test falhou!");
}

console.log("Test passou!");