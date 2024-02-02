import { Tesla, Audi, Toyota, Honda, Lexus } from './03-liskov-b';
import Vehicle from './03-liskov-c';


(() => {
    
    const printCarSeats = ( cars: Vehicle[] ) => {
        
      for (const car of cars) {
        console.log( `${car.constructor.name} cars have ${car.getNumberOfSeats()} seats.` );
        
      }

    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Lexus(4),
    ];


    printCarSeats( cars );

})();