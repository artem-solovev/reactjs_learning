console.log( 'destructuring' );

const person = {
    age: 26,
    location: {
        city: 'Moscow',
        temp: 2
    }
};

const { name: firstName = 'Anonymous', age } = person;
const { city, temp: temperature } = person.location;

console.log( `${firstName} is ${age}.` );
console.log( `It's ${temperature} in ${city}.` );