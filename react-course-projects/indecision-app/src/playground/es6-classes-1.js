class Person {
    constructor( name = 'Unknown', age = 0 ) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi. I am ${ this.name }!`;
    }

    getDescription() {
        return `${ this.name} is ${ this.age } year(s) old.`;
    }
}

class Student extends Person {
    constructor( name, age, major ) {
        super( name, age );
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if ( this.hasMajor() ) {
            description += ` Their major is ${ this.major }.`;
        }
    }
}

class Traveler extends Person {
    constructor( name, age, homeLocation ) {
        super( name, age );
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGretting();

        if (  this.homeLocation ) {
            greeting += ` I am visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Traveler( 'Artem Solovev', 26, 'Tver' );
console.log( me.getGreeting() );

const other = new Traveler();
console.log( other.getGreeting() );