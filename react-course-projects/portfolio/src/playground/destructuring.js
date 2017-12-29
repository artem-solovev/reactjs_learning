/*
 * Object destructuring
 **/
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


/*
 * Array destructuring
 **/

 const adress = ['16 Vvedenskogo Street', 'Moscow', 'Moscow area', '117279'];
 const [, town, state = 'New York'] = adress;

 console.log( `You are in ${town} ${state}` );