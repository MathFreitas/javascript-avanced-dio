//spread operator

const multi = (...args) => args.reduce((acc, value) => acc * value, 1);

const soma = (...rest) => {
    return multi(...rest);
};

//spread pode ser utilizado em strings, arrays, literal objects e objetos iteraveis

//spread em string
const string = 'Digital One';

function logArgs(...args) {
    console.log(args);
};

logArgs(...string);

//spread em array
const array = [1, 2, 3, 4, 5];

function logArgs(a, b, c, d, e) {
    console.log(a, b, c, d, e);
};

logArgs(...array);

//spread para concatenar arrays
const array2 = [...array, 6, 7, 8];

console.log(...array2);


//spread para concatenar dois arrays
const array3 = [...array, ...array2];

console.log(...array3);