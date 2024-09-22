import { Queue } from '../queue';

export class Exchange {
  private bindings: { [routingKey: string]: Queue[] } = {};

  constructor(private name: string, private type: 'direct' | 'topic') {}

  bindQueue(queue: Queue, routingKey: string) {
    if (!this.bindings[routingKey]) {
      this.bindings[routingKey] = [];
    }
    this.bindings[routingKey].push(queue);
  }

  route(message: { content: string | number; timestamp: number }, routingKey: string) {
    if (this.type === 'direct') {
      const queues = this.bindings[routingKey];
      if (queues) {
        for (const queue of queues) {
          queue.enqueue(message); // Enqueue the message with content and timestamp
        }
      } else {
        console.warn(`No queues bound to routing key "${routingKey}"`);
      }
    }
    // For topic exchange, implement more complex pattern matching
  }
}
