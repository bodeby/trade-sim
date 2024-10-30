import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// User input helper
export const userInput = (query: string): Promise<string> => {
  return new Promise((resolve) => rl.question(query, resolve));
};
