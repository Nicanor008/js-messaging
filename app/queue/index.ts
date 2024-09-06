export class Queue {
  items: { [key: string | number]: string | number };
  headIndex: number;
  backIndex: number;

  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.backIndex = 0;
  }
  
  /** Add item to the back of the queue */
  enqueue(item: string | number) {
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

  /** Check if the queue is empty */
  isEmpty(): boolean {
    return this.backIndex === this.headIndex;
  }
  
  printQueue() {
    console.log(`items in the queue [${Object.entries(this.items)}]`);
  }
}
