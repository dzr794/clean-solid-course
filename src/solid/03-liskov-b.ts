import Vehicle from './03-liskov-c';

export class Tesla extends Vehicle{

    constructor( private numberOfSeats: number ) {
      super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Audi extends Vehicle{

    constructor( private numberOfSeats: number ) {
      super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle{

    constructor( private numberOfSeats: number ) {
      super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle{

    constructor( private numberOfSeats: number ) {
      super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

export class Lexus extends Vehicle{

    constructor( private numberOfSeats: number ) {
      super();
    }

    getNumberOfSeats() {
        return this.numberOfSeats;
    }
}

