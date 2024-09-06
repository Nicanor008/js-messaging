import { MessageBroker } from '../messageBroker';

export class Consumer {
  constructor(private broker: MessageBroker, private queueName: string) {}

  consume() {
    const queue = this.broker.getQueue(this.queueName);
    if (queue) {
      while (!queue.isEmpty()) {
        const message = queue.dequeue();
        console.log(`Processing message from ${this.queueName}: ${message}`);
        // Perform message processing

      }
    } else {
      console.error(`Queue ${this.queueName} not initialized!`);
    }
  }
}
