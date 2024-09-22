import { jsMessaging } from '../../app';

(() => {
  const projectName = 'TestProjectApp1-';

  // Create a producer and send messages
  const producer = jsMessaging.createProducer(projectName);
  producer.send('Test message 1');
  producer.send('Test message 2');
  producer.send('Test message 3');
  producer.send('Test message 4');
  producer.send('Test message 5');
  producer.send('Test message 6');

  // Create a consumer to process the queue
  const consumer = jsMessaging.createConsumer(projectName);

  // Wait and then consume the messages
  setTimeout(() => {
    console.log('Consumer is now ready to process messages.');
    consumer.consume(); // Should process the messages in the queue
  }, 2000); // Simulate some delay before the consumer is ready

  console.log('Test application setup is complete.');
})();
