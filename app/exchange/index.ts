import { Queue } from '../queue';

interface Binding {
  queue: Queue;
  routingKey: string;
}

export class Exchange {
  private bindings: Binding[] = [];

  constructor(private name: string, private type: 'direct' | 'topic') {}

  bindQueue(queue: Queue, routingKey: string) {
    this.bindings.push({ queue, routingKey });
  }

  route(message: string | number, routingKey: string) {
    this.bindings.forEach(binding => {
      if (this.type === 'direct' && binding.routingKey === routingKey) {
        binding.queue.enqueue(message);
      }
      // For topic exchange, implement more complex pattern matching
    });
  }
}
