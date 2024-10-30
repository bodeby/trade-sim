// Entity class

interface Engine {
  events: any[];
}

class Engine {
  constructor() {
    this.events = [];
  }
}

// Statistics class

class Statistics {
  constructor() {}
}

// Transaction class

interface Transaction {
  type: string;
  amount: number;
}

class Transaction {
  constructor(type: string, amount: number) {
    this.type = type;
    this.amount = amount;
  }
}

// setup base classes
const main = () => {
  const engine = new Engine();
  const transactions = [];

  console.log("main");
  eventLoop();
};

// simple event loop
const eventLoop = () => {
  while (true) {
    setTimeout(() => {
      console.log("event loop running");
    }, 1);
  }
};
