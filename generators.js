//Generators (utilizado para controlar o fluxo da função)
function* hello() {
    console.log('Olá');
    yield 1;
    
    console.log('Front');
    yield;

    console.log('Dev');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());

//

function* numerosNaturais() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = numerosNaturais();

console.log(it.next());
console.log(it.next());
console.log(it.next());