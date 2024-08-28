export class Queue {
  items: {};
  headIndex: number;
  backIndex: number;
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.backIndex = 0;
  }
  /** Add item to the back of the queue */
  enqueue(item: any) {
    this.items[this.backIndex] = item;
    this.backIndex++;
  }
  /** Remove the item/element from the head or the front of the queue */
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  /** Get the first element in the queue */
  peek() {
    return this.items[this.headIndex];
  }
  printQueue() {
    return this.items;
  }
}
