// classes
import Simulator from "./classes/simulator";
import Statistics from "./classes/statistics";

// types
import timeframe from "./data/sample";

const main = () => {
  // Create a new statistics tracker
  const statistics = new Statistics(5_000);

  // Create a new simulator ! DEPENDENCY INJECTION: statistics class
  const simulator = new Simulator(timeframe, statistics);

  simulator.simulate(); // Run the simulation
};

main(); // Run the main function
