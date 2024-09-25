import {Flight} from "./entity/Flight";
import ObserverInterface from "./ObserverInterface";

abstract class Subject {

    observers: ObserverInterface[] = [];

    add(observer : ObserverInterface) : void {
        this.observers.push(observer);
    }

    notify(flight: Flight | null) : void {
        if (this.observers.length > 0) {
            for (let observer of this.observers) {
                observer.update(flight);
            }
        }
    }

}

export default Subject;