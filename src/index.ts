// classes
import Simulator from "./classes/simulator";
import Statistics from "./classes/statistics";
import Transaction from "./classes/transaction";

// utils
import { userInput } from "./utils/input";

// types
import { TimeStep } from "./types/all";
import { TransactionList } from "./types/all";

// DATA: Sample timeframe data
const timeframe: TimeStep[] = [
  { price: 40 },
  { price: 60 },
  { price: 120 },
  { price: 80 },
];

// Event Loop
const simulation = (sim: Simulator, stats: Statistics) => {
  const transactions: TransactionList = [];

  // process buy/sell decision
  const process = async (step: TimeStep) => {
    const action = sim.decideAction(step);
    sim.processTransaction(action, step);
    return new Transaction(action, step);
  }

  // create transaction on time step
  const decide = async (step: TimeStep) => {
      const transaction = await process(step);
      stats.handleTransaction(transaction);
      transactions.push(transaction);
  }

  sim.timeframe.forEach(decide); // Loop through each timestep
};

const main = () => {
  const simulator = new Simulator(timeframe); // Create a new simulator
  const statistics = new Statistics(5_000);   // Create a new statistics tracker
  simulation(simulator, statistics);          // Run the simulation
  console.table(statistics.getStatistics());         // Display the timeframe
};

main(); // Run the main function