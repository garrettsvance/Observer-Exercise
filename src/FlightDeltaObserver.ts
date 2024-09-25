import ObserverInterface from "./ObserverInterface";
import {Flight} from "./entity/Flight";

class FlightDeltaObserver implements ObserverInterface {

    prevLongitude: number | null = null;
    prevLatitude: number | null = null;
    prevVelocity: number | null = null;
    prevGeoAltitude: number | null = null;
    prevBaroAltitude: number | null = null;
    prevFlight : Flight | null = null;

    update(flight : Flight | null): void {
        if (this.prevLongitude === null) {
            console.log("Waiting on Flight Data")
        } else {
            console.log("Updated Flight Info:");
            console.log(this.prevLongitude);
            console.log(this.prevLatitude);
            console.log(this.prevVelocity);
            console.log(this.prevGeoAltitude);
            console.log(this.prevBaroAltitude);
        }
        if(flight !== null) {
            this.prevLongitude = flight?.longitude;
            this.prevLatitude = flight?.latitude;
            this.prevVelocity = flight?.velocity;
            this.prevGeoAltitude = flight?.geo_altitude;
            this.prevBaroAltitude = flight?.baro_altitude;
        }
    }
}

export default FlightDeltaObserver;