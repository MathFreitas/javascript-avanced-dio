//spread operator c/ lista

const multi = (...args) => args.reduce((acc, value) => acc * value, 1);

const soma = (...rest) => {
    return multi(...rest);
};