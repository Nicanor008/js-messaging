import { MessageBroker } from '../messageBroker';

export class Producer {
  constructor(private broker: MessageBroker) {}

  send(message: string | number, queueName: string, routingKey?: string) {
    const queue = this.broker.getQueue(queueName);
    if (queue) {
      if (routingKey) {
        const exchange = this.broker.getExchange(queueName);
        if (exchange) {
          exchange.route(message, routingKey);
        }
      } else {
        queue.enqueue(message);
      }
    } else {
      console.error(`Queue ${queueName} not initialized!`);
    }
  }
}
