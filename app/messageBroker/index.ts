import { Queue } from '../queue';
import { Exchange } from '../exchange';

export class MessageBroker {
  private exchanges: { [key: string]: Exchange } = {};
  private queues: { [key: string]: Queue } = {};

  createExchange(name: string, type: 'direct' | 'topic') {
    const exchange = new Exchange(name, type);
    this.exchanges[name] = exchange;
    return exchange;
  }

  getExchange(name: string) {
    return this.exchanges[name];
  }

  createQueue(name: string) {
    if (!this.queues[name]) {
      this.queues[name] = new Queue();
    }
    return this.queues[name];
  }

  getQueue(name: string) {
    return this.queues[name];
  }
}
