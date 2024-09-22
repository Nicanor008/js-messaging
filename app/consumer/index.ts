import { MessageBroker } from '../messageBroker';

export class Consumer {
  constructor(private broker: MessageBroker, private queueName: string) {}

  consume() {
    const queue = this.broker.getQueue(this.queueName);
    if (queue) {
      while (!queue.isEmpty()) {
        const message: any = queue.dequeue();
        const currentTime = Date.now();
        const timeTaken = (currentTime - message.timestamp) / 1000; // Calculate time in seconds

        console.log(`Processing(Consumer) message from "${this.queueName}" in ${timeTaken} seconds: ${message.content}`);
        // Perform message processing here
      }
    } else {
      console.error(`Queue "${this.queueName}" not initialized!`);
    }
  }
}
