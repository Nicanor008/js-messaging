import { Queue } from './queue';

// index.ts
(() => {
  // Setup code for your project
  const initProject = () => {
    // Initialize your project here
    console.log('Project is being set up...');

    const queue = new Queue();
    queue.enqueue('https://example.com/1');
    queue.printQueue();

    // Any other initialization code
    // e.g., starting a server, setting up configurations, etc.
  };

  // Start the project
  const startProject = () => {
    console.log('Starting the project...');

    // Call any necessary functions to start your project
    // e.g., starting server, connecting to databases, etc.
  };

  // Execute the setup and start functions
  initProject();
  startProject();

  // Print a message to the console
  console.log('Project has started successfully!');
})();

// IIFE
