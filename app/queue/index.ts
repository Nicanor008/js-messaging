export class Queue {
  private items: { [key: number]: { content: string | number; timestamp: number } } = {};
  private headIndex: number = 0;
  private tailIndex: number = 0;

  enqueue(item: { content: string | number; timestamp: number }) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  isEmpty(): boolean {
    return this.tailIndex === this.headIndex;
  }

  printQueue() {
    console.log(`Queue items: ${Object.values(this.items)}`);
  }
}
