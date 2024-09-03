"use strict";
// import { Queue } from './queue';
Object.defineProperty(exports, "__esModule", { value: true });
// // index.ts
// (() => {
//   // Setup code for your project
//   const initProject = () => {
//     // Initialize your project here
//     console.log('Project is being set up...');
//     const queue = new Queue();
//     queue.enqueue('https://example.com/1');
//     queue.enqueue('https://example.com/2');
//     queue.enqueue('https://example.com/3');
//     queue.printQueue();
//     console.log('.......Queue....', queue)
//     // Any other initialization code
//     // e.g., starting a server, setting up configurations, etc.
//   };
//   // Start the project
//   const startProject = () => {
//     console.log('Starting the project...');
//     // Call any necessary functions to start your project
//     // e.g., starting server, connecting to databases, etc.
//   };
//   // Execute the setup and start functions
//   initProject();
//   startProject();
//   // Print a message to the console
//   console.log('Project has started successfully!');
// })();
// // IIFE
// app.ts
// app.ts
const messageBroker_1 = require("./messageBroker");
const producer_1 = require("./producer");
const consumer_1 = require("./consumer");
(() => {
    // Initialize the message broker
    const broker = new messageBroker_1.MessageBroker();
    // Step 1: Initialize the queue
    const queueName = 'projectQueue';
    broker.createQueue(queueName);
    // Step 2: Create a producer and send messages
    const producer = new producer_1.Producer(broker);
    producer.send('Project-specific message 1', queueName);
    producer.send('Project-specific message 2', queueName);
    // Step 3: Initialize a consumer to process the queue
    const consumer = new consumer_1.Consumer(broker, queueName);
    // Step 4: Wait and then consume the messages
    setTimeout(() => {
        console.log('Consumer is now ready to process messages.');
        consumer.consume(); // Should process the messages in the queue
    }, 2000); // Simulate some delay before the consumer is ready
    console.log('Project setup is complete.');
})();
