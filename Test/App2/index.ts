import { jsMessaging } from '../../app';

(() => {
  const projectName = 'Test-Project-App-2';

  // Create a producer and send messages
  const producer = jsMessaging.createProducer(projectName);
  producer.send('Send to User 1');
  producer.send('URL To Consumer');
  producer.send('Accept request');
  producer.send('Process Request');
  producer.send('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. ');
  producer.send('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s');

  // Create a consumer to process the queue
  const consumer = jsMessaging.createConsumer(projectName);

  // Wait and then consume the messages
  setTimeout(() => {
    console.log('Consumer is now ready to process messages.');
    consumer.consume(); // Should process the messages in the queue
  }, 2000); // Simulate some delay before the consumer is ready

  console.log('Test application setup is complete.');
})();
