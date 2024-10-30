// classes
import Simulator from "./classes/simulator";
import Statistics from "./classes/statistics";

// types
import { TimeStep } from "./types/all";

// DATA: Sample timeframe data
const timeframe: TimeStep[] = [
  { price: 40 },
  { price: 60 },
  { price: 120 },
  { price: 80 },
];

const main = () => {
  const statistics = new Statistics(5_000); // Create a new statistics tracker
  const simulator = new Simulator(timeframe, statistics); // Create a new simulator

  simulator.simulate(); // Run the simulation
};

main(); // Run the main function
