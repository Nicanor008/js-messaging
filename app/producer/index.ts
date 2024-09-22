import { MessageBroker } from '../messageBroker';

export class Producer {
  private exchangeName: string;
  private routingKey: string;

  constructor(private broker: MessageBroker, exchangeName: string, projectName: string) {
    this.exchangeName = exchangeName;
    this.routingKey = `projectKey-${projectName}`;
  }

  send(message: string) {
    const exchange = this.broker.getExchange(this.exchangeName);
    if (exchange) {
      const timestamp = Date.now(); // Capture the time when the message is sent
      const messageWithTimestamp = {
        content: message,
        timestamp, // Attach the timestamp to the message
      };
      exchange.route(messageWithTimestamp, this.routingKey);
    } else {
      console.error(`Exchange "${this.exchangeName}" not initialized!`);
    }
  }
}
