import { MessageBroker } from './messageBroker';
import { Producer } from './producer';
import { Consumer } from './consumer';

(() => {
  // Initialize the message broker
  const broker = new MessageBroker();

  // Step 1: Initialize the queue
  const queueName = 'projectQueue';
  broker.createQueue(queueName);

  // Step 2: Create a producer and send messages
  const producer = new Producer(broker);
  producer.send('Project-specific message 1', queueName);
  producer.send('Project-specific message 2', queueName);

  // Step 3: Initialize a consumer to process the queue
  const consumer = new Consumer(broker, queueName);

  // Step 4: Wait and then consume the messages
  setTimeout(() => {
    console.log('Consumer is now ready to process messages.');
    consumer.consume(); // Should process the messages in the queue
  }, 2000); // Simulate some delay before the consumer is ready

  console.log('Project setup is complete.');
})();
