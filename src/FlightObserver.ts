import { Flight } from "./entity/Flight";
import ObserverInterface from "./ObserverInterface";

class FlightObserver implements ObserverInterface {
    update(flight : Flight): void {
        console.log(flight);
    }
}

export default FlightObserver;