//Symbol
const uniqueId = Symbol('Olá');

//Para obter a propriedade de Symbol
Object.getOwnPropertySymbols();

//well known symbols (adicionar capacidades ao symbol)
Symbol.split;
Symbol.toStringTag;
Symbol.iterator;

//Symbol.iterator (uma interface para fazer interações) 

const arr = [1, 2, 3, 4]

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const arr2 = [...obj];





