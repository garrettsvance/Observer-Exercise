import { FlightFeed } from "./FlightFeed";
import FlightObserver from "./FlightObserver";
import FlightDeltaObserver from "./FlightDeltaObserver";

main();

function main() {
  let feed = new FlightFeed();
  let flightObserver = new FlightObserver();
  let flightDeltaObserver = new FlightDeltaObserver();

  feed.add(flightObserver);
  feed.add(flightDeltaObserver);

  feed.start();

}
