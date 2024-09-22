import { MessageBroker } from './messageBroker';
import { Producer } from './producer';
import { Consumer } from './consumer';

class JSMessaging {
  private broker: MessageBroker;

  constructor() {
    // Initialize the message broker
    this.broker = new MessageBroker();
  }

  public createProducer(projectName: string) {
    // Set up everything related to a producer
    const exchangeName = this.setupProjectExchangeAndQueue(projectName);
    return new Producer(this.broker, exchangeName, projectName);
  }

  public createConsumer(projectName: string) {
    // Set up everything related to a consumer
    const queueName = projectName;
    return new Consumer(this.broker, queueName);
  }

  private setupProjectExchangeAndQueue(projectName: string): string {
    // Create the queue and exchange based on project name
    const queueName = projectName;
    const exchangeName = `projectExchange-${projectName}`;
    const routingKey = `projectKey-${projectName}`;

    const queue = this.broker.createQueue(queueName);
    const exchange = this.broker.createExchange(exchangeName, 'direct');
    exchange.bindQueue(queue, routingKey);

    return exchangeName;
  }
}

// Export the JSMessaging as a single entry point
export const jsMessaging = new JSMessaging();
