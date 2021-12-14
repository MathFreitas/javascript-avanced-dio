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

