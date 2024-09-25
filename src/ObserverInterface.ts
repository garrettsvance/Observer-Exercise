import { Flight } from "./entity/Flight";

interface ObserverInterface {
    update(flight : Flight | null) : void
}


export default ObserverInterface;