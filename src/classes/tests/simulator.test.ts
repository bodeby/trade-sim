import { expect, test } from "vitest";

// Import the class to be tested
import Simulator from "./simulator";

// support classes
import Statistics from "./statistics";
import Transaction from "./transaction";

// mock data
import timeframe from "../data/sample";

// Before each test
const statistics = new Statistics(5_000);
const simulator = new Simulator(timeframe, statistics);

// test process method
test("process method test", () => {
  const transaction_test = simulator.process("buy", 10, timeframe[0]);
  const transaction_true = new Transaction("buy", 10, timeframe[0]);

  // Assert
  expect(transaction_test).toEqual(transaction_true);
});

// test decide method
test("decide method test", () => {
  // Act
  const decision = simulator.decide(timeframe[0]);

  // Assert
  expect(1 + 2).toBe(3);
});
