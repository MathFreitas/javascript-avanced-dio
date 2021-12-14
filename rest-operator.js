//rest operator (...)

function soma(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(soma(2, 2, 2, 3, 5));