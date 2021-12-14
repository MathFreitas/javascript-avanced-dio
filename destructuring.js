//Arrays
//modo verboso
var arr = ['Uva', 'Banana', 'Laranja', ['Tomate']];

var uva = arr[0];
var banana = arr[1];
var laranja = arr[2];
var tomate = arr[3][0];

//destructuring assigment
var [uva, banana, laranja, [tomate]] = ['Uva', 'Banana', 'Laranja', ['Tomate']];

console.log(uva, banana, laranja, [tomate]);

//Objetos
//modo verboso
var obj = {
    name: 'Matheus',
    props: {
        age: 23
    }
};
var age = obj.props.age;

//destructuring assigment
var obj = {
    name: 'Matheus',
    props: {
        age: 23
    }
};
var { props: { age } } = obj;
console.log(age);


//Objetos e Arrays
//modo verboso
var obj = {
    name: 'Matheus',
    props: {
        age: 23,
        favoriteColors: ['preto', 'verde']
    }
};
var color1 = obj.props.favoriteColors[0];
var color2 = obj.props.favoriteColors[1];

//destructuring assigment
var obj = {
    name: 'Matheus',
    props: {
        age: 23,
        favoriteColors: ['preto', 'verde']
    }
};
var { props: { age, favoriteColors: [color1, color2] } } = obj;
console.log(color1);