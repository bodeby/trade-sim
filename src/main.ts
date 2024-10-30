import Simulator from "./classes/simulator";
import Statistics from "./classes/statistics";

type TimeStep = {
  price: number;
};

type TransactionList = Array<{ action: String; step: TimeStep }>;

// Event Loop
const eventLoop = (sim: Simulator, stats: Statistics) => {
  const transactions: TransactionList = [];

  function procede(step: TimeStep) {
    const action = sim.decideAction(step);
    sim.processTransaction(action, step);
    transactions.push({ action, step });
    // Could calculate and update stats here
    if (action === "sell") stats.updateStats(action, sim.balance);
  }

  sim.timeframe.forEach(procede); // Loop through each timestep
  stats.printStats(); // Print final statistics after loop
};

// Sample timeframe data
const timeframe: TimeStep[] = [
  { price: 40 },
  { price: 60 },
  { price: 120 },
  { price: 80 },
];

// Main setup
const main = () => {
  const sim = new Simulator(timeframe);
  const stats = new Statistics();
  eventLoop(sim, stats);
};

main();
